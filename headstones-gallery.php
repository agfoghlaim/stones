 <?php 
  $headstone_category_id=8;
  $cat_name = "headstones";

 $att = get_posts( array(
 	'post_type' => 'attachment',
 	'post_parent'=>  $headstone_category_id//headstone post is id of 8

 	));
//echo  $att->post_title;
 //var_dump($att);
//  echo '<pre>';
// var_dump($att);
//  echo '</pre>';

   
   
 

 foreach ($att as $as){
 	
 	 $ppid = wp_get_post_parent_id( $as->ID);
 	 //echo '<h1>'.$ppid.'</h1>';


 echo '<img src="';
 echo $as->guid;
  echo '" class="hideThis ';
  echo $headstone_category_id.'-slides headstone-slides"';
 // echo $slug.'-slides-is-php"';
  echo 'title="';
  echo $as->post_title;
  echo '" data-describe="';
  echo $as->post_content;

  echo '">';
  //echo '<h1>'.get_the_category(  ). '</h1>';
 }


?>