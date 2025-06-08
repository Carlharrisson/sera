export interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
}

export const testimonialsData = {
  testimonials: [
    {
      id: "sarah-chen",
      quote:
        "Working with Sera felt like having a strategic partner, not just a service provider. They rebuilt our abandoned cart email sequence with such thoughtfulness—really understanding our customers' journey. We're now recovering about 35% of abandoned carts, which has been transformative for our business.",
      author: {
        name: "Sarah Chen",
        title: "Founder, Luna Skincare",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      },
    },
    {
      id: "marcus-rodriguez",
      quote:
        "Sera didn't just build us a product recommendation system—they took the time to understand our customers and created something that felt natural and helpful. Our average order value increased by 27% in the first month, and customers are discovering products they genuinely love.",
      author: {
        name: "Marcus Rodriguez",
        title: "CMO, ActiveWear Co",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      },
    },
    {
      id: "emily-park",
      quote:
        "Sera completely transformed our website in just 5 weeks, but what impressed me most was how they listened to our vision and brought it to life authentically. The new site loads incredibly fast and feels like a true reflection of our brand. Our conversion rate has improved significantly.",
      author: {
        name: "Emily Park",
        title: "Co-founder, Sustainable Home",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      },
    },
  ] as Testimonial[],
  currentIndex: 0,
};
