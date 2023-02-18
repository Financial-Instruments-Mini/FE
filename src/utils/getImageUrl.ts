export function getImageUrl(name: string) {
  return new URL(`../assets/bankicons/금융아이콘_PNG_${name}.png`, import.meta.url).href;
}
