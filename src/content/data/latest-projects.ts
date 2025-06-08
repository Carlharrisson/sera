export interface Project {
  id: string;
  name: string;
  description: string;
  logo: string;
  backgroundColor: string;
  borderColor: string;
  shadowColor: string;
  modalTitle: string;
  modalDescription: string;
  image: string;
  additionalImages?: string[];
}

export const latestProjectsData = {
  title: "Recent Work",
  projects: [
    {
      id: "luna-skincare",
      name: "Luna Skincare",
      description:
        "Email automation that thoughtfully recovers 35% of abandoned carts.",
      logo: "/images/icons8-logo.svg",
      backgroundColor: "bg-purple-600",
      borderColor: "border-purple-600",
      shadowColor: "shadow-purple-500/20",
      modalTitle: "Luna Skincare: Email Automation",
      modalDescription:
        "Luna was losing potential customers who would add products to their cart and then leave without purchasing. Together, we developed a thoughtful email sequence that reconnects with these customers in a helpful, non-pushy way. The system now recovers about 35% of abandoned carts by providing genuine value and addressing common concerns, which has meaningfully transformed their monthly revenue.",
      image: "/project1.jpg",
      additionalImages: [
        "/project2.jpg",
        "/project3.jpg",
        "/project4.jpg",
        "/project1.jpg",
        "/project2.jpg",
      ],
    },
    {
      id: "activewear-co",
      name: "ActiveWear Co",
      description:
        "Intelligent product recommendations that increased order value by 27%.",
      logo: "/images/icons8-logo (1).svg",
      backgroundColor: "bg-orange-500",
      borderColor: "border-orange-500",
      shadowColor: "shadow-orange-500/20",
      modalTitle: "ActiveWear Co: Product Recommendations",
      modalDescription:
        "ActiveWear wanted to help customers discover complementary products naturally, but their existing recommendations felt generic and unhelpful. We built a personalized recommendation system that suggests relevant items based on what customers are already considering, their browsing behavior, and what pairs well together. The result is a 27% increase in average order value and customers who genuinely appreciate the helpful suggestions.",
      image: "/project2.jpg",
    },
    {
      id: "sustainable-home",
      name: "Sustainable Home",
      description:
        "Complete website rebuild that authentically represents their mission.",
      logo: "/images/icons8-logo (2).svg",
      backgroundColor: "bg-green-500",
      borderColor: "border-green-500",
      shadowColor: "shadow-green-500/20",
      modalTitle: "Sustainable Home: Website Rebuild",
      modalDescription:
        "Their existing website didn't reflect the care and thoughtfulness behind their sustainable products. Working closely with their team, we rebuilt their entire digital presence with their mission at the center. The new site loads quickly, tells their story authentically, and creates a shopping experience that aligns with their values. The project took 5 weeks from initial concept to successful launch.",
      image: "/project3.jpg",
    },
  ] as Project[],
};
