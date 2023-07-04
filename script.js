var counter

var topics = [{
	"ep": "EPISÓDIO 2",
	"title":"O QUE É UMA NAÇÃO SEM TERRITÓRIO?",
	"text":"O QUE É UMA CABRUNCA",
	"topic":"p1"
},

{
	"ep":"EPISÓDIO 2",
	"title":"O QUE É UMA NAÇÃO SEM TERRITÓRIO?",
	"topic":"p2",
	"image":"t2.png"
},

{
	"ep":"EPISÓDIO 3",
	"title":"O QUE É A CHECHÊNIA?",
	"topic":"p3",
	"image":"t3.png"
}

]


var questions = [{
	"repV" : "ru"
},

{
	"repV": "ram"
}

]

function quizz(rep){

  if(rep.getAttribute("rep") == "ago"){
  	alert("kkkkkkkkkk.")
  }
  if(rep.getAttribute("rep") == questions[parseInt(rep.getAttribute("sel"))].repV){
  	rep.style="background-color: rgb(0,127,0,0.5);"
  	clicked = 1;
  }else{
  	rep.style="background-color: rgb(255,0,0,0.5);"
  	clicked = 1;
  }
 

}




function start(){
	var tst = document.getElementById(topics[0].topic)
	tst.style.visibility = "visible"
	topics.shift()
}




function closeModal(modal){
	console.log(topics[0].ep)
	var idEp = document.getElementById("ep").innerText = topics[0].ep
	var epText = document.getElementById("titleEP").innerText = topics[0].title
	modal.parentElement.style.visibility = 'hidden'
	var img = document.getElementsByClassName('presentation')[0].style = "background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 1.0)), url(" + topics[0].image + ");"
	console.log(img.style)



}

function startTopic(){

}