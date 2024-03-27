export type TargetOption = {
  id: number;
  name: string;
  icon: string;
  color: string;
  measurements: Measurement[];
};

type Measurement = {
  id: number;
  description: string;
};

export const targetOptions: TargetOption[] = [
  {
    id: 1,
    name: "No Poverty",
    icon: "/target/18.svg",
    color: "#E5243B",
    measurements: [
      {
        id: 1,
        description: "Financial aid for poverty alleviation",
      },
      {
        id: 2,
        description: "Shelter or housing units",
      },
      {
        id: 3,
        description: "Essential items destributed",
      },
      {
        id: 4,
        description: "Essential items distributed",
      },
      {
        id: 5,
        description: "Job training or educational programs",
      },
      {
        id: 6,
        description: "Microloans or grants provided",
      },
      {
        id: 7,
        description: "People assisted out of poverty",
      },
    ],
  },
  {
    id: 2,
    name: "Zero Hunger",
    icon: "/target/19.svg",
    color: "#DDA63A",
    measurements: [
      {
        id: 1,
        description: "Food Donated",
      },
      {
        id: 2,
        description: "Investment in sustainable agriculture",
      },
      {
        id: 3,
        description: "Community gardens supported",
      },
      {
        id: 4,
        description: "Nutrition education initiatives"
      },
      {
        id: 5,
        description: "Support for sustainable farming",
      },
      {
        id: 6,
        description: "People with regular nutritious food",
      }
    ],
  },
  {
    id: 3,
    name: "Good Health and Well-being",
    icon: "/target/20.svg",
    color: "#4C9F38",
    measurements: [
      {
        id: 1,
        description: "Funding for healthcare"
      },
      {
        id: 2,
        description: "Health check-ups or vaccination drives"
      },
      {
        id: 3,
        description: "Training for healthcare workers"
      },
      {
        id: 4,
        description: "Mental health initiatives"
      },
      {
        id: 5,
        description: "Health research investments"
      },
      {
        id: 6,
        description: "People accessing healthcare services"
      }
    ],
  },
  {
    id: 4,
    name: "Quality Education",
    icon: "/target/4.svg",
    color: "#C5192D",
    measurements: [
      {
        id: 1,
        description: "Schools built or supported"
      },
      {
        id: 2,
        description: "Educational grants awarded"
      },
      {
        id: 3,
        description: "Teacher training programs"
      },
      {
        id: 4,
        description: "Educational materials provided"
      },
      {
        id: 5,
        description: "Ed-tech support or resources"
      },
      {
        id: 6,
        description: "Students benefiting from education"
      }
    ],
  },
  {
    id: 5,
    name: "Gender Equality",
    icon: "/target/5.svg",
    color: "#FF3A21",
    measurements: [
      {
        id: 1,
        description: "Women’s empowerment programs"
      },
      {
        id: 2,
        description: "Gender equality workshops"
      },
      {
        id: 3,
        description: "Women in leadership support"
      },
      {
        id: 4,
        description: "Gender-based violence initiatives"
      },
      {
        id: 5,
        description: "Women’s health and education"
      },
      {
        id: 6,
        description : "Workplace gender equality policies"
      }
    ]
  },
  {
    id: 6,
    name: "Clean Water and Sanitation",
    icon: "/target/6.svg",
    color: "#26BDE2",
    measurements: [
      {
        id: 1,
        description: "Water purification systems"
      },
      {
        id: 2,
        description: "Sanitation facilities"
      },
      {
        id: 3,
        description: "Water conservation initiatives"
      },
      {
        id: 4,
        description: "Water and sanitation hygiene education"
      },
      {
        id: 5,
        description: "Water recycling investments"
      },
      {
        id: 6,
        description: "People with water and sanitation access"
      }
    ]
  },
  {
    id: 7,
    name: "Affordable and Clean Energy",
    icon: "/target/7.svg",
    color: "#FCC30B",
    measurements: [
      {
        id: 1,
        description: "Renewable energy projects"
      },
      {
        id: 2,
        description: "Energy-efficient systems"
      },
      {
        id: 3,
        description: "Renewable energy training programs"
      },
      {
        id: 4,
        description: "Clean energy research"
      },
      {
        id: 5,
        description: "Energy consumption reduction"
      },
      {
        id: 6,
        description: "Households with better energy access"
      }
    ]
  },
  {
    id: 8,
    name: "Decent Work and Economic Growth",
    icon: "/target/8.svg",
    color: "#A21942",
    measurements: [
      {
        id: 1,
        description: "Job creation initiatives"
      },
      {
        id: 2,
        description: "SME Support"
      },
      {
        id: 3,
        description: "Local economic projects"
      },
      {
        id: 4,
        description: "Workplace safety programs"
      },
      {
        id: 5,
        description: "Employment or work condition improvements"
      },
      {
        id: 6,
        description: "Vocational training programs"
      }
    ]
  },
  {
    id: 9,
    name: "Industry, Innovation and Infrastructure",
    icon: "/target/9.svg",
    color: "#FD6925",
    measurements: [
      {
        id: 1,
        description: "Infrastructure projects"
      },
      {
        id: 2,
        description: "Innovation and start-up investments"
      },
      {
        id: 3,
        description: "Industrial upgrading support"
      },
      {
        id: 4,
        description: "STEM and innovation education"
      },
      {
        id: 5,
        description: "Sustainable infrastructure development"
      },
      {
        id: 6,
        description: "People benefiting from infrastructure"
      }
    ]
  },
  {
    id: 10,
    name: "Reduced Inequality",
    icon: "/target/10.svg",
    color: "#DD1367",
    measurements: [
      {
        id: 1,
        description: "Income inequality reduction"
      },
      {
        id: 2,
        description: "Marginalized community support"
      },
      {
        id: 3,
        description: "Equal access to services"
      },
      {
        id: 4,
        description: "Inclusion policies"
      },
      {
        id: 5,
        description: "Disability access investments"
      },
      {
        id: 6,
        description: "Beneficiaries of inequality reduction"
      }
    ]
  },
  {
    id: 11,
    name: "Sustainable Cities and Communities",
    icon: "/target/22.svg",
    color: "#FD9D24",
    measurements: [
      {
        id: 1,
        description: "Urban sustainability projects"
      },
      {
        id: 2,
        description: "Public transport and green space"
      },
      {
        id: 3,
        description: "Urban air quality improvement"
      },
      {
        id: 4,
        description: "Affordable housing support"
      },
      {
        id: 5,
        description: "Community safety initiatives"
      },
      {
        id: 6,
        description: "Improved urban living conditions"
      }
    ]
  },
  {
    id: 12,
    name: "Responsible Consumption and Production",
    icon: "/target/12.svg",
    color: "#BF8B2E",
    measurements: [
      {
        id: 1,
        description: "Waste reduction and recycling"
      },
      {
        id: 2,
        description: "Sustainable resource use"
      },
      {
        id: 3,
        description: "Eco-friendly products support"
      },
      {
        id: 4,
        description: "Consumer sustainability awareness"
      },
      {
        id: 5,
        description: "Sustainable supply chain investments"
      },
      {
        id: 6,
        description: "Organizational resource footprint reduction"
      }
    ]
  },
  {
    id: 13,
    name: "Climate Action",
    icon: "/target/23.svg",
    color: "#48773C",
    measurements: [
      {
        id: 1,
        description: "Carbon emission reduction"
      },
      {
        id: 2,
        description: "Climate adaptation and resilience"
      },
      {
        id: 3,
        description: "Renewable energy investment"
      },
      {
        id: 4,
        description: "Climate change education"
      },
      {
        id: 5,
        description: "Reforestation projects"
      },
      {
        id: 6,
        description: "Beneficiaries of climate initiatives"
      }
    ]
  },
  {
    id: 14,
    name: "Life Below Water",
    icon: "/target/14.svg",
    color: "#0A97D9",
    measurements: [
      {
        id: 1,
        description: "Marine conservation projects"
      },
      {
        id: 2,
        description: "Ocean pollution reduction"
      },
      {
        id: 3,
        description: "Sustainable fishing support"
      },
      {
        id: 4,
        description: "Marine biodiversity research"
      },
      {
        id: 5,
        description: "Marine conservation education"
      },
      {
        id: 6,
        description: "Ocean or coastline impact"
      }
    ]
  },
  {
    id: 15,
    name: "Life on Land",
    icon: "/target/15.svg",
    color: "#56C02B",
    measurements: [
      {
        id: 1,
        description: "Land conservation and reforestation"
      },
      {
        id: 2,
        description: "Endangered species protection"
      },
      {
        id: 3,
        description: "Sustainable land use"
      },
      {
        id: 4,
        description: "Combatting desertification"
      },
      {
        id: 5,
        description: "Terrestrial biodiversity investments"
      },
      {
        id: 6,
        description: "Land rehabilitated or conserved"
      }
    ]
  },
  {
    id: 16,
    name: "Peace, Justice and Strong Institutions",
    icon: "/target/16.svg",
    color: "#00689D",
    measurements: [
      {
        id: 1,
        description: "Law enforcement support"
      },
      {
        id: 2,
        description: "Anti-corruption programs"
      },
      {
        id: 3,
        description: "Human rights and justice initiatives"
      },
      {
        id: 4,
        description: "Transparent institutions support"
      },
      {
        id: 5,
        description: "Community peace programs"
      },
      {
        id: 6,
        description: "Justice and peace beneficiaries"
      }
    ]
  },
  {
    id: 17,
    name: "Partnerships for the Goals",
    icon: "/target/17.svg",
    color: "#19486A",
    measurements: [
      {
        id: 1,
        description: "Collaborative SDG projects"
      },
      {
        id: 2,
        description: "Global partnership financial contributions"
      },
      {
        id: 3,
        description: "Knowledge and technology sharing"
      },
      {
        id: 4,
        description: "SDG advocacy campaigns"
      },
      {
        id: 5,
        description: "Developing country support"
      },
      {
        id: 6,
        description: "Partnerships formed"
      }
    ]
  },
];
