 <?php 
 $att = get_posts( array(
 	'post_type' => 'attachment',
 	'post_parent'=> '8'//headstone post is id of 8

 	));
 echo '<h1><pre>';
var_dump($att);
 echo '</pre></h1>';
 // foreach ($att as $as){
 // 	echo '<img src="';
 // 	echo $as->guid;
 //  	echo '" class="hideThis mySlides">';
 // }


?>