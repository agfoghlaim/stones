 <?php 
 $sculpture_category_id = 22;
 $att = get_posts( array(
 	'post_type' => 'attachment',
 	'post_parent'=> $sculpture_category_id//sculptures post is id of 22

 	));

 // foreach ($att as $as){
 // 	 echo '<img src="';
 // echo $as->guid;
 //  echo '" class=" hideThis mySlides-sculptures">';
 // }
 foreach ($att as $as){
 	
 	 $ppid = wp_get_post_parent_id( $as->ID);
 	 //echo '<h1>'.$ppid.'</h1>';


 echo '<img src="';
 echo $as->guid;
  echo '" class="hideThis ';
  echo $sculpture_category_id.'-slides sculpture-slides"';
 // echo $slug.'-slides-is-php"';
  echo 'title="';
  echo $as->post_title;
  echo '" data-describe="';
  echo $as->post_content;

  echo '">';
  //echo '<h1>'.get_the_category(  ). '</h1>';
 }

?>