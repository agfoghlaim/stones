<?php 
function stones_contact_action(){
//if(!empty($_POST['submission'])){
    //wp_send_json_error('Nice try.');
  //}
  if(!check_ajax_referer('stones_contact_nonce', 'security')){
  wp_send_json_error('Stop messing.');
  }
  //ADD MORE VALIDATION
    $name = wp_strip_all_tags($_POST['name']);
    $email = wp_strip_all_tags($_POST['email']);
    $message = wp_strip_all_tags($_POST['message']);


    $args = array(
    	'post_title' => $name,
    	'post_content'=> $message,
    	'post_author'=> 1,
    	'post_status' => 'publish',
    	'post_type' => 'stones-contact',
    	'meta_input' => array(
    		'_email_value_key' => $email//refers to name of metabox, see inc/custom-post-types.php
    		)
    );
    if(wp_insert_post( $args )){
    	wp_send_json_success( $postID );
    }else{
    	wp_send_json_error( $postID );
    }
 
 
}
add_action('wp_ajax_nopriv_stones_contact_action', 'stones_contact_action');
add_action('wp_ajax_stones_contact_action', 'stones_contact_action');
?>