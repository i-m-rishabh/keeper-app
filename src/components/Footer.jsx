import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒRishabh Pandey {year}</p>
    </footer>
  );
}

export default Footer;
