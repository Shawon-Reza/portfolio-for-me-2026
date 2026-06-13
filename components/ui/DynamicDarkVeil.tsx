"use client";

import dynamic from "next/dynamic";

const DynamicDarkVeil = dynamic(() => import("./DarkVeil"), {
  ssr: false,
});

export default DynamicDarkVeil;
