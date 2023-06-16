var btn = document.getElementById("countdown")
var segundos = 300;
var minutos = 4;
var interval = setInterval(count, 1000)
function count(){
	segundos = segundos - 1;
	btn.innerText = segundos;
	// if(segundos >= 10){
	// 	btn.innerText = minutos + ":" + segundos;
	// }else{ btn.innerText = minutos + ":" + "0" + segundos;}
	if(segundos == 0 && minutos == 0){
		segundos, minutos = 0;
		clearInterval(interval)
	}
	if(segundos == 0 && minutos >= 0){
		segundos = 60;
		minutos = minutos - 1;
	}
}


function test(){
    clearInterval(interval)
}


function closeModal(modal){
	modal.parentElement.style.visibility = 'hidden'

}

function modalVisible(id){
	console.log(document.getElementById(id))
	document.getElementById(id).style.visibility = "visible"
}