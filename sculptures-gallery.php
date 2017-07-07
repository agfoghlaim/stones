 <?php 
 $att = get_posts( array(
 	'post_type' => 'attachment',
 	'post_parent'=> '22'//sculptures post is id of 22

 	));
 //echo '<pre>';
//var_dump($att);
 //echo '</pre>';
 foreach ($att as $as){
 	 echo '<img src="';
 echo $as->guid;
  echo '" class=" hideThis mySlides-sculptures">';
 }


?>