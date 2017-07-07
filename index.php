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

      <div class="welcome-row">
        <div class="welcome-col">
         
   <?php 
            $welcome = new WP_Query( array( 'cat' => 3 ) );
              if ( $welcome->have_posts() ) {
                echo '<h1>';
                  while ( $welcome->have_posts() ) {
                  $welcome->the_post();
                  echo get_the_title();
                  }
                    echo '</h1><p>';
                    echo get_the_content();
                    echo '</p>';
                   /* Restore original Post Data */
                 wp_reset_postdata();
                } else {
                  
                }

          ?> 
          
 
          <a href="#" class="moh-button">Enquire About Headstones</a>
        </div>
      </div>
      
      <div class="row">
        <div class="col-2 purple" id="headstones-slide">
        <img src="" name="slider" alt="" id="imgHere" data-describe="" id="headstones-image" class="headstone-image">

            <?php 
              if( have_posts() ): 
                while( have_posts() ): the_post();
                  get_template_part('headstones', get_post_format() );
                endwhile;
              endif;
            ?>
        <div class="col-div purple"></div>  
        <div class="txt-div "><h3 id="headstone-h3">Headstones and Memorials</h3></div>
        <div class="for-flex-direction">
          <div class="showInfo"><span class="toggle-plus-minus">+</span></div>
          <div class="arrowInfo"><span>></span></div>
        </div>
        <div class="infoDiv">
            <h4 id="slide-desc-head"></h4>
            <p id="slide-desc-p"></p>
        </div>
      </div>
          <div class="col-2 col-text">
            <!-- <h2>Headstones</h2> -->
            <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> -->
               <?php 
            $welcome = new WP_Query( array( 'cat' => 5 ) );
              if ( $welcome->have_posts() ) {
                echo '<h2>';
                  while ( $welcome->have_posts() ) {
                  $welcome->the_post();
                  echo get_the_title();
                  }
                    echo '</h2><p>';
                    echo get_the_content();
                    echo '</p>';
                   /* Restore original Post Data */
                 wp_reset_postdata();
                } else {
                  
                }

          ?>
            <h4 id="slide-desc-head"></h4>
            <p id="slide-desc-p"></p>
             <a href="#" class="moh-button">Enquire About Headstones</a>
        </div>
      </div>

      <div class="row reversible">
         <div class="col-2 col-text">
            <!-- <h2>Sculptures</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> -->

                 <?php 
            $welcome = new WP_Query( array( 'cat' => 6 ) );//category 6 is sculptures
              if ( $welcome->have_posts() ) {
                echo '<h2>';
                  while ( $welcome->have_posts() ) {
                  $welcome->the_post();
                  echo get_the_title();
                  }
                    echo '</h2><p>';
                    echo get_the_content();
                    echo '</p>';
                   /* Restore original Post Data */
                 wp_reset_postdata();
                } else {
                  
                }

          ?>
            <p><a href="#" class="moh-button">Enquire About Sculptures</a></p>
        </div>
       
        <div class="col-2 yellow" id="sculptures-slide">
        <img src="" name="sculptureSlider" alt="" id="imgHere">
             <?php 
              if( have_posts() ): 
                while( have_posts() ): the_post();
                  get_template_part('sculptures', get_post_format() );
                endwhile;
              endif;
            ?>
   
        <div class="col-div yellow"></div>
        <div class="txt-div"><h3>Sculptures</h3></div>

             <div class="for-flex-direction">
                <div class="showInfo"><span class="toggle-plus-minus">+</span></div>
                <div class="arrowInfo"><span>></span></div>
              </div>
              <div class="infoDiv">
                <h4 id="slide-desc-head" class="slide-desc-head"></h4>
                <p id="slide-desc-p" class="slide-desc-p"></p>
              </div>

        </div>
      </div>



      <div class="row">
        <div class="col-2 purple" id="plaques-slide">
          <img src="" name="plaqueSlider" alt="" id="imgHere">

               <?php 
              if( have_posts() ): 
                while( have_posts() ): the_post();
                  get_template_part('plaques', get_post_format() );
                endwhile;
              endif;
            ?>
  
          <div class="col-div purple"></div>
          <div class="txt-div "><h3>Plaques</h3></div>
        </div>
          <div class="col-2 col-text">
          <?php
                 $welcome = new WP_Query( array( 'cat' => 7 ) );//category 7 is plaques
              if ( $welcome->have_posts() ) {
                echo '<h2>';
                  while ( $welcome->have_posts() ) {
                  $welcome->the_post();
                  echo get_the_title();
                  }
                    echo '</h2><p>';
                    echo get_the_content();
                    echo '</p>';
                   /* Restore original Post Data */
                 wp_reset_postdata();
                } else {
                  
                }

          ?>
           <!--  <h2>Plaques</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> -->
            <!-- <h4 id="slide-desc-head"></h4>
            <p id="slide-desc-p"></p> -->
             <a href="#" class="moh-button">Enquire About Plaques</a>
        </div>
      </div>

      <div class="row reversible">
         <div class="col-2 col-text">
            <h2>Portraits</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="#" class="moh-button">Enquire About Portraits</a>
        </div>
       
        <div class=" gallery-grid">
          <div class="grid-div" >
            <img src="<?php echo get_template_directory_uri() . '/img/concertinaSquare.jpg' ?>" alt="" class="flex">
            <div class="col-div blue" ></div>
           <!--  <div class="txt-div"><h3>Concertina</h3></div> -->
            <div class="txt-hidden"><p>A bit about the concertina.</p></div>
          </div>
          <div class="grid-div">
            <img src="<?php echo get_template_directory_uri() . '/img/concertinaSquare.jpg' ?>" alt="" class="flex">
            <div class="col-div purple"></div>
            <!-- <div class="txt-div"><h3>Mohomad Ali</h3></div> -->
          </div>
          <div class="grid-div">
            <img src="<?php echo get_template_directory_uri() . '/img/concertinaSquare.jpg' ?>" alt="" class="flex">
            <div class="col-div yellow"></div>
         <!--    <div class="txt-div"><h3>Obama</h3></div> -->
          </div>
          <div class="grid-div">
            <img src="<?php echo get_template_directory_uri() . '/img/concertinaSquare.jpg' ?>" alt="" class="flex">
            <div class="col-div light" ></div>
            <!-- <div class="txt-div"><h3>Sculpture</h3></div> -->
          </div>
          <div class="grid-div">
            <img src="<?php echo get_template_directory_uri() . '/img/concertinaSquare.jpg' ?>" alt="" class="flex">
            <div class="col-div black" ></div>
          <!--   <div class="txt-div"><h3>Guitar</h3></div> -->
          </div>
          <div class="grid-div">
            <img src="<?php echo get_template_directory_uri() . '/img/concertinaSquare.jpg' ?>" alt="" class="flex">
            <div class="col-div pink" ></div>
           <!--  <div class="txt-div"><h3>Concertina</h3></div> -->
          </div>
          <div class="grid-div">
            <img src="<?php echo get_template_directory_uri() . '/img/concertinaSquare.jpg' ?>" alt="" class="flex">
            <div class="col-div light-blue"></div>
           <!--  <div class="txt-div"><h3>Concertina</h3></div> -->
          </div>
          <div class="grid-div">
            <img src="<?php echo get_template_directory_uri() . '/img/concertinaSquare.jpg' ?>" alt="" class="flex">
            <div class="col-div yellow"></div>
            <!-- <div class="txt-div"><h3>Concertina</h3></div> -->
          </div>
          <div class="grid-div">
            <div class="portrait-button">
            <a href="#" class="moh-button">View More</a>
            </div>
           <div class="col-div"></div>
            
          </div>
          
        
        
        </div>
      </div>

    


  
  

<?php get_footer(); ?>
