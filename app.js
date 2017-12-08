function generale() {
		//boucle pour chaque boutton
		$('.color').each(function() {
			//sélectionner les boutons un par un avec leur data
			console.log($(this).data('color'));
		//Attribuer la data à la classe "color"
		$(this).css("background-color", $(this).data("color"));

		$(this).click(function() {
			if ($('#modify-texte').is(':checked')) {
				$('p').css("color", $(this).data("color"));
			}

			else {
				$('.main').css("background-color", $(this).data("color"));
			}

		});
	});
}

generale()
