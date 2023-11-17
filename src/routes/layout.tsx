import Header from "../components/Header.js";

const Layout = ({ children }: any) => (
  <div className="main">
    <Header />

    <div className="page">{children}</div>

    <style>{`
      .main {
        width: 85%;
        margin: auto;
        padding: 5px 0 0 0;
      }

      .page {
        color: #828282;
        background: #fff;
        padding: 3px 10px;
      }

      @media (max-width: 750px) {
        .main {
          padding: 0;
          width: auto;
        }
      }
    `}</style>
  </div>
);

export default Layout;
