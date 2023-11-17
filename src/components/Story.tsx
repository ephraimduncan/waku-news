import timeAgo from "../../lib/time-ago.js";
import parse from "url-parse";

const Story = ({ id, title, date, url, user, score, commentsCount }: any) => {
  const { host } = parse(url);

  return (
    <div>
      <div className="title">
        {url ? <a href={url}>{title}</a> : <a href={`/item/${id}`}>{title}</a>}
        {url && (
          <span className="source">
            <a href={`http://${host}`}>{host.replace(/^www\./, "")}</a>
          </span>
        )}
      </div>
      <div className="meta">
        {score} {plural(score, "point")} by{" "}
        <a href={`/user?id=${user}`}>{user}</a>
        <a href={`/item/${id}`}>
          {date && timeAgo(new Date(date)) /* note: we re-hydrate due to ssr */}{" "}
          ago
        </a>{" "}
        |{" "}
        <a href={`/item/${id}`}>
          {commentsCount} {plural(commentsCount, "comment")}
        </a>
      </div>
      <style>{`
        .title {
          font-size: 15px;
          margin-bottom: 3px;
        }

        .title > a {
          color: #000;
          text-decoration: none;
        }

        .title > a:visited {
          color: #828282;
        }

        .meta {
          font-size: 12px;
        }

        .source {
          font-size: 12px;
          display: inline-block;
          margin-left: 5px;
        }

        .source a,
        .meta a {
          color: #828282;
          text-decoration: none;
        }

        .source a:hover,
        .meta a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

const plural = (n: any, s: any) => s + (n === 0 || n > 1 ? "s" : "");

export default Story;
