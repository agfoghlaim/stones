 <?php 
 $plaque_category_id=30;
 $cat_name = "plaques";

 $att = get_posts( array(
 	'post_type' => 'attachment',
 	'post_parent'=> $plaque_category_id//plaques post is id of 30

 	));

 foreach ($att as $as){
 	
 	 $ppid = wp_get_post_parent_id( $as->ID);
 


 echo '<img src="';
 echo $as->guid;
  echo '" class="hideThis ';
  echo $plaque_category_id.'-slides plaque-slides"';
 // echo $slug.'-slides-is-php"';
  echo 'title="';
  echo $as->post_title;
  echo '" data-describe="';
  echo $as->post_content;

  echo '">';
  //echo '<h1>'.get_the_category(  ). '</h1>';
 }


?>