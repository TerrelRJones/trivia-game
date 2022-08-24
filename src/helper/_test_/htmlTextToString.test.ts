import { questionHtmlStringToText } from 'helper/htmlTextToString';

describe('html string to text.', () => {
  it("should return html code &#39; as ' .", () => {
    const apostropheHtmlCode = '&#39;';

    expect(questionHtmlStringToText(apostropheHtmlCode)).toBe("'");
  });
});
