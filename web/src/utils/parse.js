/**
 * Convert a string to float
 * @param {string} field
 * @return {Number}
 */
export default function parse(field) {
  return parseFloat(field.replace(",", "."));
}
