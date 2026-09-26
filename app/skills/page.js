import React from "react";
import { BsOpenai } from "react-icons/bs";
import { FaReact, FaNodeJs, FaDatabase, FaCreditCard } from "react-icons/fa";
import {
	SiExpress,
	SiJavascript,
	SiJsonwebtokens,
	SiMongodb,
	SiNextdotjs,
	SiOllama,
	SiRedux,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiTanstack,
	SiAxios,
	SiZod,
	SiPostgresql,
	SiPrisma,
	SiGit,
	SiLinux,
	SiPm2,
	SiNginx,
	SiReacthookform,
} from "react-icons/si";

import { TbBrandFirebase, TbBrandOauth } from "react-icons/tb";
export const metadata = {
	metadataBase: new URL(process.env.DOMAIN_NAME),
	title: {
		default: "Skills - Md. Shakib Mia",
		template: "%s | Md. Shakib Mia",
	},
	description:
		"Showcasing my skills as a Full Stack Developer: React, Next.js, Node.js, Express, PostgreSQL, Prisma, MongoDB, TailwindCSS, Redux, REST APIs, authentication, payment workflows, AI integrations, and production deployment.",
	keywords: [
		"Full Stack Developer skills",
		"React.js",
		"Next.js",
		"Node.js",
		"Express.js",
		"TypeScript",
		"PostgreSQL",
		"Prisma ORM",
		"MongoDB",
		"TailwindCSS",
		"Redux",
		"React Hook Form",
		"TanStack Query",
		"Axios",
		"Zod",
		"REST API",
		"JWT",
		"Firebase Auth",
		"Google OAuth",
		"OpenAI API",
		"Ollama",
		"Git",
		"Linux",
		"PM2",
		"Nginx",
		"Deployment",
		"Payment Flows",
		"Web Development Portfolio",
	],
	robots: { index: true, follow: true },
	openGraph: {
		title: "Skills - Md. Shakib Mia",
		description:
			"Showcasing my skills as a Full Stack Developer: React, Next.js, Node.js, Express, PostgreSQL, Prisma, REST APIs, authentication, business workflows, AI integrations, and production deployment.",
		url: `${process.env.DOMAIN_NAME}skills`,
		type: "website",
		siteName: "Md. Shakib Mia Portfolio",
		locale: "en_US",
		images: [
			{
				url: `${process.env.DOMAIN_NAME}skills-og.png`,
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Skills - Md. Shakib Mia",
		description:
			"Full Stack Developer skilled in React, Next.js, Node.js, PostgreSQL, Prisma, REST APIs, authentication, business workflows, AI integrations, and production deployment.",
		site: "@shakib_mia",
	},
	alternates: { canonical: `${process.env.DOMAIN_NAME}skills` },
};
const page = () => {
	const skills = [
		{
			category: "Languages",
			items: [
				{
					name: "JavaScript",
					icon: (
						<SiJavascript className="text-yellow-300 group-hover:text-white w-10 h-10 transition" />
					),
				},
				{
					name: "TypeScript",
					icon: (
						<SiTypescript className="text-blue-500 group-hover:text-white w-10 h-10 transition" />
					),
				},
			],
		},
		{
			category: "Frontend",
			items: [
				{
					name: "React.js",
					icon: (
						<FaReact className="text-blue-500 group-hover:text-white w-10 h-10 transition" />
					),
				},
				{
					name: "Next.js",
					icon: (
						<SiNextdotjs className="w-10 h-10 transition group-hover:text-white" />
					),
				},
				{
					name: "TailwindCSS",
					icon: (
						<SiTailwindcss className="text-sky-400 group-hover:text-white w-10 h-10 transition" />
					),
				},
				{
					name: "Redux",
					icon: (
						<SiRedux className="text-purple-700 group-hover:text-white w-10 h-10 transition" />
					),
				},
				{
					name: "React Hook Form",
					icon: (
						<SiReacthookform className="w-10 h-10 transition group-hover:text-white" />
					),
				},
				{
					name: "TanStack Query",
					icon: (
						<SiTanstack className="w-10 h-10 transition group-hover:text-white" />
					),
				},
			],
		},
		{
			category: "Backend & APIs",
			items: [
				{
					name: "Node.js",
					icon: (
						<FaNodeJs className="text-green-600 w-10 h-10 transition group-hover:text-white" />
					),
				},
				{
					name: "Express.js",
					icon: (
						<SiExpress className="w-10 h-10 transition group-hover:text-white" />
					),
				},
				{
					name: "REST APIs",
					icon: (
						<FaDatabase className="w-10 h-10 transition group-hover:text-white" />
					),
				},
				{
					name: "Axios",
					icon: (
						<SiAxios className="w-10 h-10 transition group-hover:text-white" />
					),
				},
				{
					name: "Zod",
					icon: (
						<SiZod className="w-10 h-10 transition group-hover:text-white" />
					),
				},
			],
		},
		{
			category: "Database & ORM",
			items: [
				{
					name: "PostgreSQL",
					icon: (
						<SiPostgresql className="text-sky-500 w-10 h-10 transition group-hover:text-white" />
					),
				},
				{
					name: "Prisma ORM",
					icon: (
						<SiPrisma className="w-10 h-10 transition group-hover:text-white" />
					),
				},
				{
					name: "MongoDB",
					icon: (
						<SiMongodb className="text-green-500 w-10 h-10 transition group-hover:text-white" />
					),
				},
			],
		},
		{
			category: "Authentication & Security",
			items: [
				{
					name: "JWT",
					icon: (
						<SiJsonwebtokens className="w-10 h-10 transition group-hover:text-white" />
					),
				},
				{
					name: "Firebase Auth",
					icon: (
						<TbBrandFirebase className="text-yellow-500 w-10 h-10 transition group-hover:text-white" />
					),
				},
				{
					name: "Google OAuth",
					icon: (
						<TbBrandOauth className="w-10 h-10 transition group-hover:text-white" />
					),
				},
			],
		},
		{
			category: "AI Integration",
			items: [
				{
					name: "OpenAI API",
					icon: (
						<BsOpenai className="w-10 h-10 transition group-hover:text-white" />
					),
				},
				{
					name: "Ollama",
					icon: (
						<SiOllama className="w-10 h-10 transition group-hover:text-white" />
					),
				},
				{
					name: "AI Workflows",
					icon: (
						<BsOpenai className="w-10 h-10 transition group-hover:text-white" />
					),
				},
			],
		},

		{
			category: "DevOps & Production",
			items: [
				{
					name: "Git",
					icon: (
						<SiGit className="w-10 h-10 transition group-hover:text-white" />
					),
				},
				{
					name: "Linux",
					icon: (
						<SiLinux className="w-10 h-10 transition group-hover:text-white" />
					),
				},
				{
					name: "PM2",
					icon: (
						<SiPm2 className="w-10 h-10 transition group-hover:text-white" />
					),
				},
				{
					name: "Nginx",
					icon: (
						<SiNginx className="w-10 h-10 transition group-hover:text-white" />
					),
				},
				{
					name: "Vercel",
					icon: (
						<SiVercel className="w-10 h-10 transition group-hover:text-white" />
					),
				},
			],
		},
	];
	return (
		<div>
			<h1 className="font-bold! text-center mb-8">My Skills</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{skills.map((skillCategory, index) => (
					<aside key={index}>
						<h2 className="font-semibold! text-lg mb-4">
							{skillCategory.category}
						</h2>
						<ul className="gap-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							{skillCategory.items.map((item, idx) => (
								<li
									className="bg-white/20 group flex flex-col items-center justify-center p-4 aspect-square w-full text-center rounded-lg shadow-high hover:shadow-primary hover:bg-primary transition"
									key={idx}
								>
									{item.icon}
									<h3 className="mt-2">{item.name}</h3>
								</li>
							))}
						</ul>
					</aside>
				))}
			</div>
		</div>
	);
};
export default page;
