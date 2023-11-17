import { Link } from "waku/router/client";

export default function Nav() {
  return (
    <ul>
      <Item href="/newest">new</Item>
      <Item href="/show">show</Item>
      <Item href="/ask">ask</Item>
      <Item href="/jobs">jobs</Item>
      <Item href="/submit">submit</Item>

      <style>{`
        ul {
          list-style-type: none;
        }
      `}</style>
    </ul>
  );
}

const Item = ({ href, children }: any) => (
  <li>
    <Link href={href}>
      <a className="nav-item">{children}</a>
    </Link>

    <style>{`
      li {
        display: inline-block;
      }

      a.nav-item {
        display: inline-block;
        padding: 10px;
        font-size: 11px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000;
        cursor: pointer;
      }
    `}</style>
  </li>
);
