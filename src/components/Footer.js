import React from "react";

const styles = {
  footer: {
    background: "linear-gradient(to bottom, #c8bcda43 0%, #ffa69ef1 100%)",
    textAlign: "center",
    height: "60px",
    position: "fixed",
    bottom: "0",
    width: "100%",
    marginTop: "auto",
  },
  h6: {
    fontSize: "14px",
    background: "transparent",
  },
};

const Footer = () => {
  return (
    <div>
      <footer style={styles.footer}>
        <h6 style={styles.h6}>Made with coffee and React</h6>
      </footer>
    </div>
  );
};

export default Footer;
