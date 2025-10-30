// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

function whoIsAdmin(users) {
	let result = [];

	for (let user of users) {
		if (user.estAdmin) {
			result.push(user.nom);
		}
	}

	return result;
}
const users = [
  { nom: "Raph", age: 28, estAdmin: true },
  { nom: "Lionel", age: 20, estAdmin: false },
  { nom: "Charlie", age: 22, estAdmin: true }
];


console.log(whoIsAdmin(users));
module.exports = {
	whoIsAdmin,
};