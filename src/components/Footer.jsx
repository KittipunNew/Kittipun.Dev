import React from "react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col justify-center items-center h-20 mt-10">
      <button
        onClick={scrollToTop}
        className="btn bg-black text-white text-xl font-bogart"
      >
        Back to top
      </button>
      <h1>© 2025 Kittipun | Web Developer</h1>
    </div>
  );
}

export default Footer;
