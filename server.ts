import express from "express";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Add parser middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/zoho-inquiry", async (req, res) => {
    try {
      const { name, phone, email, date, venue, guestCount } = req.body;

      // Construct Zoho form parameters
      const params = new URLSearchParams();
      params.append("xnQsjsdp", "0b0c8522cf16d3fc3fc967ad9c869d7fc301db716176b02545e8a2f0c02a0ce0");
      params.append("zc_gad", "");
      params.append("xmIwtLD", "888ea3ac01ee364d28cc8e044ba30b2b4b1b358f83d03459391470919c76fba7e7b920d3d0420806e285e090c8ef657f");
      params.append("actionType", "Q29udGFjdHM=");
      params.append("returnURL", "https://thevenetiangarden.in/");
      params.append("aG9uZXlwb3Q", "");

      // Split full name into first and last name
      const parts = (name || "").trim().split(/\s+/);
      let firstName = "";
      let lastName = "";
      if (parts.length > 1) {
        firstName = parts[0];
        lastName = parts.slice(1).join(" ");
      } else {
        lastName = name || "Inquirer";
      }

      params.append("First Name", firstName);
      params.append("Last Name", lastName);
      params.append("Mobile", phone || "");
      params.append("Email", email || "");

      // Compile booking details into Description
      const description = `Proposed Celebration Date: ${date || "Not Decided"}\nPreferred Segment: ${venue || "Not Specified"}\nEstimated Guest Count: ${guestCount || "Not Specified"}`;
      params.append("Description", description);

      console.log("Forwarding inquiry to Zoho CRM:", { firstName, lastName, phone, email, description });

      const zohoResponse = await fetch("https://crm.zoho.in/crm/WebToContactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      if (!zohoResponse.ok) {
        console.error("Zoho response was not OK", zohoResponse.status, zohoResponse.statusText);
        // We will still succeed client-side but log the warning
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Error submitting inquiry to Zoho CRM:", error);
      // Fallback: we return success so that user's local state is still saved
      res.json({ success: true, warning: "Submitting to Zoho failed, logged locally" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV === "development") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, server.cjs is in /dist, so __dirname is /dist
    const distPath = typeof __dirname !== "undefined" ? __dirname : path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
