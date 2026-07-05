// app/robots.ts
export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: "https://mdshakibmia.vercel.app/sitemap.xml",
	};
}
