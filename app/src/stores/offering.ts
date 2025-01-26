import { defineStore } from 'pinia';
import type { Offering } from '@/utils/types-interfaces';
import { companyName } from '@/utils/constants';

export const useOfferingStore = defineStore('offering', () => {
  const offerings: Offering[] = [
    {
      title: 'ISEMIN ABIA',
      subtitle: `Managing Director/Chairman Board of Directors, ${companyName} & Aesthetics`,
      description: `"Excellence through Collaboration!" For Isemin, this is not just a motto- it's a way of Life. His knack for the extraordinary led him to found ${companyName} along five other outliers who were unsettled with the status quo. A farmer by birth, a politician by experience, a product manager by interest and a Mechatronics Engineer by training, Isemin brings a seasoned and diverse luggage of experience on board the ${companyName} train. He is excited about the intersection of construction, technology and innovation with a keen passion for unlocking new frontiers in the African construction ecosystem. Whether it's crafting timber-centric masterpieces or reviving forgotten spaces, Isemin’s work is a fusion of artistry, efficiency and a deep respect for the environment.`,
      image: '/assets/isemin.jpg',
    },
    {
      title: 'UMAR FARUK IBRAHIM',
      subtitle: `Chief Procurement Officer, ${companyName} and Aesthetics`,
      description: `As the Chief Procurement Officer at ${companyName}, Faruk combines expert craftsmanship with strategic leadership to deliver unparalleled projects. Drawing on deep hands-on expertise in construction and a refined mastery of procurement, he ensures that every project is supported by superior materials and resources, meticulously managed, and executed to impeccable standards. His passion lies in transforming visionary ideas into enduring realities, crafting structures that inspire, elevate, and stand as testaments to exceptional design and quality. With a steadfast commitment to excellence, he focuses on creating spaces that seamlessly integrate functionality, aesthetic appeal, and sustainability through effective procurement.`,
      image: '/assets/umar.jpg',
    },
    {
      title: 'Arc. IKECHUKWU IHEGWUAGU',
      subtitle: `Chief Design Officer, ${companyName} and Aesthetics`,
      description: `For Ikechukwu, design is more than aesthetics—it's about crafting experiences that inspire and endure. As ${companyName}’s Chief Design Officer, Ikechukwu is the creative force behind the company’s most innovative projects, blending artistry with functionality to create spaces that leave lasting impressions. Ikechukwu’s design philosophy is rooted in storytelling. “Every space has a narrative waiting to unfold,” he often says. With a keen eye for detail and a passion for pushing creative boundaries, he transforms ideas into breathtaking realities that harmonize with their environment. From sleek urban interiors to eco-friendly timber structures, Ikechukwu’s versatility and ability to adapt to diverse design challenges set him apart. His approach balances bold vision with practical execution, ensuring that every project is as livable as it is beautiful.`,
      image: '/assets/ikechukwu.jpg',
    },
    {
      title: 'IMRAN DAHIRU ALI',
      subtitle: `Chief Executive Officer, ${companyName}`,
      description: `Imran isn't just a CEO—he's a visionary architect of possibilities. At the helm of ${companyName}, Imran brings an unshakable commitment to excellence and an uncanny ability to see potential where others see obstacles. His leadership is driven by a clear purpose: to transform spaces, redefine industries, and inspire progress through innovation.With a career spanning years of hands-on experience in construction, project management, and sustainable development, Imran has built ${companyName} into a powerhouse of creativity and precision. His philosophy is simple yet profound: “Do it once, and do it right.” This mindset fuels every decision he makes, ensuring that ${companyName} delivers exceptional results time after time. Imran’s entrepreneurial spirit and strategic insight have positioned ${companyName} as a leader in the design and construction landscape. Under his guidance, the company continues to explore new frontiers, from pioneering timber-based construction to revitalizing underutilized assets.`,
      image: '/assets/imran.jpg',
    },
    {
      title: 'Engr. MUHAMMAD ALIYU ELSHEIKH',
      subtitle: `Chief Operations Officer`,
      description: `Elsheikh Aliyu is the engine that keeps ${companyName} running like a well-oiled machine. As Chief of Operations, he combines precision, efficiency, and strategic insight to ensure every project stays on track and exceeds expectations. With Elsheikh at the helm of operations, ${companyName}'s ambitious visions become seamless realities. Known for his unwavering focus and problem-solving prowess, Elsheikh thrives in high-pressure environments, transforming challenges into opportunities for growth. “The details make the difference,” is a belief that drives Elsheikh's meticulous approach to managing resources, timelines, and teams. Aliyu's operational expertise is backed by years of experience in the construction and project management industries. His ability to streamline processes, foster collaboration, and anticipate potential hurdles has been instrumental in ${companyName}'s reputation for delivering projects on time, within budget, and to the highest standards. Mr. Aliyu also oversees ${companyName}'s philanthropic efforts to give back to its communities. When he is not managing a project for ${companyName}, Elsheikh is pioneering eccentric designs in the fashion world with Alee studios or delving deep in historical or political literature.`,
      image: '/assets/aliyu.jpg',
    },
    {
      title: 'Engr. Mohammed-Kamarudeen K. El-Hussein',
      subtitle: `Chief Financial Officer`,
      description: `Kamal brings a fresh perspective to financial leadership at ${companyName}. With a background that blends strategic thinking and a deep understanding of business dynamics, Kamal oversees the company's financial planning and resource allocation with a focus on growth and long-term sustainability.Known for his innovative approach, Kamal thrives on finding creative solutions to complex financial challenges. “It's not just about numbers; it's about building a solid foundation for success,” he is fond of saying . His ability to analyze opportunities, manage risks, and maximize resources ensures that ${companyName} remains financially agile and forward-thinking. Kamal's expertise lies in crafting strategies that align financial goals with the company's broader vision. Whether it's securing funding for a groundbreaking project, optimizing resource allocation, or identifying untapped opportunities, his leadership has been instrumental in driving ${companyName}'s success.`,
      image: '/assets/hussein.jpg',
    },
    {
      title: 'ISONG UKOT, ESQ, PMP.',
      subtitle: `Secretary/Legal Consultant`,
      description: `Isong is a dedicated Legal Practitioner who specializes in Contracts and Compliance. Armed with a deep understanding of the legal landscape shaping the industry and an extensive experience in navigating complex regulations and contractual frameworks, Isong provides practical solutions to ensure project success and risk mitigation. Known for a proactive approach, Isong works closely with ${companyName} to address challenges, ensure regulatory compliance, and support the seamless execution of construction projects. Whether advising on contracts, resolving disputes, or guiding clients through intricate legal processes, Isong is committed to building trust and delivering excellence in every aspect of his work.`,
      image: '/assets/isong.jpg',
    },
    {
      title: 'Engr. Imam Abdulmusawwir',
      subtitle: `Civil/Structural Engineer`,
      description: `Musawwir is the backbone of ${companyName}'s structural and civil engineering projects. With an unwavering commitment to precision and safety, he ensures that every structure stands strong, functional, and built to last. A master of blending practicality with innovation, Musawwir approaches each project with a meticulous eye for detail and a passion for excellence. His work focuses on designing and executing solutions that not only meet industry standards but set new benchmarks for quality. From groundbreaking foundations to complex civil infrastructure, Musawwir's expertise spans a wide range of engineering challenges. He thrives in finding creative solutions for difficult terrains, ensuring that even the most ambitious projects come to life without compromising structural integrity or environmental considerations. Musawwir is also a natural team player, working closely with architects, designers, and project managers to ensure seamless collaboration across all stages of construction. His problem-solvingskills and dedication to staying ahead of technological advancements make him a critical asset to the ${companyName} team.`,
      image: '/assets/imam.jpg',
    },
    {
      title: 'WASIF QAVEEM',
      subtitle: `Head of Survey and Geoinformatics`,
      description:
        "With a wealth of experience in land surveying and spatial analysis, Wasif Qaveem plays a pivotal role in ensuring the accuracy and efficiency of Oak View's projects. His expertise drives precise land assessments, strategic site planning, and innovative geoinformatics solutions that form the backbone of our designs and constructions. Wasif also leads our community impact initiatives aimed at flooding our host communities with smiles. Wasif's background in Geology has also placed him as our company's interim Head of Parks and Resorts Development which sees him oversee our vision of rebirthing and redefining how recreational spaces are built in Africa.",
      image: '/assets/wasif.jpeg',
    },
  ];

  return { offerings };
});
