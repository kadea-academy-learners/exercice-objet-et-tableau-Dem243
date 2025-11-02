// Tu disposes d'un tableau nommé `élèves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".

// tableau d'objet des élèves
let eleves = [{
	nom: "Hugo",
	notes: [1, 20, 10, 50]
}, {
	nom: "Rapha",
	notes: [10, 2, 50, 50]
}, {
	nom: "Tshibo",
	notes: []
}, {
	nom: "Dems",
	notes: [10, 5, 0, 5]
}]

function showStudentBulletin(eleves) {
	let bulletin = [];
	for (const eleve of eleves) {
		//console.log(eleve.nom);
		const nom = eleve.nom;
		let moyenne = 0;


		if (eleve.notes.length > 0) {
			moyenne = eleve.notes.reduce((acc, value) => acc + value, 0) / eleve.notes.length;
		}

		moyenne = Math.round(moyenne * 100) / 100;

		let commentaire = "";
		switch (true) {
			case moyenne >= 16:
				commentaire = 'Excellent';

				break;
			case moyenne >= 14:
				commentaire = 'Très Bien';

				break;
			case moyenne >= 12:
				commentaire = 'Bien';

				break;
			case moyenne >= 10:
				commentaire = 'Passable';

				break;
			default:
				commentaire = 'À revoir';
				break;
		}
		bulletin.push({
			nom: nom,
			moyenne: moyenne,
			commentaire: commentaire
		})
	}


	return bulletin;

}
console.log(showStudentBulletin(eleves));

module.exports = {
	showStudentBulletin,
};