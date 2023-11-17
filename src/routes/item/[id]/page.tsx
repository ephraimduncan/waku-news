const Page = ({ id }: { id: string }) => (
  <div>
    <h2>Work in Progress</h2>
  </div>
);

export default Page;

// export default async function ItemPage({ id }: { id: string }) {
//   const story = await getItem(id);

//   const comments = await getComments(story?.comments);

//   return <Item story={story} comments={comments} />;
// }
