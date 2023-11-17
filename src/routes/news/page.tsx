/// Async Server Component
/// <reference types="react/experimental" />
import { Suspense } from "react";
import getStories from "../../../lib/get-stories.js";

import Stories from "../../components/Stories.js";

const App = ({ name }: { name: string }) => {
  return (
    <Suspense fallback={<StoriesPending />}>
      <News />
    </Suspense>
  );
};

const News = async () => {
  const stories = await getStories("topstories", { page: 1 });
  const page = 1;
  const offset = (page - 1) * 30;

  return <Stories page={page} offset={offset} stories={stories} />;
};

const StoriesPending = () => {
  return new Array(29).fill(0).map((_, i) => (
    <>
      <style>
        {`
      @keyframes fadeInOut {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.2;
        }
      }

      .skeleton-wrapper {
        margin: 20px 0;
        margin-top: 10px;
        margin-left: 15px;
      }

      .skeleton-title,
      .skeleton-details {
        background-color: #e0e0e0;
        height: 20px;
        margin: 5px 0;
        animation: fadeInOut 1.5s linear infinite;
      }

      .skeleton-title {
        width: 80%;
      }

      .skeleton-details {
        width: 50%;
      }
    `}
      </style>
      <div className="skeleton-wrapper">
        <div className="skeleton-title"></div>
        <div className="skeleton-details"></div>
      </div>
    </>
  ));
};

export default App;
