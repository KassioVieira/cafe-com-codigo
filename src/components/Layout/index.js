import React from "react";
import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <Header />
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </main>
  </>
);

export default Layout;
