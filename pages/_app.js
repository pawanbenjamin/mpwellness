import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  //layout could be added here
  return (
    <Layout>
      <Nav />
      <Component {...pageProps} />
      <Footer className="footer" />
    </Layout>
  );
}

export default MyApp;
