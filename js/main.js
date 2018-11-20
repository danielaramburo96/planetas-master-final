function dragstart(elemento,evento){
	event.dataTransfer.setData('Data',elemento.id);
}

function drop (target,evento){
	var elemento = event.dataTransfer.getData('Data');
	var contenedor = target.id;
	var nomEle = elemento.substr(4,elemento.length);
	var nomCon = contenedor.substr(4,contenedor.length);
	
	if(nomEle == nomCon){
		var coords = target.getBoundingClientRect();
		$("#"+contenedor).css({'opacity':''});
		$("#"+elemento).css({'top':'0', 'left':'0'});
		$("#img"+nomCon).remove();
		target.appendChild(document.getElementById(elemento));
	}else{
		alert("Planeta incorrecto");
	}
}