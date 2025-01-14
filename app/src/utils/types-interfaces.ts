export type HeaderLink = {
  title: string;
  name: string;
};

export type ContactInfoLink = {
  icon: string;
  label: string;
  title: string;
  href?: string;
  hrefType?: 'tel' | 'mailto';
};

export type ContactForm = {
  [key: string]: string;
  businessName: string;
  email: string;
  address: string;
  phone: string;
  message: string;
};

export type ContactFormInput = {
  name: string;
  inputType: 'text' | 'email';
  formType: string;
  label: string;
};

export type Offering = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

type ContactItem = {
  title: string;
  content: string;
};

export type ContactGroup = {
  title: string;
  items: ContactItem[];
};

export type ServiceOffered = {
  title: string;
  content: string;
  bulletPoints: string[];
  image: string;
};

export type ProjectTypeItem = {
  title: string;
  description: string;
  icon: string;
};
