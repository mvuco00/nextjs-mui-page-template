import PropTypes from "prop-types";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
