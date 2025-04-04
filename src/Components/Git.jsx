import React from 'react'

const Git = () => {
  return (
    <div className="w-auto pl-[4%]  pt-[4%]   flex flex-col gap-4 ">
    <p
      className="font-normal text-lg text-[#B6C4D7] text-left"
      style={{ fontFamily: "'Inter', serif" }}
    >
      Trusted by the best front-end teams
    </p>
    <div className="flex flex-wrap  gap-6 sm:gap-10 md:gap-12 lg:gap-16 w-[1211px]   text-left">
      <img
        src="github.svg"
        alt="Git"
        className="w-16 sm:w-20 md:w-24 lg:w-28"
      />
      <img
        src="openai.svg"
        alt="AI"
        className="w-16 sm:w-20 md:w-24 lg:w-28"
      />
      <img
        src="nasa.svg"
        alt="NASA"
        className="w-16 sm:w-20 md:w-24 lg:w-28"
      />
      <img
        src="google.svg"
        alt="Google"
        className="w-16 sm:w-20 md:w-24 lg:w-28"
      />
      <img
        src="fedora.svg"
        alt="Fedora"
        className="w-16 sm:w-20 md:w-24 lg:w-28"
      />
      <img
        src="gitlab.svg"
        alt="GitLab"
        className="w-16 sm:w-20 md:w-24 lg:w-28"
      />
      <img
        src="upwork.svg"
        alt="Upwork"
        className="w-16 sm:w-20 md:w-24 lg:w-28"
      />
    </div>
  </div>
  )
}

export default Git;