import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects pathname={"/"} />
    </>
  );
}
