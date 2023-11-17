/// Async Server Component
/// <reference types="react/experimental" />
import { Suspense } from "react";
import { News } from "../../components/News.js";
import { StoriesPending } from "../../components/StoriesPending.js";

const App = ({ name }: { name: string }) => {
  return (
    <Suspense fallback={<StoriesPending />}>
      <News />
    </Suspense>
  );
};

export default App;
