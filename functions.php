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

function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');