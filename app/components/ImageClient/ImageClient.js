"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const ImageClient = (props) => {
  const [loaded, setLoaded] = useState(false);

  //   useEffect(() => console.log(loaded), [loaded]);
  console.log(loaded);

  return (
    <Image
      src={props.src}
      alt={props.alt}
      className={`${loaded ? "blur-none" : "blur-2xl"} ${props.className}`}
      onLoadingComplete={(e) => setLoaded(true)}
      {...props}
    />
  );
};

export default ImageClient;
