import type { ContactFormInput, HeaderLink } from './types-interfaces';

export const DEFAULT_MAX_WIDTH = '1024px';

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
