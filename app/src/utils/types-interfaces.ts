export type HeaderLink = {
  title: string
  name: string
}

export type ContactInfoLink = {
  icon: string
  label: string
  title: string
  href?: string
  hrefType?: 'tel' | 'mailto'
}

export type ContactForm = {
  [key: string]: string
  businessName: string
  email: string
  address: string
  phone: string
  message: string
}

export type ContactFormInput = {
  name: string
  inputType: 'text' | 'email'
  formType: string
  label: string
}
