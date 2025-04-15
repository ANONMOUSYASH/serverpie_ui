import React from 'react';
import '../Styles/GitIcons.css';

const GitIcons = () => {
  return (
    <div className="w-auto m-auto pr-[8%] flex flex-col gap-4">
      <p
        className="par234 font-normal  text-lg text-[#B6C4D7] text-left"
        style={{ fontFamily: "'Inter', serif" }}
      >
        Trusted by the best front-end teams
      </p>

      <div className="git-icons-container">
        <div className="git-icons-scroll">
          {/* ICON SET 1 */}
          <div className="flex gap-6 sm:gap-10 md:gap-12 lg:gap-16">
            <img src="github.svg" alt="Git" className="w-16 sm:w-20 md:w-24 lg:w-28" />
            <img src="openai.svg" alt="AI" className="w-16 sm:w-20 md:w-24 lg:w-28" />
            <img src="nasa.svg" alt="NASA" className="w-16 sm:w-20 md:w-24 lg:w-28" />
            <img src="google.svg" alt="Google" className="w-16 sm:w-20 md:w-24 lg:w-28" />
            <img src="fedora.svg" alt="Fedora" className="w-16 sm:w-20 md:w-24 lg:w-28" />
            <img src="gitlab.svg" alt="GitLab" className="w-16 sm:w-20 md:w-24 lg:w-28" />
            <img src="upwork.svg" alt="Upwork" className="w-16 sm:w-20 md:w-24 lg:w-28" />
          </div>

          {/* ICON SET 2 - Mobile only for infinite scroll */}
          <div className="flex gap-6 sm:gap-10 md:gap-12 lg:gap-16  md:hidden">
            <img src="github.svg" alt="Git" className="w-16" />
            <img src="openai.svg" alt="AI" className="w-16" />
            <img src="nasa.svg" alt="NASA" className="w-16" />
            <img src="google.svg" alt="Google" className="w-16" />
            <img src="fedora.svg" alt="Fedora" className="w-16" />
            <img src="gitlab.svg" alt="GitLab" className="w-16" />
            <img src="upwork.svg" alt="Upwork" className="w-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitIcons;
