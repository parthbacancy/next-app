"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen">
      {/* <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "a" }, { name: "b" }, { name: "c" }];
          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button> */}

      <Image
        src={"https://bit.ly/react-cover"}
        alt={"travel"}
        fill
        className="object-cover"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw"
        quality={100}
        priority
      />
    </main>
  );
}
