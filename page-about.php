
<?php get_header(); ?>
      <div class="nav-container">
          <nav>
           <?php  wp_nav_menu(); ?>
            <!-- <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Headstones</a></li>
              <li><a href="#">Plaques</a></li>
              <li><a href="#">Sculptures</a></li>
              <li><a href="#">Contact</a></li>
            </ul> -->
          </nav>
         
        </div>

       <div class="contain-header" id="put-img">
        <!-- <img class="logo" src="img/newLogo.svg"> -->
        <img src="<?php header_image(); ?>" height="<?php echo get_custom_header()->height; ?>" width="<?php echo get_custom_header()->width; ?>" alt="" />
      </div><!-- end contain-header  -->


		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
		<?php the_content( );?>
		<?php endwhile; ?>
		<!-- post navigation -->
		<?php else: ?>
		<!-- no posts found -->
		<?php endif; ?>
     

<?php get_footer(); ?>