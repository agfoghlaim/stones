console.log("hi");
window.onload = function(){
console.log("hi");



//var showDiv = document.getElementById('slide-desc');

	var heading = document.getElementById('slide-desc-head');
	var paragraph = document.getElementById('slide-desc-p');

	var show = document.getElementById('headstones-slide');
	var headstoneArr = document.getElementsByClassName('mySlides');
					for(i in headstoneArr){
						console.log("marie "+ headstoneArr[i].src);
					}
	var count = 0;
	document.slider.src = headstoneArr[count].src;
	heading.innerHTML = headstoneArr[count].title;
	paragraph.innerHTML = "This is a description of photo " + headstoneArr[count].title;

	// show.addEventListener('mouseenter', function(){
	// 	showDiv.classList.toggle("hideThis", false);
	// });
	// show.addEventListener('mouseleave',function(){
	// 	showDiv.classList.toggle("hideThis", true);
	// });
	show.addEventListener('click', function(){

		if(count < headstoneArr.length-1){
	      count +=1;
	      document.slider.src = headstoneArr[count].src;
	     heading.innerHTML = headstoneArr[count].title;
	     paragraph.innerHTML = "This is a description of photo " + headstoneArr[count].title;
	      console.log(headstoneArr[count].title);

		}else{
	    count = 0;
		document.slider.src = headstoneArr[count].src;
		heading.innerHTML = headstoneArr[count].title;
		paragraph.innerHTML = "This is a description of photo " + headstoneArr[count].title;
		//console.log(arr[count].title);
	 	}
	 		});


// sculptures

	var show = document.getElementById('sculptures-slide');
	var sculptureArr = document.getElementsByClassName('mySlides-sculptures');
	var count = 0;
	document.sculptureSlider.src = sculptureArr[count].src;
	
	show.addEventListener('click', function(){

		if(count < sculptureArr.length-1){
	      count +=1;
	      document.sculptureSlider.src = sculptureArr[count].src;
	   
	      console.log(sculptureArr[count].title);

		}else{
	    count = 0;
		document.sculptureSlider.src = sculptureArr[count].src;
	
	 	}
	 		});


// plaques

	
	var show = document.getElementById('plaques-slide');
	var plaquesArr = document.getElementsByClassName('mySlides-plaques');
	var count = 0;
	document.plaqueSlider.src = plaquesArr[count].src;
	
	show.addEventListener('click', function(){

		if(count < plaquesArr.length-1){
	      count +=1;
	      document.plaqueSlider.src = plaquesArr[count].src;
	   
	      console.log(plaquesArr[count].title);

		}else{
	    count = 0;
		document.plaqueSlider.src = plaquesArr[count].src;
	
	 	}
	 		});

	// for concerting cutout
// var images = ['img/concertina.png', 'img/7cut.jpg','img/concertina.png'];
// var time = 2000;
// var i = 0;

// function changePic(){

// 	document.mohSlider.src = images[i];
// 	if(i< images.length-1){
// 		i++;
// 	}else{
// 		i=0;
// 	}
// 	setTimeout(function(){changePic();}, time);
	
// }

//window.onload = changePic();


};




