export interface LegalSection {
  id: string;
  title: string;
  content: string;
  lastUpdated?: string;
}

export const legalData = {
  title: "Legal Information",
  description: "Important legal information regarding the use of our services.",
  lastUpdated: "January 2025",
  sections: [
    {
      id: "terms-of-service",
      title: "Terms of Service",
      lastUpdated: "January 15, 2025",
      content: `
        <h3 class="text-base mb-4">Agreement to Terms</h3>
        <p class="text-base mb-4">By accessing and using this website, you accept and agree to be bound by these terms.</p>
        
        <h3 class="text-base mb-4">Use License</h3>
        <p class="text-base mb-4">You may view and use this website for personal, non-commercial purposes. You may not modify, copy, or use the materials for commercial purposes without permission.</p>
        
        <h3 class="text-base mb-4">Disclaimer</h3>
        <p class="text-base mb-4">The materials on this website are provided "as is" without warranties of any kind. We disclaim all warranties, express or implied.</p>
        
        <h3 class="text-base mb-4">Limitations</h3>
        <p class="text-base mb-4">Sera shall not be liable for any damages arising from the use or inability to use this website.</p>
      `,
    },
    {
      id: "privacy-policy",
      title: "Privacy Policy",
      lastUpdated: "January 15, 2025",
      content: `
        <h3 class="text-base mb-4">Information We Collect</h3>
        <p class="text-base mb-4">We collect information you provide when you contact us or use our services, including name, email, and project details.</p>
        
        <h3 class="text-base mb-4">How We Use Your Information</h3>
        <p class="text-base mb-4">We use your information to provide our services, communicate with you, and improve our offerings.</p>
        
        <h3 class="text-base mb-4">Information Sharing</h3>
        <p class="text-base mb-4">We do not sell or share your personal information with third parties, except as necessary to provide our services or comply with legal requirements.</p>
        
        <h3 class="text-base mb-4">Data Security</h3>
        <p class="text-base mb-4">We implement appropriate security measures to protect your information, though no method of transmission is 100% secure.</p>
      `,
    },
  ] as LegalSection[],

  contact: {
    email: "carl@seraworks.com",
  },
};
