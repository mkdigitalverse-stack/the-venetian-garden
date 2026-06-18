import React, { useState } from "react";

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
}

export const VenetianGardenLogo: React.FC<LogoProps> = ({ className = "h-12 w-12", style }) => {
  const [imgSrc, setImgSrc] = useState("https://lh3.googleusercontent.com/d/1sQ5yqQRcoBr3t8268KpAKVpHBO0J67gC");

  const handleError = () => {
    // If the lh3 link fails or is slow to resolve, gracefully fall back to the standard export URL
    if (imgSrc !== "https://drive.google.com/uc?export=view&id=1sQ5yqQRcoBr3t8268KpAKVpHBO0J67gC") {
      setImgSrc("https://drive.google.com/uc?export=view&id=1sQ5yqQRcoBr3t8268KpAKVpHBO0J67gC");
    }
  };

  return (
    <img
      src={imgSrc}
      alt="The Venetian Garden Logo"
      className={`${className} object-contain`}
      style={style}
      id="venetian-garden-svg-logo" // Keep the ID same to respect CSS selectors and styling
      onError={handleError}
      referrerPolicy="no-referrer"
    />
  );
};

