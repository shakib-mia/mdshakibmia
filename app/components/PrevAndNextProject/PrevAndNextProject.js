import { projectsCollection } from "@/app/lib/mongodb";
import Link from "next/link";
import React from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const PrevAndNextProject = async ({ slug }) => {
  const current = await projectsCollection.findOne(
    { slug },
    { projection: { order: 1 } },
  );

  const prev = await projectsCollection
    .find({ order: { $lt: current.order } })
    .sort({ order: -1 })
    .limit(1)
    .project({ slug: 1, title: 1, category: 1 })
    .toArray();

  const next = await projectsCollection
    .find({ order: { $gt: current.order } })
    .sort({ order: 1 })
    .limit(1)
    .project({ slug: 1, title: 1, category: 1 })
    .toArray();

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between gap-2">
      <aside>
        {prev.length > 0 ? (
          <Link
            className="border border-white/30 p-2 lg:p-4 inline-flex items-center gap-1 rounded-lg w-full"
            href={`/projects/${prev[0].slug}`}
          >
            <MdOutlineKeyboardDoubleArrowLeft className="text-6xl" />
            <aside>
              <h3>{prev[0].title}</h3>
              <h4>{prev[0].category}</h4>
            </aside>
          </Link>
        ) : (
          <></>
        )}
      </aside>
      <aside>
        {next.length > 0 ? (
          <Link
            className="border border-white/30 p-2 lg:p-4 inline-flex items-center gap-1 rounded-lg w-full justify-end"
            href={`/projects/${next[0].slug}`}
          >
            <aside className="text-right">
              <h3>{next[0].title}</h3>
              <h4>{next[0].category}</h4>
            </aside>
            <MdOutlineKeyboardDoubleArrowRight className="text-6xl" />
          </Link>
        ) : (
          <></>
        )}
      </aside>
    </div>
  );
};

export default PrevAndNextProject;
