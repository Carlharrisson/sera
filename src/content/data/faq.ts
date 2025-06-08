export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData = {
  headline: "Common Questions",
  items: [
    {
      question: "What makes working with Sera different?",
      answer:
        "We focus exclusively on DTC e-commerce brands, which means we understand the unique challenges you face—from seasonal sales cycles to inventory management to customer retention. While other agencies work across every industry, we've chosen to go deep rather than wide, becoming true partners in your e-commerce journey.",
    },
    {
      question: "How long do projects typically take?",
      answer:
        "Most website projects take 4-6 weeks from start to launch, while email automation setups usually wrap up in 1-2 weeks. We always provide a clear timeline upfront and keep you updated throughout the process. No surprises, no endless delays.",
    },
    {
      question: "Do you work with brands at different stages?",
      answer:
        "Absolutely. We've partnered with first-time founders launching their initial stores and established brands generating millions in revenue. What matters most is that you're serious about growth and committed to building something meaningful for your customers.",
    },
    {
      question: "What's included when you build a website?",
      answer:
        "Every website project includes a fast, mobile-optimized site built on modern technology, intelligent product recommendations, a conversion-focused checkout experience, and comprehensive analytics setup. Most importantly, you get a digital presence that truly represents your brand and connects with your customers.",
    },
    {
      question: "How do you support clients after launch?",
      answer:
        "We're available during business hours for questions and troubleshooting. For ongoing partnerships, we conduct monthly check-ins to review performance and recommend improvements. We believe in building long-term relationships, not just delivering projects.",
    },
    {
      question: "How does your pricing work?",
      answer:
        "We work with fixed project fees—no hourly billing or hidden costs. After we discuss your specific needs and goals, we'll provide a detailed proposal with everything clearly outlined. Transparency is important to us, and we want you to feel confident about the investment.",
    },
  ] as FaqItem[],
};
