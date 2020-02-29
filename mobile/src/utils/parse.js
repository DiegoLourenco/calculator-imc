/**
 * Parse string to float
 * @param {String} field 
 * @return {Float}
 */
export default function parse(field) {
  return parseFloat(field.replace(",", "."));
}
