"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaGithub} from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  liveDemoUrl,
  githubRepositoryUrl
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <>
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full ">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <div className="flex items-center mt-4">
            <BiWorld className="text-xs mr-2"/>
            <a 
              href={liveDemoUrl} 
              className="peer cursor-pointer inline-flex items-center font-medium text-xs text-gray-700 dark:text-white/70 hover:underline"
              target="_blank"
            >live demo</a>
            <BsArrowRight className="ml-2 text-xs opacity-70 peer-hover:translate-x-1 transition" />
          </div>
          <div className="flex items-center mt-2 mb-6">
            <FaGithub className="text-xs mr-2"/>
            <a 
              href={githubRepositoryUrl} 
              className="peer cursor-pointer inline-flex items-center font-medium text-xs text-gray-700 dark:text-white/70 hover:underline"
              target="_blank"  
            >github repository</a>
            <BsArrowRight className="ml-2 text-xs opacity-70 peer-hover:translate-x-1 transition" />
          </div>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="
            sm:absolute rounded-b-lg shadow-2xl
            sm:block sm:top-8 sm:-right-40 sm:w-[28.25rem] sm:rounded-t-lg sm:shadow-2xl
            sm:transition 
            sm:group-hover:scale-[1.04]
            sm:group-hover:-translate-x-3
            sm:group-hover:translate-y-3
            sm:group-hover:-rotate-2
          "
        />
      </section>
    </motion.div>
    </>
  );
}