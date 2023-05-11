//Importation du package generatepassword
const generator = require("generate-password");

//Genérer un password de 10 caractères avec nombres et lettres majuscules ou minuscles.
const password = generator.generate({
  length: 10,
  numbers: true,
});

//Genérer un password de 16 caractères avec nombres et lettres majuscules ou minuscles et des symboles
const password16 = generator.generate({
  length: 10,
  numbers: true,
  symbols: true,
  stric: true,
});
//Genérer un tableau de 5 password de 16 caractères avec nombres et lettres majuscules ou minuscles et des symboles, minimum 1 de chaque obligatoire
const passwordTab = generator.generateMultiple(5, {
  length: 16,
  numbers: true,
  symbols: true,
  stric: true,
});

console.log(password);
console.log(password16);
console.log(passwordTab);
