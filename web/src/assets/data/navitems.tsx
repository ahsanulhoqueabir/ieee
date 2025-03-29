const committee: {
  name: string;
  url: string;
  section: {
    name: string;
    url: string;
  }[];
} = {
  name: "Executive Committee",
  url: "/executive-committee",
  section: [
    {
      name: "2025",
      url: "/ex-com/2025",
    },
    {
      name: "2024",
      url: "/ex-com/2024",
    },
    {
      name: "2023",
      url: "/ex-com/2023",
    },
  ],
};

const about: {
  name: string;
  url: string;
  section: {
    name: string;
    url: string;
  }[];
} = {
  name: "About",
  url: "/about",
  section: [
    {
      name: "About Us",
      url: "/about-us",
    },
    { name: "Membership", url: "/membership" },
    { name: "Humans of IEEE CS JnU", url: "/humans-of-ieee-cs-JnU" },
    { name: "Blogs", url: "/blogs" },
    { name: "Verify", url: "/verify-certificate" },
    { name: "Awards", url: "/awards" },
    { name: "Achievements", url: "/achievements" },
  ],
};

export { committee, about };
