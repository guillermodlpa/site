const ELLIPSIS_CHARACTER = "…";

export default function truncateString(
  value: string,
  characterLimit: number
): string {
  if (value.length <= characterLimit) {
    return value;
  }
  const words = value.split(/\s/g);

  let truncated = "";
  for (const word of words) {
    if (truncated.length + word.length + 1 < characterLimit) {
      truncated = `${truncated}${word} `;
    } else {
      break;
    }
  }
  return `${truncated.trim()}${ELLIPSIS_CHARACTER}`;
}
