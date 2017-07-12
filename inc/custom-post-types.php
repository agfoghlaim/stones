<?php

function stones_contact_custom_post(){

  $singular ='Message';
  $plural = 'Messages';

  $labels = array(
    'name'			=>$plural,
    'singular_name'	=>$singular,
    'add_name'		=>'Add New',
    'add_new_item'	=>'Add New ' .$singular,
    'menu_name'		=> $plural,
    'name_admin_bar'=> $singular,
	 'not_found'=>'No '.$plural.' found',
    'not_found_in_trash'=>'No '.$plural.' in Trash',
    );

  $args = array(
    'labels'              =>$labels,
    'capability_type'	  =>'post',
    'public'              =>true,
    'publicly_queryable'  =>true, 
    'exclude_from_search' =>false,
    'show_in_nav_menus'   =>true,
    'show_ui'             =>true,
    'show_in_menu'        =>true,
    'show_in_admin_bar'   =>true,
    'menu_icon'           =>'dashicons-email-alt',
    'menu_position'		=>26,
   	'hierarchical'        =>false,
   	'supports'=>array('title','editor','author','thumbnail')
 	);

register_post_type('stones-contact', $args);
}
add_action( 'init', 'stones_contact_custom_post' );

function stones_contact_columns( $columns ){
	//$columns is passed from supports
	// eg unset( $columns['author'] );  to remove

	$newColumns = array();
	$newColumns['title'] = 'Full Name';
	$newColumns['message'] = 'Message';
	$newColumns['email'] = 'Email';
	return $newColumns;
}
add_filter( 'manage_stones-contact_posts_columns' , 'stones_contact_columns');//custom post column titles

function stones_contact_custom_columns( $column, $post_id ){
	switch( $column ){
		case 'message' :
			echo get_the_excerpt(); //post id is set from function paramater
			break;
		case 'email' :
			$email = get_post_meta( $post_id, '_email_value_key', true );
			echo $email;
			break;
	}

}
add_action( 'manage_stones-contact_posts_custom_column', 'stones_contact_custom_columns' , 10, 2);//custom post column content 10 is priority, 2 is no of arguments to pass ie $column and $post_id


/*
*Contact Meta Boxes 
*/
function stones_contact_add_meta_box(){
	add_meta_box( 'contact_email', 'User Email', 'stones_contact_add_meta_box_callback', 'stones-contact', 'side' );
}

function stones_contact_add_meta_box_callback( $post ){

	wp_nonce_field('stones_save_contact_email', 'stones_save_email_nonce');
	$value = get_post_meta( $post->ID, '_email_value_key', true );
	echo '<label for="stones_save_email_field">User Email Address</label>';
	echo '<input type="email" id="stones_save_email_field" name="stones_save_email_field" value="' . esc_attr( $value ) . '"/>';

}
add_action('add_meta_boxes', 'stones_contact_add_meta_box');

function stones_save_contact_email( $post_id ){
	if( ! isset( $_POST['stones_save_email_nonce'] )){
		return;
	}
	if( ! wp_verify_nonce( $_POST['stones_save_email_nonce'], 'stones_save_contact_email' )){
		return;
	}
	if( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE){
		return;
	}
	if( ! current_user_can( 'edit_post', $post_id )){
		return;
	}
	if( ! isset( $_POST['stones_save_email_field'])){
		return;
	}

	$the_data = sanitize_text_field( $_POST['stones_save_email_field']  );
	update_post_meta( $post_id, '_email_value_key', $the_data );

}
add_action( 'save_post', 'stones_save_contact_email');

?>