import getStories from "../../../lib/get-stories.js";
import Stories from "../../components/Stories.js";

export default async function AskPage() {
  const stories = await getStories("askstories");

  return <Stories stories={stories} />;
}
