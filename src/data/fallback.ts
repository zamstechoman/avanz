import type { AboutPageContent, HomePageContent, Project } from "../types/content";

const image = (name: string) => `/assets/images/${name}`;

export const homeFallback: HomePageContent = {
  heroTitle: "YOUR COMPLETE IT & DIGITAL INFRASTRUCTURE.",
  heroDescription:
    "Web engineering, cloud hosting, network setup, IP telephony, CCTV installation, and 24/7 rapid remote technical/ IT support—all built and managed under one roof",
  metrics: [
    {
      value: "1%",
      title: "Uptime & Network Reliability",
      description:
        "Enterprise-grade networking, local infrastructure, and edge routing built to keep your operations running seamlessly 24/7.",
    },
    {
      value: "0X",
      title: "Faster Data-Driven Decisions",
      description:
        "Interactive data analytics and custom reporting engines that turn raw business metrics into clear, actionable intelligence.",
    },
    {
      value: "1%",
      title: "Seed + series A funding",
      description:
        "Bespoke custom software engineering—delivering high-performance offline desktop tools and scalable cloud applications.",
    },
    {
      value: "12+",
      title: "Awards recognition",
      description:
        "Deploying scalable cloud environments and secure on-premise networks to safeguard your data at every layer.",
    },
  ],
  services: [
    {
      title: "Cloud Migration & Ops",
      description:
        "Seamless hybrid infrastructure backed by enterprise-grade local security for complete end-to-end data protection.",
      imageUrl: image("services-card-vy29lxghc.webp"),
    },
    {
      title: "High-Impact Web Design",
      description:
        "Web Design & UX/UI. Crafting sleek, user-focused interfaces in Figma that drive engagement and conversions.",
      imageUrl: image("services-card-wlxfg4mi6.jpeg"),
    },
    {
      title: "Custom ERP & Local Apps",
      description:
        "Custom Development, MVP prototyping, and an ongoing design partner for your product.",
      imageUrl: image("services-card-bdovic0vi.jpg"),
    },
    {
      title: "Network Architecture",
      description:
        "Cloud computing infrastructure paired with robust local network security to ensure end-to-end data safety.",
      imageUrl: image("services-card-klzjikktl.png"),
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We uncover your goals, audience, and challenges to build a clear roadmap for success.",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description:
        "Transforming insights into bold, user-focused designs that connect and convert.",
    },
    {
      number: "03",
      title: "Development & Launch",
      description:
        "From pixel to code, we craft high-performing websites and launch them flawlessly.",
    },
    {
      number: "04",
      title: "Optimization & Scale",
      description:
        "We monitor, refine, and enhance to ensure continuous growth and lasting impact.",
    },
  ],
  pricingPlans: [
    {
      name: "Product design",
      description:
        "Ideal for launching or revamping a website or product to boost conversions.",
      price: "$2,200",
      priceUnit: "One time",
      features: [
        "Senior designer",
        "One Active Request",
        "7-10 Days delivery-time",
        "SEO optimized",
        "1-1 Private Slack channel",
        "50% secured upfront payment",
        "Add Framer Development +$1,000",
      ],
    },
    {
      name: "Design partner",
      description:
        "Perfect for monthly design partnerships, keeping your brand fresh and driving consistent conversions.",
      priceUnit: "/ month",
      features: [
        "Dedicated team & expert designers",
        "Multiple requests under fair use",
        "2-3 Days delivery-time",
        "Monthly CRO & Growth Strategy",
        "1-1 Private Slack channel",
        "Framer development",
        "Up to 8 pages + 404 page",
        "50% secured upfront payment",
      ],
    },
    {
      name: "Custom",
      description:
        "Ideal for brands seeking unlimited design and motion support, delivering high-impact results without restrictions.",
      label: "Limited spots",
      priceUnit: "Starts at",
      features: [
        "Dedicated team & expert designers",
        "Unlimited requests",
        "2 Days Delivery, monthly commitment",
        "Advanced SEO & Marketing",
        "1-1 Private Slack channel",
        "Framer development",
        "50% secured upfront payment",
      ],
    },
  ],
  testimonials: [
    {
      quote:
        "Lamosa completely redefined our digital presence. Their strategic design approach and attention to user behavior boosted our conversion rate significantly. We went from just a pretty site to a performance-driven asset.",
      name: "Julian Ortega",
      role: "CEO",
      metric: "62%",
      metricDescription: "increase in mobile traffic retention",
      imageUrl: image("testimonial-card-kdanvbptr-4.png"),
    },
    {
      quote:
        "We launched our new site in under three weeks and saw results almost immediately. The design felt premium from day one — exactly what we needed to stand out in a crowded market.",
      name: "Melissa Gomez",
      role: "Co-Founder",
      metric: "3.1×",
      metricDescription: "increase in qualified leads",
      imageUrl: image("testimonial-card-kdanvbptr.jpg"),
    },
    {
      quote:
        "From the first call, the team just got it. They redesigned our entire funnel and the impact was immediate — more signups, lower drop-off, and a brand that finally matched our ambition.",
      name: "George Adams",
      role: "CEO",
      metric: "41%",
      metricDescription: "reduction in drop-off rate",
      imageUrl: image("testimonial-card-kdanvbptr-2.jpg"),
    },
    {
      quote:
        "Lamosa completely redefined our digital presence. Their strategic design approach and attention to user behavior boosted our conversion rate significantly. We went from just a pretty site to a performance-driven asset.",
      name: "Sarah Coleman",
      role: "CMO",
      metric: "2.3×",
      metricDescription: "increase in lead conversion",
      imageUrl: image("testimonial-card-kdanvbptr.png"),
    },
    {
      quote:
        "The team at Lamosa not only built us a beautiful platform—they made it fast, smart, and incredibly intuitive. Their UX insights and performance tweaks made a huge difference in keeping users engaged.",
      name: "Marcus Levine",
      role: "Co-founder",
      metric: "45%",
      metricDescription: "Reduced bounce rate",
      imageUrl: image("testimonial-card-kdanvbptr-3.png"),
    },
    {
      quote:
        "Working with Lamosa helped us cut our launch timeline dramatically. They understand product goals and build with both speed and precision. Easily one of the best agencies we’ve worked with.",
      name: "Amina Khatri",
      role: "Head of Product",
      metric: "3x",
      metricDescription: "faster MVP launch",
      imageUrl: image("testimonial-card-kdanvbptr-2.png"),
    },
  ],
  faqs: [
    {
      question: "What is included with each Framer template?",
      answer:
        "Each template comes with a fully responsive design, editable components, and SEO-friendly structure ready to customize.",
    },
    {
      question: "Do I need coding skills to use your templates?",
      answer: "",
    },
    {
      question: "Can I use a template for multiple projects?",
      answer: "",
    },
    {
      question: "Are the templates optimized for performance?",
      answer: "",
    },
    {
      question: "Do you offer support after purchase?",
      answer: "",
    },
    {
      question: "Can I integrate third-party tools with these templates?",
      answer: "",
    },
    {
      question: "Do you offer customizations beyond the template?",
      answer: "",
    },
    {
      question: "Will my template receive updates?",
      answer: "",
    },
  ],
};

export const aboutFallback: AboutPageContent = {
  heroTitle: "Ambitious talents, for bold ideas.",
  heroSubtitle:
    "creating a culture where ideas flow freely and innovation thrives.",
  storyTitle: "Our story matters most",
  storyBody:
    "We believe great work comes from collaboration, curiosity, and a shared vision. Each team member, from designers to developers to strategists, brings unique skills and perspectives, creating a culture where ideas flow freely and innovation thrives. Beyond projects, we celebrate milestones together, share learnings, and support one another. Our bond goes beyond work, shaping Lamosa into not just a team but a community that’s driven to help brands grow and succeed.",
  teamMembers: [
    {
      name: "Elias Reed",
      role: "Founder & Creative Director",
      imageUrl: image("team-members-elias-reed-photo.jpg"),
    },
    {
      name: "Maya Koji",
      role: "Lead Product Designer",
      imageUrl: image("team-members-maya-koji-photo.png"),
    },
    {
      name: "Leo Martínez",
      role: "Senior Full-Stack Developer",
      imageUrl: image("team-members-leo-martinez-photo.jpg"),
    },
    {
      name: "Amina Johnson",
      role: "Brand Strategist",
      imageUrl: image("team-members-amina-johnson-photo.png"),
    },
    {
      name: "Tarek El-Hassan",
      role: "UI Motion Designer",
      imageUrl: image("team-members-tarek-el-hassan-photo.png"),
    },
  ],
  awards: [
    {
      name: "Awwwards – Site of the Day",
      description:
        "Recognizing outstanding design, creativity, and innovation in web experiences.",
      year: "2025",
    },
    {
      name: "FWA – Cutting Edge Award",
      description:
        "Awarded for pushing creative and technical boundaries in web design.",
      year: "2024",
    },
    {
      name: "CSS Design Awards – Best UI/UX",
      description:
        "Celebrating cutting-edge user interface and user experience design.",
      year: "2023",
    },
    {
      name: "Behance Interaction Design Feature",
      description:
        "Spotlighting exceptional interaction design showcased to a global audience.",
      year: "2023",
    },
    {
      name: "Webby Awards – Best Visual Design",
      description:
        "Honoring excellence in visual aesthetics and creative digital storytelling.",
      year: "2022",
    },
  ],
};

export const projectsFallback: Project[] = [
  {
    title: "Redesigning Atlas",
    slug: "redesigning-atlas",
    categories: [],
    description: "+45% engagement, -20% churn",
    coverUrl: image("projects-redesigning-atlas-banner.png"),
    gallery: [
      image("projects-redesigning-atlas-image-1.jpg"),
      image("projects-redesigning-atlas-image-2.png"),
      image("projects-redesigning-atlas-image-3.jpg"),
      image("projects-redesigning-atlas-image-4.png"),
      image("projects-redesigning-atlas-image-5.png"),
    ],
  },
];
