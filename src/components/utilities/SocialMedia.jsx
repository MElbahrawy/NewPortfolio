import React from "react";

const SocialMedia = () => {
  const socialMedia = [
    {
      name: "facebook",
      link: "https://www.facebook.com/profile.php?id=mb47l",
      icon: "https://img.icons8.com/ios-glyphs/30/facebook-f.png",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/melbahrawy",
      icon: "https://img.icons8.com/fluency/96/00000000/linkedin.png",
    },
    {
      name: "github",
      link: "https://github.com/mb47l",
      icon: "https://img.icons8.com/fluency/96/github.png",
    },
    {
      name: "twitter",
      link: "https://twitter.com/mb47l",
      icon: "https://img.icons8.com/ios/100/twitterx--v2.png",
    },
  ];
  return (
    <div>
      <h3 className="text-2xl font-bold my-4 dark:text-white">
        Find me on Social Media
      </h3>
      <div className="flex flex-wrap gap-4">
        {socialMedia.map((media) => (
          <a
            href={media.link}
            key={media.name}
            target="_blank"
            rel="noreferrer"
            className="bg-white transition rounded-full p-1 hover:bg-red-400"
          >
            <img src={media.icon} width={28} className="" alt={media.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
