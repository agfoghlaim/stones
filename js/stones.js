console.log("hi");
window.onload = function(){
console.log("hi");

/*
*need each:
slides id eg 8-slide
slider id eg headstoneSlider
name of item eg headstone
item post ids are: 8, ?, ?

*/

function GetInfo(name, no){
	this.slideId = no + '-slide';
	this.sliderName = name + 'Slider';

}

//onload
//show one pic
//add event listener

//to show one pic:

//all slides
var headstoneSlides = document.getElementsByClassName('8-slides');
var sculptureSlides = document.getElementsByClassName('22-slides');
var plaqueSlides = document.getElementsByClassName('30-slides');
var counter = 0;
//initial images
document.headstoneSlider.src = headstoneSlides[counter].src;
document.sculptureSlider.src = sculptureSlides[counter].src;
//console.logsculptureSlides;
document.plaqueSlider.src = plaqueSlides[0].src;

//add event listener
document.body.addEventListener('click', function(event){
	changeSlide(event);
});

function changeSlide(event){

	
	if(event.target.classList.contains('arrowInfo')){
		
		var relSlider = event.target.parentNode.parentNode.id + 'Slider';
		var relSlides =  document.getElementsByClassName(event.target.parentNode.parentNode.id+'-slides');
		
		if(counter < relSlides.length-1){
		counter +=1;
		
		}else{
			counter = 0;
			
		}
		
		document.getElementsByName(relSlider)[0].src = relSlides[counter].src;

	//change text
	//get rel head and p
	var relHead = document.getElementById(event.target.parentNode.parentNode.id + '-head');
	var relP = document.getElementById(event.target.parentNode.parentNode.id + '-p');

	if(relSlides[counter].getAttribute('data-describe') == ""){
			relP.innerHTML = " ";
	}else{
			relP.innerHTML = relSlides[counter].getAttribute('data-describe');
	}

	relHead.innerHTML = relSlides[counter].title;





	}
}













































// function Slider(postId, name ){
// 	//this.postId = postId;
// 	this.name = name;
// 	this.class = this.postId+'-slides';
// 	this.array = document.getElementsByClassName(this.class);
// 	this.sliderName = 'headstoneSlider';
// 	//this.getStuff = function(stuff){ return name + "-" + stuff};
// 	this.forHead =  name +'-head';
// 	this.forP = name+'-p';
// 	this.heading = document.getElementById(this.forHead);
// 	this.paragraph= document.getElementById(this.forP);

// }

// var headstone = new Slider(8,'headstone');
// console.log(headstone);

// //headstone.src = headstone.array[3].src;
// document.body.addEventListener('click', function(e){
// 		changeFunction(e);
// 		//}
// 	});
// function myMadFunction(what){
// 	var count = 0;
// 	//1. HEADING
// 	what.heading.innerHTML = what.array[count].title;
// 	//2. PARAGRAPH
// 		if(what.array[count].getAttribute('data-describe') == ""){
// 			what.paragraph.innerHTML = " ";
// 		}else{
// 			what.paragraph.innerHTML = what.array[count].getAttribute('data-describe');
// 		}
// 	//3. INITIAL IMAGE
// 	var relSlider = document.getElementsByName(what.sliderName);
// 	relSlider[0].src = what.array[count].src;
// 	//4. CHANGE SLIDES

// }

// myMadFunction(headstone);//onload
// function changeFunction(e){
// 	if(e.target.classList.contains('arrowInfo')){
// 			//e.target.parentNode.parentNode.id;//headstone
// 			var item = e.target.parentNode.parentNode.id;
// 			var id = e.target.parentNode.parentNode.firstChild.firstChild.classList[1];
// 			console.log("id be suprised if this is right " + id);
// 			item = new Slider(8, item);
// 			console.log("item arrrrrrr "+ item.array);
// 			//var slider = item +'Slider';
// 			//console.log("item is "+ item);
// 			//document.slider[0].src = headstone.array[3].src;
// 			//console.log("meh is "+ slider);
// 			//console.log("i hope this works "+ sliderName);
// 			//changeIt(e.target.parentNode.parentNode.id);
// }

// }

// // function changeIt(what){
// // 	console.log(what.array);
// // 	what.heading.innerHTML = "marie o hara is confused";
// // }


// 	// var headstoneArr = document.getElementsByClassName('8-slides');
// 	// //change headstoneArr refs to headstone.array.
// 	// //console.log(headstoneArr);
// 	// //var count = 0;
// 	// //var heading = document.getElementById('slide-desc-head');
// 	// //var paragraph = document.getElementById('slide-desc-p');
// 	// heading.innerHTML = headstoneArr[count].title;
// 	// paragraph.innerHTML = "This is a description of photo " + headstoneArr[count].title;
	
	
// 	// //document.headstoneSlider.src = headstoneArr[count].src;
// 	// headstoneArr[count].src = headstone.array[count].src;
// 	// document.headstoneSlider.src = headstoneArr[count].src;
	

// 	// document.body.addEventListener('click', function(e){
// 	// 	if(e.target.classList.contains('arrowInfo')){
			
// 	// 		//console.log("grand parent " + e.target.parentNode.parentNode.id);//headston
// 	// 		var sliderName = e.target.parentNode.parentNode.id;
			
// 	// 		changeImages(headstoneArr, e.target.parentNode.parentNode.id);
		
// 	// 	}
// 	// }, true);

// 	// 		function changeImages(imgArr, slider){
			
// 	// 				if(count < imgArr.length-1){
// 	// 		      	count +=1;
// 	// 		      	var meh = document.getElementsByName(slider);
// 	// 		      	console.log(meh);
// 	// 		      meh[0].src = imgArr[count].src;
// 	// 		     	heading.innerHTML = imgArr[count].title;
// 	// 		     	if(imgArr[count].getAttribute('data-describe') == ""){
// 	// 		     	 	paragraph.innerHTML = " ";
// 	// 		     	}else{
// 	// 		     		paragraph.innerHTML = imgArr[count].getAttribute('data-describe') + " (edit this in media library)";
// 	// 		     	}
// 	// 		    }else{
// 	// 		    	count = 0;
// 	// 				slider.src = imgArr[count].src;
// 	// 				heading.innerHTML = imgArr[count].title;
// 	// 				paragraph.innerHTML = "This is a description of photo " + imgArr[count].title;
// 	// 			}

// 	// 		}

				


// 			// arrow.addEventListener('click', function(){

// 			// 	if(count < headstoneArr.length-1){
// 			//       	count +=1;
// 			//       	document.slider.src = headstoneArr[count].src;
// 			//      	heading.innerHTML = headstoneArr[count].title;
// 			//      	if(headstoneArr[count].getAttribute('data-describe') == ""){
// 			//      	 	paragraph.innerHTML = " ";
// 			//      	}else{
// 			//      		paragraph.innerHTML = headstoneArr[count].getAttribute('data-describe') + " (edit this in media library)";
// 			//      	}
// 			//     }else{
// 			//     	count = 0;
// 			// 		document.slider.src = headstoneArr[count].src;
// 			// 		heading.innerHTML = headstoneArr[count].title;
// 			// 		paragraph.innerHTML = "This is a description of photo " + headstoneArr[count].title;
// 			// 	}

// 			//  });


// sculptures

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



//window.onload = changePic();
function togglePlusMinus(toggle){
	if(toggle.innerHTML ==="+"){
		toggle.innerHTML = "-";
	}else{
		toggle.innerHTML = "+";
	}
}


	document.body.addEventListener('click', function(e){

		if(e.target.classList.contains('showInfo')){
			e.target.parentNode.nextElementSibling.classList.toggle('visibility');
			togglePlusMinus(e.target.firstChild);
			e.preventDefault();
		}
	});



//}





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




