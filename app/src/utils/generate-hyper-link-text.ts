function generateHyperLinkText(text: string, linkType?: 'tel' | 'mailto') {
  if (!text || !linkType) {
    return text;
  }
  return `<a href='${linkType}:${text}' target="_blank">${text}</a>`;
}

export function generateHyperLinkTextFromUrl(text: string, url: string) {
  return `<a href='${url}' target="_blank">${text}</a>`;
}

export function generateHyperLink(props: {
  text: string;
  linkType?: 'tel' | 'mailto';
  url?: string;
}) {
  if (!props.text) {
    return props.text;
  }

  if (props.url) {
    return generateHyperLinkTextFromUrl(props.text, props.url);
  }
  return generateHyperLinkText(props.text, props.linkType);
}
