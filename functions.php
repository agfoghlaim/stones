<?php 

function stones_enqueue_scripts(){

	wp_enqueue_style( 'stonesstyle', get_template_directory_uri() . '/css/style.css', array(), '1.0.0', 'all' );
	wp_enqueue_script('stonesjs', get_template_directory_uri() . '/js/stones.js', array(), '1.0.0', true);

}
add_action('wp_enqueue_scripts', 'stones_enqueue_scripts' );

function stones_theme_setup(){
	add_theme_support( 'menus' );

	register_nav_menu( 'primary', 'Stones Primary Navigation' );
}
add_action('init', 'stones_theme_setup');


add_theme_support('custom-header');
add_theme_support('post-formats', array('gallery'));

// allow .svg in gallery

function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

// get urls of images
function stones_get_gallery($num = 2){
	$output = 'marie o hara';
	if(has_post_thumbnail() && num ==1) : //NB post id 8 for headstones, fix this marie
		$output = wp_get_attachment_url( get_post_thumbnail_id( get_the_ID()));
	else:
		$attachments = get_posts( array(
			'post_type' => 'attachment', 
			'posts_per_page' => $num,
			'post_parent' => get_the_ID()
			));
		if( $attachments && num == 1):
			 	foreach($attachments as $attachment):
			 		$output = wp_get_attachment_url( $attachment->ID );
			 	endforeach;
		elseif( $attachments && num > 1):
				$output = $attachments;
		endif;
		wp_reset_postdata();
	endif;
	return $output;
}