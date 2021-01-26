import React, { useEffect, useState } from "react";

const Footer = () => {
  const [isHome, setIsHome] = useState(true);
  useEffect(() => {
    if (document.body.clientHeight < 2500) {
      setIsHome(false);
    }
  }, []);
  return (
    <footer className="footer">
      <p>
        React Made with <span>React</span> and &#x1F497;
      </p>
      {isHome && <p>Thank you for having scrolled so far</p>}
    </footer>
  );
};

export default Footer;
