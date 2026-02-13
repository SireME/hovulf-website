export type SiteAsset = {
  image: string;
  title: string;
  description: string;
};

export type AssetSection = {
  section: string;
  items: SiteAsset[];
};

export const assetSections: AssetSection[] = [
  {
    section: "branding",
    items: [
      {
        image: "/assets/images/image1.png",
        title: "HOVULF Logo",
        description:
          "Official identity representing Hope for the Vulnerable Foundation.",
      },
    ],
  },
  {
    section: "livelihood_empowerment",
    items: [
      {
        image: "/assets/images/image2.jpeg",
        title: "Tailoring Skills Training",
        description:
          "Young mothers learning tailoring to generate income and improve self-reliance.",
      },
      {
        image: "/assets/images/image3.jpeg",
        title: "Dry Fish Training",
        description: "AGYW learning fish drying and marketing techniques.",
      },
      {
        image: "/assets/images/image4.jpeg",
        title: "Dry Fish Training Activity",
        description:
          "Hands-on participation during income-generation training sessions.",
      },
    ],
  },
  {
    section: "child_protection",
    items: [
      {
        image: "/assets/images/image5.png",
        title: "Orphanage Visit",
        description: "Community outreach supporting vulnerable children.",
      },
    ],
  },
  {
    section: "menstrual_health",
    items: [
      {
        image: "/assets/images/image6.jpeg",
        title: "Sanitary Pad Distribution",
        description:
          "Provision of menstrual hygiene support to adolescent girls.",
      },
      {
        image: "/assets/images/image7.jpeg",
        title: "Sanitary Pad Outreach",
        description: "Engagement during health distribution programs.",
      },
    ],
  },
  {
    section: "case_identification",
    items: [
      {
        image: "/assets/images/image8.jpeg",
        title: "Identification of Adolescent Mothers",
        description:
          "Field assessment to support vulnerable young mothers.",
      },
    ],
  },
  {
    section: "health_sensitization",
    items: [
      {
        image: "/assets/images/image9.jpeg",
        title: "HIV Sensitization",
        description:
          "Community education on HIV prevention and SRHR.",
      },
      {
        image: "/assets/images/image10.jpeg",
        title: "SRHR Awareness Session",
        description:
          "Peer engagement and education among AGYW groups.",
      },
    ],
  },
  {
    section: "agriculture_livelihood",
    items: [
      {
        image: "/assets/images/image11.jpeg",
        title: "Poultry Farming Program",
        description:
          "Income-generating agricultural initiative involving AGYW participants.",
      },
    ],
  },
  {
    section: "administration",
    items: [
      {
        image: "/assets/images/image12.png",
        title: "Yelluma Perpetua",
        description: "Founder and President guiding organizational vision.",
      },
      {
        image: "/assets/images/image13.jpeg",
        title: "Etoh Anzah Kingsley",
        description: "Coordinator managing program implementation.",
      },
      {
        image: "/assets/images/image14.jpeg",
        title: "Ivette Mambo Tayoh",
        description: "Secretary General supporting administration.",
      },
      {
        image: "/assets/images/image15.jpeg",
        title: "Nkwelle Takang",
        description: "Vice President contributing to governance.",
      },
      {
        image: "/assets/images/image16.jpeg",
        title: "Iyvere Mofa Mosongo",
        description: "Legal Adviser ensuring compliance.",
      },
      {
        image: "/assets/images/image17.jpeg",
        title: "Ojong Nkoghou Tabi",
        description: "Financial Consultant overseeing accountability.",
      },
      {
        image: "/assets/images/image18.jpeg",
        title: "Solange Manka Ngwa",
        description: "MEAL Officer managing data and impact evaluation.",
      },
    ],
  },
];

export const programSections = assetSections.filter(
  (section) => !["branding", "administration"].includes(section.section),
);

export const leadershipMembers = assetSections.find(
  (section) => section.section === "administration",
)?.items ?? [];

export const leadershipBySlug = leadershipMembers.map((member) => ({
  ...member,
  slug: member.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
}));
