export default function capitalizeString(word: string) {
  return word.toLowerCase().replace(/\w/, (firstLetter) => firstLetter.toUpperCase());
}
