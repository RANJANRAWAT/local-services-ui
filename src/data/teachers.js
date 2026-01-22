export const TEACHERS = [
  {
    id: "john-doe",
    name: "John Doe",
    title: "Senior Instructor",
    specialization: "Web Development",
    rating: 4.9,
    students: 5000,
    courses: 12,
    experience: "10+ years",
    image: "👨‍💻",
    bio: "Expert in full-stack development with 10+ years of experience.",
    about:
      "John has helped thousands of learners become job-ready developers. He focuses on practical, project-based learning and modern best practices.",
    skills: ["React", "Node.js", "TypeScript", "System Design"],
    contact: { email: "john.doe@edura.com", phone: "+1 (234) 111-2222", city: "New York" },
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: "jane-smith",
    name: "Jane Smith",
    title: "Senior Instructor",
    specialization: "Data Science",
    rating: 4.8,
    students: 3500,
    courses: 8,
    experience: "8+ years",
    image: "👩‍🔬",
    bio: "Data scientist and machine learning expert.",
    about:
      "Jane teaches data science from fundamentals to advanced ML. Her classes are known for clarity and real-world datasets.",
    skills: ["Python", "Pandas", "Machine Learning", "Deep Learning"],
    contact: { email: "jane.smith@edura.com", phone: "+1 (234) 333-4444", city: "San Francisco" },
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: "mike-johnson",
    name: "Mike Johnson",
    title: "Senior Instructor",
    specialization: "Digital Marketing",
    rating: 4.7,
    students: 6000,
    courses: 15,
    experience: "12+ years",
    image: "👨‍💼",
    bio: "Marketing strategist helping businesses grow online.",
    about:
      "Mike blends creative strategy with analytics. He teaches SEO, ads, funnels, and brand storytelling with actionable frameworks.",
    skills: ["SEO", "Google Ads", "Analytics", "Content Strategy"],
    contact: { email: "mike.johnson@edura.com", phone: "+1 (234) 555-6666", city: "Austin" },
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: "sarah-williams",
    name: "Sarah Williams",
    title: "Senior Instructor",
    specialization: "UI/UX Design",
    rating: 4.9,
    students: 4200,
    courses: 10,
    experience: "9+ years",
    image: "👩‍🎨",
    bio: "Creative designer with expertise in user experience.",
    about:
      "Sarah helps learners build beautiful, usable products. She emphasizes UX thinking, design systems, and portfolio-ready work.",
    skills: ["Figma", "Design Systems", "UX Research", "Prototyping"],
    contact: { email: "sarah.williams@edura.com", phone: "+1 (234) 777-8888", city: "Seattle" },
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
];

export const getTeacherById = (id) => TEACHERS.find((t) => t.id === id);


