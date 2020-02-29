import { Alert } from "react-native";

/**
 * Fields validation
 * @param {Array} fields 
 * @return {Boolean}
 */
export default function validate(fields) {
  if (Array.isArray(fields)) {
    const validation = fields.map(field => {
      if (!field.value) {
        Alert.alert("Aviso", `O campo ${field.name} é obrigatório!`);
        return false;
      }
      return true;
    });
    return !validation.includes(false);
  }
  throw new Error("Param is not array");
}
