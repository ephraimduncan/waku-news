import getStories from "../../lib/get-stories.js";
import Stories from "./Stories.js";

export const News = async ({ page }: { page?: string }) => {
  const stories = await getStories("topstories", { page: 1 });
  const pageNumber = Number(page) || 1;
  const offset = (pageNumber - 1) * 30;

  return <Stories page={pageNumber} offset={offset} stories={stories} />;
};
