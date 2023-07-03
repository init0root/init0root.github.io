var counter

var topics = [{
	"ep": "EPISÓDIO 2",
	"title":"O QUE É UMA DESGRAÇA?",
	"text":"O QUE É UMA CABRUNCA",
	"topic":"p1"
},

{
	"ep":"EPISÓDIO 2",
	"title":"TESTANDO O TITULO",
	"topic":"p2"
}

]




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


}

function startTopic(){

}