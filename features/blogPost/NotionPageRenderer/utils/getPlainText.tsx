export default function getPlainText(richTextItems: RichTextItem[]): string {
  return richTextItems
    .filter((item) => item.type === "text")
    .reduce(
      (memo, richText: RichTextItemText) => `${memo}${richText.plain_text}`,
      ""
    );
}
