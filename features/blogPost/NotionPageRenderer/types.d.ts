type RichTextItemText = {
  type: "text";
  text: {
    content: string;
    link: {
      url: string;
    } | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: "default" | string;
  };
  plain_text: string;
  href: string | null;
};

type RichTextItem =
  | RichTextItemText
  | { type: "mention" }
  | { type: "equation" };
