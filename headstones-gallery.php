 <?php 
 $att = get_posts( array(
 	'post_type' => 'attachment',
 	'post_parent'=> '8'//headstone post is id of 8

 	));
//  echo '<pre>';
// var_dump($att);
//  echo '</pre>';
 foreach ($att as $as){
 	 echo '<img src="';
 echo $as->guid;
  echo '" class="hideThis mySlides" title="';
  echo $as->post_title;
  echo '" data-describe="';
  echo $as->post_content;
  echo '">';
 }


?>