import Comment from "./Comment.js";
import CommentForm from "./CommentForm.js";
import Story from "./Story.js";
import getComments from "../../lib/get-comments.js";

const Item = async ({ story }: any) => {
  let com;

  if (story.comments) {
    com = await getComments(story.comments);

    console.log(com);
  }

  return (
    <div className="item">
      <Story {...story} />

      <div className="form">
        <CommentForm />
      </div>

      <div className="comments">
        {com ? (
          com.map((comment: any) => <Comment key={comment.id} {...comment} />)
        ) : (
          <div className="loading">Loading…</div>
        )}
      </div>

      <style>{`
      .item {
        padding: 10px 29px;
      }

      .form {
        padding: 15px 0;
      }

      .loading {
        font-size: 13px;
      }

      .comments {
        padding: 10px 0 20px;
      }

      @media (max-width: 750px) {
        .item {
          padding: 8px 0px;
        }
      }
    `}</style>
    </div>
  );
};

export default Item;
