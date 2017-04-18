var voornaam = 'Thomas';
var achternaam = 'Lucas';
var woonplaats = 'Dordrecht';

function i18l(language) {
	switch(language){
		case 'nl':
			return({
				Voornaam : voornaam,
				Achternaam : achternaam,
				Woonplaats : woonplaats
			})
		break;
		
		default:
		case 'en':
			return({
				Firstname : voornaam,
				Lastname : achternaam,
				City : woonplaats
			})
	}
}

module.exports = {i18l};