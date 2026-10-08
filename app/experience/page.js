import React from "react";
import laptop from "../assets/laptop.jpg";
import Image from "next/image";
import ImageClient from "../components/ImageClient/ImageClient";

export const metadata = {
	metadataBase: new URL(process.env.DOMAIN_NAME),
	title: {
		default: "Professional Experience - Md. Shakib Mia",
		template: "%s | Md. Shakib Mia",
	},
	description:
		"Explore the professional experience of Md. Shakib Mia, a Full Stack Web Developer specializing in MERN stack, with hands-on experience building production-ready web applications, SaaS platforms, and digital products.",

	keywords: [
		"Full Stack Developer",
		"MERN Stack",
		"React.js",
		"Next.js",
		"Professional Experience",
		"Web Development Portfolio",
		"Frontend Developer",
		"Backend Developer",
		"Portfolio",
		"SaaS Platforms",
		"Digital Products",
	],

	robots: {
		index: true,
		follow: true,
	},

	openGraph: {
		title: "Professional Experience - Md. Shakib Mia",
		description:
			"Explore the professional experience of Md. Shakib Mia, a Full Stack Web Developer specializing in MERN stack, with hands-on experience building production-ready web applications, SaaS platforms, and digital products.",
		url: `${process.env.DOMAIN_NAME}experience`,
		type: "website",
		siteName: "Md. Shakib Mia Portfolio",
		locale: "en_US",
		images: [],
	},

	twitter: {
		card: "summary_large_image",
		title: "Professional Experience - Md. Shakib Mia",
		description:
			"Explore the professional experience of Md. Shakib Mia, a Full Stack Web Developer specializing in MERN stack, with hands-on experience building production-ready web applications, SaaS platforms, and digital products.",
		site: "@shakib_mia",
	},

	alternates: {
		canonical: `${process.env.DOMAIN_NAME}experience`,
	},
};

const page = () => {
	const experiences = [
		{
			role: "Full Stack Developer",
			company: "TotalTech Software",
			duration: "January 2026 – October 2026",
			description: [
				"Contributed to 4 production web products — 2 business web applications and 2 production websites, working across frontend, backend APIs, databases, authentication, dashboards, and business logic.",
				"Developed a multi-tenant SaaS platform with 12+ business modules and a retail management application with 6+ core modules, covering workshop operations, customers, vehicles, sales, inventory, invoicing, payments, and user management.",
				"Implemented data isolation, RBAC, permission-driven workflows, REST APIs, authentication, and responsive interfaces using React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, Prisma, and MongoDB.",
			],
		},
		{
			role: "MERN Stack Developer",
			company: "Adztronaut",
			duration: "February 2023 – January 2026",
			description: [
				"Developed and maintained production web applications and responsive interfaces using React.js, Next.js, TypeScript, and modern frontend architecture.",
				"Built dashboards and account workflows, release management features, and integrated an Ollama-based AI chatbot for GeetBazaar.",
				"Worked across frontend development, REST API integration, state management, and production maintenance.",
			],
		},
		{
			role: "Full Stack Developer",
			company: "Raddito LLC",
			duration: "January 2024 – January 2025",
			description: [
				"Developed full-stack features and administrative workflows for client platforms using modern web technologies.",
				"Integrated REST APIs, improved user flows, and resolved production issues, contributing to reliable application functionality and maintenance.",
			],
		},
		{
			role: "Software Engineering Intern",
			company: "CloudLumos",
			duration: "November 2023 – February 2024",
			description: [
				"Developed reusable React components and responsive interfaces while integrating REST APIs.",
				"Contributed to state management, UI improvements, data-fetching workflows, and production fixes.",
			],
		},
		{
			role: "React Developer Intern",
			company: "Banao Tech",
			duration: "July 2022 – June 2023",
			description: [
				"Developed reusable React components and responsive user interfaces for production web applications.",
				"Integrated REST APIs and data-fetching workflows, improving frontend functionality and user experience.",
			],
		},
	];

	return (
		<>
			<div className="lg:w-1/2 mx-auto text-center">
				<h1 className="font-bold!">Professional Experience</h1>
				<p>
					Hands-on experience working on production-ready web
					applications, SaaS platforms, and digital products—focused
					on performance, clean architecture, and real-world
					usability.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 items-start">
				<div className="md:sticky md:top-0 h-fit">
					<ImageClient
						src={laptop}
						className="h-full rounded-lg aspect-video lg:aspect-square object-center object-cover"
						alt="Laptop"
					/>
				</div>

				<div className="space-y-4">
					{experiences.map((exp, index) => (
						<section key={index}>
							<div className="flex items-end gap-3">
								<h2 className="text-xl font-bold!">
									{exp.role}
								</h2>
							</div>

							<p className="text-white mb-2">
								{exp.company}{" "}
								<span className="text-sm text-white-2">
									({exp.duration})
								</span>
							</p>

							<ul className="list-disc pl-5 space-y-1">
								{exp.description.map((desc, i) => (
									<li key={i} className="text-white-2">
										{desc}
									</li>
								))}
							</ul>
						</section>
					))}
				</div>
			</div>
		</>
	);
};

export default page;
