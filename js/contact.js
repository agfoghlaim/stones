/*
*Contact Form
*/

jQuery(document).ready(function($){
	console.log("jquery is here");

	$('#stonesContactForm').on('submit', function(e){
		e.preventDefault();
		var form = $(this);
		var name = form.find('#name').val();
		var email = form.find('#email').val();
		var message = form.find('#message').val();
		var ajaxUrl = stonesAjax.ajaxurl;
		console.log(ajaxUrl);

		// if(){
		// 	!(ok)
		// //VALIDATE HERE!!
		// return;
		// }

		$.ajax({
			url: ajaxUrl,
			type: 'post',
			data: {
				name: name,
				email: email,
				message: message,
				action: 'stones_contact_action',
				security: stonesAjax.contact_security
			},
			success: function(response){
				
				console.log("success "+ response);
			},
			error: function(response){
				console.log("error "+ response);
			}
		});

	});










});
