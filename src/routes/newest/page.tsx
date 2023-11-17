import getStories from "../../../lib/get-stories.js";
import Stories from "../../components/Stories.js";

export default async function Newest() {
  const stories = await getStories("newstories");

  return <Stories stories={stories} />;
}
