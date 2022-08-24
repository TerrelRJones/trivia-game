export const questionHtmlStringToText = (text: string) => {
  return new DOMParser().parseFromString(text, 'text/html').documentElement
    .textContent;
};
