/**
* Validate fields and send params to result
* @param {Array} fields
*/
export default function validate(fields) {
 if (Array.isArray(fields)) {
   const validate = fields.map(field => {
     if (!field.value) {
       alert(`O campo ${field.name} é obrigatório!`);
       return false;
     }
     return true;
   });

   return !validate.includes(false);
 }
 throw new Error("Field not array");
}