import type { ServiceOffered } from '@/utils/types-interfaces';
import { defineStore } from 'pinia';

export const useServiceStore = defineStore('service', () => {
  const servicesOffered: ServiceOffered[] = [
    {
      title: 'Design & Architecture',
      content:
        'Transform your ideas into reality with our team of skilled architects and designers. We specialize in creating custom designs that blend functionality, elegance, and sustainable solutions.',
      bulletPoints: [
        'Concept development',
        '3D modeling and rendering',
        'Sustainable and eco-friendly designs',
      ],
      image: '/assets/design_and_architecture.jpeg',
    },
    {
      title: 'Construction & Project Management',
      content:
        'From groundbreaking to completion, our team ensures your project is delivered on time, within budget, and to the highest quality standards.',
      bulletPoints: [
        'Residential and commercial construction',
        'Turnkey project execution',
        'Timely progress tracking and updates',
      ],
      image: '/assets/construction_and_project.jpeg',
    },
    {
      title: 'Furnishing & Finishing',
      content:
        "Bring your spaces to life with our exceptional furnishing and finishing services. We focus on aesthetics, comfort, and durability to create an environment you'll love.",
      bulletPoints: [
        'Custom furniture and decor',
        'High-quality finishes for interiors and exteriors',
        'Attention to detail in every aspect',
      ],
      image: '/assets/furnishing_and_finishing.jpeg',
    },
    {
      title: 'Remodeling & Asset Revival',
      content:
        'Unlock the potential of underutilized spaces with our remodeling and asset revival services. We breathe new life into outdated or dead assets, making them productive and modern.',
      bulletPoints: ['Complete renovations', 'Repurposing and redesign', 'Sustainable upgrades'],
      image: '/assets/remodelling.jpeg',
    },
    {
      title: 'Timber-Based Construction',
      content:
        'Our signature service, timber construction, reflects our passion for sustainability and artistry. We use the finest timber to craft unique, eco-friendly structures.',
      bulletPoints: [
        'Timber sheds and walkways',
        'Container restaurants with timber accents',
        'Sustainable building solutions',
      ],
      image: '/assets/timber_construction.jpeg',
    },
    {
      title: 'Custom Solutions for Airbnb & Hospitality',
      content:
        'Elevate your Airbnb or hospitality project with our tailored services designed to make your property stand out.',
      bulletPoints: [
        'Stylish and functional interiors',
        'Efficient space utilization',
        'Enhanced guest experiences',
      ],
      image: '/assets/airbnb_hospitality.jpeg',
    },
    {
      title: 'Environmental Sustainability',
      content:
        'We are committed to creating environmentally friendly projects that align with green building standards.',
      bulletPoints: [
        'Eco-conscious material selection',
        'Sustainable construction methods',
        'Park development and landscaping',
      ],
      image: '/assets/environmental_sustainability.jpeg',
    },
  ];

  const reasonsForChoosingOakView = [
    'Expertise in innovative design and sustainable construction',
    'Commitment to delivering projects that exceed expectations',
    'A team of professionals dedicated to bringing your vision to life',
  ];

  return { servicesOffered, reasonsForChoosingOakView };
});
