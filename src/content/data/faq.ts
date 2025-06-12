export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData = {
  headline: "Questions We Actually Get",
  items: [
    {
      question: "What makes Sera different from other agencies?",
      answer:
        "Most design agencies build visuals. We build leverage. We're e-commerce native, which means we understand the unique challenges ambitious DTC brands face—from scaling systems to revenue-focused execution. While others work across every industry, we've chosen to go deep on DTC, becoming true partners who understand what breaks growth and what supports scale.",
    },
    {
      question: "How fast can you actually move?",
      answer:
        "We kick off projects within 2 weeks, not months. Most digital flagships take 4-6 weeks from start to launch, while automation setups (email, SMS, personalization systems) typically wrap up in 1-2 weeks. We're execution-first with tight feedback loops—no endless discovery phases or drawn-out timelines.",
    },
    {
      question: "Do you only work with large DTC brands?",
      answer:
        "We partner with ambitious DTC brands at different stages—from first-time founders launching their initial stores to established brands generating millions. What matters is that you're ready to move beyond generic templates and slow execution. If you're scaling and things feel stuck, we should talk.",
    },
    {
      question: "What's actually included when you build sites?",
      answer:
        "Every digital flagship includes conversion-optimized design, personalization systems, email & SMS automation setup, internal tools integration, and comprehensive analytics. But more importantly, you get systems that scale—not just a site that looks good but breaks when you grow. Custom solutions, not templates.",
    },
    {
      question: "How do you handle ongoing partnership?",
      answer:
        "We believe in building leverage, not just delivering projects. After launch, you get direct founder access for troubleshooting and strategy. For ongoing partnerships, we conduct monthly performance reviews with data-driven insights and recommendations. We're here for the long game, not just the launch.",
    },
    {
      question: "How does transparent pricing actually work?",
      answer:
        "Fixed project fees, no hourly billing, no hidden costs. After we discuss your specific goals and challenges, we provide a detailed proposal with everything outlined clearly. We're taking on 3 new clients in Q2, so we're selective but transparent about investment and expected outcomes.",
    },
  ] as FaqItem[],
};
