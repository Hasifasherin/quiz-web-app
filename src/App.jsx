import React from "react";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* ✅ Navbar (if you already have one, keep it here) */}
      <header className="py-4 px-6 border-b border-zinc-200 dark:border-zinc-800">
        <h1 className="text-xl font-bold">My Portfolio</h1>
      </header>

      {/* ✅ Hero / Intro Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to My Portfolio 🚀
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
          I’m learning MERN stack development, building Arduino projects, and
          sharing my coding journey. Here are some of my works!
        </p>
      </section>

      {/* ✅ Projects Section */}
      <Projects />

      {/* ✅ Footer */}
      <footer className="py-6 mt-12 text-center border-t border-zinc-200 dark:border-zinc-800">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} My Portfolio. Built with ❤️ using React + Tailwind.
        </p>
      </footer>
    </div>
  );
}

export default App;
