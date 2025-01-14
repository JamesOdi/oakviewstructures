export function generateHyperLinkText(text: string, linkType?: 'tel' | 'mailto') {
  if (!text || !linkType) {
    return text;
  }
  return `<a href='${linkType}:${text}'>${text}</a>`;
}
