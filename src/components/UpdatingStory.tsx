"use client";

import { useEffect, useState } from "react";
import { observe } from "../../lib/get-item.js";
import Story from "./Story.js";

const UpdatingStory = (props: any) => {
  const [state, setState] = useState(props);

  useEffect(() => {
    return observe(props.id, (data: any) => setState(data));
  }, [props.id]);

  return <Story {...state} />;
};

export default UpdatingStory;
