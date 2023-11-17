import getStories from "../../../lib/get-stories.js";
import Stories from "../../components/Stories.js";

export default async function JobsPage() {
  const stories = await getStories("jobstories");

  return <Stories stories={stories} />;
}
