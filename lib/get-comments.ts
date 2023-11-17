import db from "./db.js";

// hydrate comments based on an array of item ids
export default function fetch(ids: any) {
  return Promise.all(
    ids.map(async (id: any) => {
      const item = await db.child("item").child(id).once("value");
      const val = item.val();
      return {
        id: val.id,
        user: val.by || null,
        text: val.text || "",
        date: new Date(val.time * 1000).toISOString(),
        comments: await fetch(val.kids || []),
        commentsCount: val.descendants || 0,
      };
    })
  );
}
