import { companyName } from '@/utils/constants';
import { generateHyperLink, generateHyperLinkTextFromUrl } from '@/utils/generate-hyper-link-text';
import type { ContactGroup, ContactInfoLink } from '@/utils/types-interfaces';
import { locationOutline, callOutline, mailUnreadOutline } from 'ionicons/icons';
import { defineStore } from 'pinia';

export const useContactStore = defineStore('contact', () => {
  const officeNumber = import.meta.env.VITE_OFFICE_NUMBER;
  const officeMail = import.meta.env.VITE_OFFICE_MAIL;

  const contactInfoLinks: ContactInfoLink[] = [
    {
      icon: locationOutline,
      title: 'Location',
      href: import.meta.env.VITE_OFFICE_ADDRESS_URL,
      label: import.meta.env.VITE_OFFICE_ADDRESS,
    },
    {
      icon: callOutline,
      title: 'Call Us',
      label: officeNumber,
      href: `tel:${officeNumber}`,
      hrefType: 'tel',
    },
    {
      icon: mailUnreadOutline,
      title: 'Mail Us',
      label: officeMail,
      href: `mailto:${officeMail}`,
      hrefType: 'mailto',
    },
  ];

  const contactGroups: ContactGroup[] = [
    {
      title: 'Ask how we can help you:',
      items: [
        {
          title: 'Get in Touch with Our Construction Team',
          content: 'Schedule a site visit from our team of seasoned and committed professionals.',
        },
        {
          title: `${companyName} Design Experience`,
          content: `Redefine your living and workspace with a personalized session led by our expert architects and interior designers at ${companyName}.`,
        },
        {
          title: `Explore life at ${companyName}`,
          content:
            "Find out about open positions, our company's culture and values, and our humble efforts to giving back to the community.",
        },
        {
          title: 'Request for Partnerships',
          content:
            "Unlock new and exciting opportunities for wealth and value creation by partnering with Africa's construction vanguard.",
        },
      ],
    },
    {
      title: 'Points of Contact',
      items: contactInfoLinks.map((contact) => {
        return {
          title: contact.title,
          content: generateHyperLink({
            text: contact.label,
            linkType: contact.hrefType,
            url: contact.href,
          }),
        };
      }),
    },
    {
      title: 'Additional Office Locations',
      items: [
        {
          title: import.meta.env.VITE_ADDITIONAL_OFFICE_LOCATION_STATE,
          content: generateHyperLinkTextFromUrl(
            import.meta.env.VITE_ADDITIONAL_OFFICE_LOCATION_FULL,
            import.meta.env.VITE_ADDITIONAL_OFFICE_LOCATION_FULL_URL,
          ),
        },
      ],
    },
  ];

  return { contactGroups, contactInfoLinks };
});
