import type { ContactFormInput, HeaderLink } from './types-interfaces';

export const DEFAULT_MAX_WIDTH = '1024px';

/**
 * The company name is retrieved from the environment variable VITE_COMPANY_NAME.
 * This allows for dynamic configuration of the company name throughout the application,
 * making it easy to update or customize the name without modifying the codebase.
 */
export const companyName = import.meta.env.VITE_COMPANY_NAME || 'OakView';

export const contactFormInputs: ContactFormInput[] = [
  {
    name: 'businessName',
    inputType: 'text',
    formType: 'input',
    label: ' Full Name / Business Name',
  },
  {
    name: 'email',
    inputType: 'email',
    formType: 'input',
    label: 'Email',
  },
  {
    name: 'phone',
    inputType: 'text',
    formType: 'input',
    label: 'Phone',
  },
  {
    name: 'address',
    inputType: 'text',
    formType: 'input',
    label: 'Address',
  },
];

export const headerLinks: HeaderLink[] = [
  {
    title: 'Home',
    name: 'home',
  },
  {
    title: 'About',
    name: 'about',
  },
  {
    title: 'Services',
    name: 'services',
  },
  {
    title: 'Contact',
    name: 'contact',
  },
];
