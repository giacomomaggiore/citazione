var larghezza = window.innerWidth
var altezza   = window.innerHeight

const moltiplicatore = 20

var medioevo_status = false
var novecento_status = false
var terzo_millennio_status = false

const numero_citazioni_medioevo   = 8
const numero_citazioni_novecento  = 6
const numeroi_citazioni_millennio = 6

//ELENCO DELLE VARIE CITAZIONI
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// il moltiplicatore di citazioni è il numero di quante citazioni ci sono per ogni categoria (0,1,2)
const moltiplicatore_citazioni = 10

elenco_gigante =[
[{
	// CITAZIONI MEDIOEVO
	1:{"citazione": "Amo il tradimento, ma odio il traditore", "persona": "Gaivs Ivlivs Caesar"},
	2:{"citazione":"Io non mi vergognerò mai di citare un cattivo autore se la battuta è buona", "persona":"Lucio Anneo Seneca"},
	3:{"citazione": "Signore dai forza al mio nemico e fallo vivere a lungo, affinché possa assistere al mio trionfo", "persona": "Napoleone"},
	4:{"citazione": "C'è da avere più paura di tre giornali ostili che di mille baionette", "persona": "Napoleone"},
	5:{"citazione": "La medicina crea persone malate, la matematicapersone tristi e la teologia peccatori", "persona": "Martin Lutero"},
	6:{"citazione": "Il mondo è rotondo.", "persona": "Cristoforo Colombo"},
	7:{"citazione": "Un uomo che non si interessa allo Stato noi non lo consideriamo innocuo, ma inutile", "persona": "Pericle"},
	8:{"citazione": "Più gente conosco, e più apprezzo il mio cane", "persona": "Socrate"},
	9:{"citazione": "È bene, nella vita come ad un banchetto, non alzarsi né assetati né ubriachi.", "persona": "Aristotele"},
	10:{"citazione": "Agli zotici ho fatto mettere in mano la frusta e li ho mandati a sorvegliare le bestie", "persona": "Gengis Khan"},

}],
[{ 
	1:{"citazione": "Non sempre cambiare equivale a migliorare, ma per migliorare bisogna cambiare", "persona": "Sir Winston Churchil"},
	2:{"citazione": "Risorgerà il mondo nuovo ma noi non ci saremo noi non ci saremo", "persona": "I Nomadi"},
	3:{"citazione": "Siamo più popolari di Gesù", "persona": "John Lennons"},
	4:{"citazione": "È la nostra luce, non la nostra ombra, quella che ci spaventa di più", "persona": "Nelson Mandela"},
	5:{"citazione": "La vera libertà si vive faticosamente tra continue insidie", "persona": "Aldo Moro"},
	6:{"citazione": "Nessuno ci vendicherà: la nostra pena non ha testimoni", "persona": "Peppino Impastato"},
	7:{"citazione": "Il rock è sempre stato la musica del diavolo", "persona": "David Bowie"},
	8:{"citazione": "Odio la guerra, ma amo lo spirito guerriero. Odio la spada, ma amo i samurai", "persona": "Phil Knight"},
	9:{"citazione": "Quando il popolo teme il governo c'è tirannia. Quando il governo teme il popolo c'è democrazia", "persona": "Thomas Jefferson"},
	10:{"citazione": "Won’t be a rock star. I will be a legend.", "persona": "Freddie Mercury"},
}],
[{ 
	1:{"citazione": "Stay hungry. Stay foolish", "persona": "Steve Jobs"},
	2:{"citazione": "Non sono un politico, non ho il dovere di ascoltare anche i babbei", "persona": "Roberto Burioni"},
	3:{"citazione": "Dammi un appuntamento anche se è vietato al reparto sanitari di un supermercato", "persona": "Lo Stato Sociale"},
	4:{"citazione": "Milano è la città più europea del mondo. Neanche New York è così europea", "persona": "Claudio Bisio"},
	5:{"citazione": "Le mie mani Brigate Rosse accarezzano te che sei Aldo Moro", "persona": "Pinguini Tattici Nucleari"},
	6:{"citazione": "L'amore è una cosa irrazionale mentre l'amore no", "persona": "Luca Dubini"},
	7:{"citazione": "“Ci sono quattro bisogni umani fondamentali, cibo, sonno, sesso e vendetta", "persona": "Banksy"},
	8:{"citazione": "La politica teme il talento perché il talento ti regala la libertà e la forza di ribellarti", "persona": "Renzo Piano"},
	9:{"citazione": "Certe volte mi dispiace di non essere un dittatore ma, ahimè, non lo sono", "persona": "Silvio Berlusconi"},
	10:{"citazione": "Gennaio è lungo tanto quanto il lunedì", "persona": "Marco De Negri"},
}]
]

//console.log(elenco_gigante[0])
//console.log(elenco_gigante[1])
//console.log(elenco_gigante[2])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
colori = {
	1 :{"background":"#4B3564", "font":"#FFFFFF"},
	2 :{"background":"#2F4550", "font":"#FFFFFF"},
	3 :{"background":"#7391C3", "font":"#FFFFFF"},
	4 :{"background":"#82204A", "font":"#FFFFFF"},
	5 :{"background":"#76D178", "font":"#FFFFFF"},
	6 :{"background":"#A6A867", "font":"#000000"},
	7 :{"background":"#CB9CF2", "font":"#000000"},
	8 :{"background":"#70798C", "font":"#000000"},
	9 :{"background":"#05F140", "font":"#000000"},
	10:{"background":"#EC4E20", "font":"#000000"},
	11:{"background":"#B20D30", "font":"#FFFFFF"},
	12:{"background":"#313638", "font":"#FFFFFF"},
	13:{"background":"#7F7CAF", "font":"#FFFFFF"},
	14:{"background":"#5B2333", "font":"#FFFFFF"},
	15:{"background":"#804E49", "font":"#FFFFFF"},
	16:{"background":"#92BCEA", "font":"#000000"},
	17:{"background":"#804E49", "font":"#000000"},
	18:{"background":"#D3F9B5", "font":"#000000"},
	19:{"background":"#AAB9CF", "font":"#000000"},
	20:{"background":"#85CB33", "font":"#000000"},
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//console.log(larghezza)
//console.log(altezza)

button 				   = document.querySelector("#mega_button")

about_us			   = document.getElementById("about_us")
immagine_aggiungi	   = document.getElementById("immagine_2")
immagine_instagram     = document.getElementById("immagine_1")
medioevo_button        = document.getElementById("medioevo")
novecento_button 	   = document.getElementById("novecento")
terzo_millennio_button = document.getElementById("terzo_millennio")

buttons	 			   = document.querySelectorAll(".buttons_selezione")

container  		       = document.getElementsByClassName("container")
corpo     		       = document.getElementsByClassName("corpo")
citazione 		       = document.getElementById("citazione")
persona     		   = document.getElementById("persona")

//console.log(corpo)

const x  = String(larghezza/2) + "px"
const y  = String(altezza * 0.4-30) + "px"
const y1 = String(altezza * 0.4-30) + "px"


x_button = String(larghezza-50)+"px"
y_button = String(altezza-50)+"px"

button.style.width = x_button
button.style.height = y_button

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (larghezza < 1200){
	for (i=0; i < buttons.length; i++){
		buttons[i].style.fontSize = "150%"
	}

	immagine_instagram.style.width = "50px"
	immagine_aggiungi.style.width = "50px"
	about_us.style.width = "50px"

	for (i=0; i < corpo.length; i++){
		buttons[i].style.paddingTop = "-100px"
	}
}

citazione.style.margin = y +" 10%" + " 0"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function update(){
	console.log("hai cliccato il mega button o la barra spaziatrice")
	eliminaTutto()
	nuova_citazione()
	cambio_colore()
}

function eliminaTutto(){
	persona.textContent = ""
	citazione.textContent = ""
}

function scelta_citazione(){
	return Math.floor(Math.random()*moltiplicatore_citazioni+1)
}


function scelta_colori(){
	var indice
	indice = Math.floor(Math.random()*moltiplicatore + 1)
	return indice
}

function scelta_123(){
	let aiuto_scelta
	if (medioevo_status === true && novecento_status === true && terzo_millennio_status === true){
		return Math.floor(Math.random()*3)
		}
	else if(medioevo_status === false && novecento_status === false && terzo_millennio_status === false){
		return Math.floor(Math.random()*3)
	}
	else if(medioevo_status === true && novecento_status === true && terzo_millennio_status === false){
		return Math.floor(Math.random()*2)
	}
	else if(medioevo_status === true && terzo_millennio_status === true && novecento_status === false){
		aiuto_scelta = Math.floor(Math.random()*2)
		if (aiuto_scelta === 0){
			return 0
		}
		else if(aiuto_scelta === 1){
			return 2
		}
	}
	else if(novecento_status === true && terzo_millennio_status === true && medioevo_status === false){
		return Math.floor(Math.random()*2 + 1)
	}
	else if(medioevo_status === true && novecento_status === false && terzo_millennio_status === false){
		return 0
	}
	else if(medioevo_status === false && novecento_status === true && terzo_millennio_status === false){
		return 1
	}
	else if(medioevo_status === false && novecento_status === false && terzo_millennio_status === true){
		return 2
	}
	}

function nuova_citazione(){
	let scelta_primaria = scelta_123()
	let scelta_secondaria = scelta_citazione()
	citazione.textContent = elenco_gigante[scelta_primaria][0][scelta_secondaria]["citazione"]
	persona.textContent   = elenco_gigante[scelta_primaria][0][scelta_secondaria]["persona"]
}

function cambio_colore(){
	let indice_colore = scelta_colori()
	citazione.style.color = colori[indice_colore]["font"]
	persona.style.color = colori[indice_colore]["font"]
	document.body.style.background = colori[indice_colore]["background"]
	menu.style.background = colori[indice_colore]["background"]
	//console.log(citazione.style.color)
	
	if (citazione.style.color === "rgb(0, 0, 0)"){ 
		immagine_instagram.style.filter = "invert(0)"
		immagine_aggiungi.style.filter = "invert(0)"
		about_us.style.filter = "invert(0)"
	}
	else if(citazione.style.color === "rgb(255, 255, 255)"){
		immagine_instagram.style.filter = "invert(1)"
		immagine_aggiungi.style.filter = "invert(1)"
		about_us.style.filter = "invert(1)"
	}
	
	for (i=0; i < buttons.length;i++){
		buttons[i].style.background = colori[indice_colore]["background"]
		buttons[i].style.color = colori[indice_colore]["font"]
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOGICA DEI BUTTONS

function medioevo(){
	console.log("hai chiamato la funzione xxx")
	if (medioevo_status === false){
		medioevo_status = true
		}
	
	else if (medioevo_status === true){
		medioevo_status = false
		}

	buttons[0].blur()
	console.log("medioevo",medioevo_status)
	cambia_stile_bottoni_medioevo()
}
function novecento(){
	console.log("hai chiamato la funzione xxx")
	if (novecento_status === false){
		novecento_status = true
		}
	else if (novecento_status === true){
		novecento_status = false
		}

	buttons[1].blur()
	console.log("novecento",novecento_status)
	cambia_stile_bottoni_novecento()
}

function terzo_millennio(){
	console.log("hai chiamato la funzione xxx")
	if (terzo_millennio_status === false){
		terzo_millennio_status = true
		}
	else if (terzo_millennio_status === true){
		terzo_millennio_status = false
		}

	
	buttons[2].blur()
	console.log("terzo millennio",terzo_millennio_status)
	cambia_stile_bottoni_terzo_millennio()
}

// DEFINIZIONE DELLA GRAFICA DEI BUTTONS TRAMITE IL TRUE OR FALSE E I GRASSETTI
function cambia_stile_bottoni_terzo_millennio(){
	if (terzo_millennio_status === true){
		terzo_millennio_button.style.fontWeight = "700"
	}
	else if (terzo_millennio_status === false){
		terzo_millennio_button.style.fontWeight = "100"
	}
}
function cambia_stile_bottoni_novecento(){
	if (novecento_status === true){
		novecento_button.style.fontWeight = "700"
	}
	else if (novecento_status === false){
		novecento_button.style.fontWeight = "100"
	}
}
function cambia_stile_bottoni_medioevo(){
	if (medioevo_status === true){
		medioevo_button.style.fontWeight = "700"
	}
	else if (medioevo_status === false){
		medioevo_button.style.fontWeight = "100"
	}
}


//LANCIA IL TUTTO QUANDO SI PREME LA BARRA SPAZIATRICE
document.body.onkeyup = function(e){
    if(e.keyCode == 32 || e.key === " " ){
        update()
        }
    }
