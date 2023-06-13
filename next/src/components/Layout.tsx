import Container from "./Container";

import { root } from "./Layout.css";

import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";

const Layout = ({ children }) => {
  return (
    <>
      <CookieConsent />
      <Header />
      <Container>
        <div className={root}>
          <main>{children}</main>
          <Footer />
        </div>
      </Container>
    </>
  );
};

export default Layout;
