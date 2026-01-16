import Contact from "../components/Contact/Contact";

export const metadata = {
  metadataBase: new URL(process.env.DOMAIN_NAME),
  title: {
    default: "Contact Me - Md. Shakib Mia",
    template: "%s | Md. Shakib Mia",
  },
  description:
    "Get in touch with Md. Shakib Mia, a Full Stack Web Developer. Share your project ideas, inquiries, or just say hi through this contact form.",

  keywords: [
    "Contact Md. Shakib Mia",
    "Full Stack Developer Contact",
    "MERN Stack Developer",
    "Portfolio Contact",
    "Web Development Inquiries",
    "Project Collaboration",
    "Email Md. Shakib Mia",
    "Message Md. Shakib Mia",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Contact Me - Md. Shakib Mia",
    description:
      "Get in touch with Md. Shakib Mia, a Full Stack Web Developer. Share your project ideas, inquiries, or just say hi through this contact form.",
    url: `${process.env.DOMAIN_NAME}/contact`,
    type: "website",
    siteName: "Md. Shakib Mia Portfolio",
    locale: "en_US",
    // images: [] // Optional, can leave empty if no image
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Me - Md. Shakib Mia",
    description:
      "Get in touch with Md. Shakib Mia, a Full Stack Web Developer. Share your project ideas, inquiries, or just say hi through this contact form.",
    site: "@shakib_mia",
    // image: undefined
  },

  alternates: {
    canonical: `${process.env.DOMAIN_NAME}/contact`,
  },
};

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
