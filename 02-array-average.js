// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

function averageNote(notes) {
	//calcule moyenne
	let moyenneNotes = notes.reduce((acc, value) => acc + value, 0) / notes.length
	// Retourne si la moyenne est >=10
	if (moyenneNotes >= 10) {
		return "Réussi"
	}
	return "Échoué"

}
// liste nombres
let notes = [10, 50, 2, 8, 1];


averageNote(notes);

module.exports = {
	averageNote,
};