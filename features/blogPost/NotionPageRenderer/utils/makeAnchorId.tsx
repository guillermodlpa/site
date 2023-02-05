export default function makeAnchorId(text: string) {
  return text
    .toLocaleLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/--+/g, "-");
}
