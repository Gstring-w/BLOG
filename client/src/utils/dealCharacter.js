export default function dealCharacter(str, num) {
  if (str.length <= num) {
    return str;
  }
  var result = str.slice(0, num) + "...";
  return result;
}
