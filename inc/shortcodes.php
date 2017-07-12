<?php
//shortcode for contact form

function stones_contact_form($atts, $content = null){
	$atts = shortcode_atts(
		array(),
		$atts,
		'contact_form'
		);
	//ob_start();
	include(get_template_directory() .'/templates/contact-form.php');
	//ob_get_clean();
}
add_shortcode('contact_form', 'stones_contact_form');

?>
