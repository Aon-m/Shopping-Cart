export default function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;

  const truncated = str.slice(0, maxLength);
  return truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
}
