import { locationOutline, callOutline, mailUnreadOutline } from 'ionicons/icons'
import type { ContactFormInput, ContactInfoLink, HeaderLink } from './types-interfaces'

export const DEFAULT_MAX_WIDTH = '1024px'
const officeNumber = import.meta.env.VITE_OFFICE_NUMBER
const officeMail = import.meta.env.VITE_OFFICE_MAIL

export const contactInfoLinks: ContactInfoLink[] = [
  {
    icon: locationOutline,
    title: 'Location',
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
]

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
]

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
]
