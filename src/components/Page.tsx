import Header from "./Header.js";
import Meta from "./Meta.js";

const Page = ({ children }: any) => (
  <div className="main">
    <Meta />
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

export default Page;
