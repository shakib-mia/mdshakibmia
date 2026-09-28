import Button from "../../components/Button/Button";
import GallerySlider from "../../components/GallerySlider/GallerySlider";
import PrevAndNextProject from "../../components/PrevAndNextProject/PrevAndNextProject";
import { projectsCollection } from "../../lib/mongodb";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
	const projects = await projectsCollection
		.find({}, { projection: { slug: 1, _id: 0 } })
		.toArray();

	return projects.map((project) => ({
		slug: project.slug,
	}));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const project = await projectsCollection.findOne({ slug });

	if (!project) {
		return {
			title: "Project Not Found | Md. Shakib Mia",
			description: "The requested project does not exist.",
		};
	}

	const title = `${project.title} – ${project.category}`;
	const description =
		project.meta?.description || project.projectSummary || project.overview;

	const keywords = [
		...(project.meta?.keywords || []),
		"Full Stack Developer Projects",
		"MERN Stack",
		"Next.js",
		"React.js",
		"Portfolio Project",
	];

	const projectUrl = `${process.env.DOMAIN_NAME}projects/${slug}`;

	return {
		title: {
			default: title,
			template: "%s | Md. Shakib Mia",
		},
		description,
		keywords,
		robots: {
			index: true,
			follow: true,
		},
		openGraph: {
			title,
			description,
			url: projectUrl,
			type: "website",
			siteName: "Md. Shakib Mia Portfolio",
			locale: "en_US",
			images: project.image
				? [
						{
							url: project.image,
							width: 1200,
							height: 630,
						},
					]
				: [],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			site: "@TemplateHearth",
			images: project.otherImages?.[0] || project.image,
		},
		alternates: {
			canonical: projectUrl,
		},
	};
}

const page = async ({ params }) => {
	const { slug } = await params;
	const project = await projectsCollection.findOne({ slug });
	console.log(project);

	if (!project) {
		return notFound();
	}

	const galleryImages = project.otherImages?.length
		? [project.image, ...project.otherImages]
		: [project.image];

	return (
		<main className="space-y-8">
			<PrevAndNextProject slug={slug} />

			<section>
				<h1 className="font-bold!">
					{project.title} {project.category.length > 0 ? "-" : ""}{" "}
					{project.category}
				</h1>

				<p className="my-4">{project.overview}</p>

				<GallerySlider images={galleryImages} />
			</section>

			{project.livePreview && (
				<Button href={project.livePreview} target="_blank">
					Live Preview
				</Button>
			)}

			<section>
				<h2 className="font-bold!">Objective</h2>
				<p>{project.objective}</p>
			</section>

			<section>
				<h2 className="font-bold!">Role and Responsibilities</h2>

				<ul className="list-disc pl-8">
					{project.roleAndResponsibilities?.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</section>

			<section>
				<h2 className="font-bold!">Solution Strategy</h2>
				<p>{project.solutionStrategy}</p>
			</section>

			<section>
				<h2 className="font-bold!">Key Features</h2>

				<ul className="list-disc pl-8">
					{project.keyFeatures?.map((feature, index) => (
						<li key={index}>{feature}</li>
					))}
				</ul>
			</section>

			<section>
				<h2 className="font-bold!">Tech Stack</h2>

				<div className="ml-8 space-y-4">
					{Object.entries(project.techStack || {})
						.filter(([, technologies]) => technologies?.length > 0)
						.map(([category, technologies]) => (
							<div key={category}>
								<h3 className="font-bold! capitalize">
									{category}:
								</h3>

								<ul className="list-disc pl-8">
									{technologies.map((technology, index) => (
										<li key={index}>{technology}</li>
									))}
								</ul>
							</div>
						))}
				</div>
			</section>

			<section>
				<h2 className="font-bold!">Performance and Optimization</h2>
				<p>{project.performanceAndOptimization}</p>
			</section>

			<section>
				<h2 className="font-bold!">Challenges and Learnings</h2>
				<p>{project.challengesAndLearnings}</p>
			</section>

			<section>
				<h2 className="font-bold!">Final Outcome</h2>
				<p>{project.finalOutcome}</p>
			</section>

			<section>
				<h2 className="font-bold!">Ideal Use Cases</h2>

				<ul className="list-disc pl-8">
					{project.idealUseCases?.map((useCase, index) => (
						<li key={index}>{useCase}</li>
					))}
				</ul>
			</section>
		</main>
	);
};

export default page;
