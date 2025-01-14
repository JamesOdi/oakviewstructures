import type { ProjectTypeItem } from '@/utils/types-interfaces';
import { receiptOutline, constructOutline, buildOutline, bulbOutline } from 'ionicons/icons';
import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', () => {
  const projectTypeItems: ProjectTypeItem[] = [
    {
      title: 'Design & Construction',
      description:
        'Crafting spaces that inspire and endure. From bespoke architectural designs to precision-driven construction, we bring your vision to life with a perfect harmony of creativity, functionality, and sustainability.',
      icon: receiptOutline,
    },
    {
      title: 'Project Management',
      description:
        'Guiding your project from dream to reality. With seamless coordination, rigorous attention to detail, and a focus on timelines and budgets, we ensure every stage of your project unfolds flawlessly.',
      icon: constructOutline,
    },
    {
      title: 'Furnishing & Finishings',
      description:
        'Considered the final icing on the Oak View cake, our furnishing services ensure that the spirit of quality and timelessness is carried through to every detail. We create spaces that are as inviting as they are enduring.',
      icon: buildOutline,
    },
    {
      title: 'Revitalization of Assets',
      description:
        'Breathing life into dormant properties, transforming them into thriving investments.',
      icon: bulbOutline,
    },
  ];

  const numericStatistics = [
    {
      title: 'Completed Projects',
      count: import.meta.env.VITE_COMPLETED_PROJECTS,
    },
    {
      title: 'Years Of Experience',
      count: import.meta.env.VITE_YEARS_OF_EXPERIENCE,
    },
  ];

  return { numericStatistics, projectTypeItems };
});
