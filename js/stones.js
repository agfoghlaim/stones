console.log("hi");
window.onload = function(){
console.log("hi");
//don't change the image if the info div is showing
// function checkInfoDiv(){
// 	var infoDiv= document.getElementsByClassName('infoDiv')[0];
// console.log(infoDiv);
// 		if(infoDiv.classList.contains('opacity')){
// 			console.log("false");
// 			return false;
// 		}else{
// 			console.log("hgfd");
// 			return true;
// 		}
		
// }
//checkInfoDiv();



//var showDiv = document.getElementById('slide-desc');

	var heading = document.getElementById('slide-desc-head');
	var paragraph = document.getElementById('slide-desc-p');
	var arrow = document.getElementsByClassName('arrowInfo')[0];
	//var show = document.getElementById('headstones-slide');
	//var headstoneImage = document.getElementsByClassName('headstone-image')[0];
	var headstoneArr = document.getElementsByClassName('mySlides');
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
	
			arrow.addEventListener('click', function(){

				if(count < headstoneArr.length-1){
			      	count +=1;
			      	document.slider.src = headstoneArr[count].src;
			     	heading.innerHTML = headstoneArr[count].title;
			     	if(headstoneArr[count].getAttribute('data-describe') == ""){
			     	 	paragraph.innerHTML = " ";
			     	}else{
			     		paragraph.innerHTML = headstoneArr[count].getAttribute('data-describe') + " (edit this in media library)";
			     	}
			    }else{
			    	count = 0;
					document.slider.src = headstoneArr[count].src;
					heading.innerHTML = headstoneArr[count].title;
					paragraph.innerHTML = "This is a description of photo " + headstoneArr[count].title;
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
function togglePlusMinus(){
	var toggle = document.getElementsByClassName('toggle-plus-minus');
	console.log(toggle[0].innerHTML);
	for(i in toggle ){
			
	if(toggle[i].innerHTML ==="+"){
		toggle[i].innerHTML = "-";
	}else{
		toggle[i].innerHTML = "+";
	}

	}
	
console.log(toggle[0].innerHTML);
}

var info = document.getElementsByClassName('showInfo')[0];
var infoDiv = document.getElementsByClassName('infoDiv')[0];
//console.log(info);
//console.log(infoDiv);
function toggleVisibility(){
		//infoDiv.classList.add('visibility');
		document.getElementById('headstone-h3').classList.toggle('hide');
		togglePlusMinus();
		infoDiv.classList.toggle('visibility');
}
info.addEventListener('click', toggleVisibility, true);




};














































//copy of js before stupidity




// console.log("hi");
// window.onload = function(){
// console.log("hi");
// //don't change the image if the info div is showing
// // function checkInfoDiv(){
// // 	var infoDiv= document.getElementsByClassName('infoDiv')[0];
// // console.log(infoDiv);
// // 		if(infoDiv.classList.contains('opacity')){
// // 			console.log("false");
// // 			return false;
// // 		}else{
// // 			console.log("hgfd");
// // 			return true;
// // 		}
		
// // }
// //checkInfoDiv();



// //var showDiv = document.getElementById('slide-desc');

// 	var heading = document.getElementById('slide-desc-head');
// 	var paragraph = document.getElementById('slide-desc-p');
// 	var arrow = document.getElementsByClassName('arrowInfo')[0];
// 	//var show = document.getElementById('headstones-slide');
// 	//var headstoneImage = document.getElementsByClassName('headstone-image')[0];
// 	var headstoneArr = document.getElementsByClassName('mySlides');
// 	var count = 0;
// 	document.slider.src = headstoneArr[count].src;
// 	heading.innerHTML = headstoneArr[count].title;
// 	paragraph.innerHTML = "This is a description of photo " + headstoneArr[count].title;

// 	// show.addEventListener('mouseenter', function(){
// 	// 	showDiv.classList.toggle("hideThis", false);
// 	// });
// 	// show.addEventListener('mouseleave',function(){
// 	// 	showDiv.classList.toggle("hideThis", true);
// 	// });
	
// 			arrow.addEventListener('click', function(){

// 				if(count < headstoneArr.length-1){
// 			      	count +=1;
// 			      	document.slider.src = headstoneArr[count].src;
// 			     	heading.innerHTML = headstoneArr[count].title;
// 			     	if(headstoneArr[count].getAttribute('data-describe') == ""){
// 			     	 	paragraph.innerHTML = " ";
// 			     	}else{
// 			     		paragraph.innerHTML = headstoneArr[count].getAttribute('data-describe') + " (edit this in media library)";
// 			     	}
// 			    }else{
// 			    	count = 0;
// 					document.slider.src = headstoneArr[count].src;
// 					heading.innerHTML = headstoneArr[count].title;
// 					paragraph.innerHTML = "This is a description of photo " + headstoneArr[count].title;
// 				}

// 			 });


// // sculptures

// 	var show = document.getElementById('sculptures-slide');
// 	var sculptureArr = document.getElementsByClassName('mySlides-sculptures');
// 	var count = 0;
// 	document.sculptureSlider.src = sculptureArr[count].src;
	
// 	show.addEventListener('click', function(){

// 		if(count < sculptureArr.length-1){
// 	      count +=1;
// 	      document.sculptureSlider.src = sculptureArr[count].src;
	   
// 	      console.log(sculptureArr[count].title);

// 		}else{
// 	    count = 0;
// 		document.sculptureSlider.src = sculptureArr[count].src;
	
// 	 	}
// 	 		});


// // plaques

	
// 	var show = document.getElementById('plaques-slide');
// 	var plaquesArr = document.getElementsByClassName('mySlides-plaques');
// 	var count = 0;
// 	document.plaqueSlider.src = plaquesArr[count].src;
	
// 	show.addEventListener('click', function(){

// 		if(count < plaquesArr.length-1){
// 	      count +=1;
// 	      document.plaqueSlider.src = plaquesArr[count].src;
	   
// 	      console.log(plaquesArr[count].title);

// 		}else{
// 	    count = 0;
// 		document.plaqueSlider.src = plaquesArr[count].src;
	
// 	 	}
// 	 		});

// 	// for concerting cutout
// // var images = ['img/concertina.png', 'img/7cut.jpg','img/concertina.png'];
// // var time = 2000;
// // var i = 0;

// // function changePic(){

// // 	document.mohSlider.src = images[i];
// // 	if(i< images.length-1){
// // 		i++;
// // 	}else{
// // 		i=0;
// // 	}
// // 	setTimeout(function(){changePic();}, time);
	
// // }

// //window.onload = changePic();
// function togglePlusMinus(){
// 	var toggle = document.getElementsByClassName('toggle-plus-minus');
// 	console.log(toggle[0].innerHTML);
// 	for(i in toggle ){
			
// 	if(toggle[i].innerHTML ==="+"){
// 		toggle[i].innerHTML = "-";
// 	}else{
// 		toggle[i].innerHTML = "+";
// 	}

// 	}
	
// console.log(toggle[0].innerHTML);
// }

// var info = document.getElementsByClassName('showInfo')[0];
// var infoDiv = document.getElementsByClassName('infoDiv')[0];
// console.log(info);
// console.log(infoDiv);
// function toggleVisibility(){
// 		//infoDiv.classList.add('visibility');
// 		document.getElementById('headstone-h3').classList.toggle('hide');
// 		togglePlusMinus();
// 		infoDiv.classList.toggle('visibility');
// }
// info.addEventListener('click', toggleVisibility, true);




// };




