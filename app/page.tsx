import Hero from "./components/Hero";
import Services from "./components/Services";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="mt-16 mx-auto py-4">
        <Hero />
        {/* <Feature /> */}
        <Services />
      </div>
    </main>
  );
}
