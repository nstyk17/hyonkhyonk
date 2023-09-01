
//sets the values of the character stats
var lvl = 5;

var profmod = 3;

var strmod = 0;
var dexmod = 0;
var conmod = 0;
var wismod = 0;
var intmod = 0;
var chamod = 0;


//runs when the page first loads up
function firstLoad(){
	
	setStats();
	//has the actions tab be open by default in the infobox
	document.getElementById("defaultOpenInfo").click();
}

function setStats(){

	//setting char lvl
	document.getElementById("lvl").innerHTML = lvl;

	//setting profieciency mod
	document.getElementById("profbonus").innerHTML = profmod;

	//setting char main stats
	document.getElementById("str").innerHTML = strmod;
	document.getElementById("dex").innerHTML = dexmod;
	document.getElementById("con").innerHTML = conmod;
	document.getElementById("wis").innerHTML = wismod;
	document.getElementById("int").innerHTML = intmod;
	document.getElementById("cha").innerHTML = chamod;

	//setting the modular stats
	updateStats();
}

function updateStats(){

	//setting saving throws
	if (document.getElementById('strength').checked){
		document.getElementById("strsvt").innerHTML = strmod + profmod;	

	}else{
		document.getElementById("strsvt").innerHTML = strmod;		
	}

	if (document.getElementById('dexterity').checked){
		document.getElementById("dexsvt").innerHTML = dexmod + profmod;	

	}else{
		document.getElementById("dexsvt").innerHTML = dexmod;		
	}

	if (document.getElementById('constitution').checked){
		document.getElementById("consvt").innerHTML = conmod + profmod;	

	}else{
		document.getElementById("consvt").innerHTML = conmod;		
	}

	if (document.getElementById('wisdom').checked){
		document.getElementById("wissvt").innerHTML = wismod + profmod;	

	}else{
		document.getElementById("wissvt").innerHTML = wismod;		
	}

	if (document.getElementById('intelligence').checked){
		document.getElementById("intsvt").innerHTML = intmod + profmod;	

	}else{
		document.getElementById("intsvt").innerHTML = intmod;		
	}

	if (document.getElementById('charisma').checked){
		document.getElementById("chasvt").innerHTML = chamod + profmod;	

	}else{
		document.getElementById("chasvt").innerHTML = chamod;		
	}


	//setting skill stats AAAAAAAAAAAAAAAAAA

	if (document.getElementById('acrobatics').checked){
		document.getElementById("acrobaticsb").innerHTML = dexmod + profmod;	

	}else{
		document.getElementById("acrobaticsb").innerHTML = dexmod;		
	}

	if (document.getElementById('animalhandling').checked){
		document.getElementById("animalhandlingb").innerHTML = wismod + profmod;	

	}else{
		document.getElementById("animalhandlingb").innerHTML = wismod;		
	}

	if (document.getElementById('arcana').checked){
		document.getElementById("arcanab").innerHTML = intmod + profmod;	

	}else{
		document.getElementById("arcanab").innerHTML = intmod;		
	}

	if (document.getElementById('athletics').checked){
		document.getElementById("athleticsb").innerHTML = strmod + profmod;	

	}else{
		document.getElementById("athleticsb").innerHTML = strmod;		
	}

	if (document.getElementById('deception').checked){
		document.getElementById("deceptionb").innerHTML = chamod + profmod;	

	}else{
		document.getElementById("deceptionb").innerHTML = chamod;		
	}

	if (document.getElementById('history').checked){
		document.getElementById("historyb").innerHTML = intmod + profmod;	

	}else{
		document.getElementById("historyb").innerHTML = intmod;		
	}

	if (document.getElementById('insight').checked){
		document.getElementById("insightb").innerHTML = wismod + profmod;	

	}else{
		document.getElementById("insightb").innerHTML = wismod;		
	}

	if (document.getElementById('intimidation').checked){
		document.getElementById("intimidationb").innerHTML = chamod + profmod;	

	}else{
		document.getElementById("intimidationb").innerHTML = chamod;		
	}

	if (document.getElementById('investigation').checked){
		document.getElementById("investigationb").innerHTML = intmod + profmod;	

	}else{
		document.getElementById("investigationb").innerHTML = intmod;		
	}

	if (document.getElementById('medicine').checked){
		document.getElementById("medicineb").innerHTML = wismod + profmod;	

	}else{
		document.getElementById("medicineb").innerHTML = wismod;		
	}

	if (document.getElementById('nature').checked){
		document.getElementById("natureb").innerHTML = intmod + profmod;	

	}else{
		document.getElementById("natureb").innerHTML = intmod;		
	}

	if (document.getElementById('perception').checked){
		document.getElementById("perceptionb").innerHTML = wismod + profmod;	

	}else{
		document.getElementById("perceptionb").innerHTML = wismod;		
	}

	if (document.getElementById('performance').checked){
		document.getElementById("performanceb").innerHTML = chamod + profmod;	

	}else{
		document.getElementById("performanceb").innerHTML = chamod;		
	}

	if (document.getElementById('persuasion').checked){
		document.getElementById("persuasionb").innerHTML = chamod + profmod;	

	}else{
		document.getElementById("persuasionb").innerHTML = chamod;		
	}

	if (document.getElementById('sleightofhand').checked){
		document.getElementById("sleightofhandb").innerHTML = dexmod + profmod;	

	}else{
		document.getElementById("sleightofhandb").innerHTML = dexmod;		
	}


	if (document.getElementById('religion').checked){
		document.getElementById("religionb").innerHTML = dexmod + profmod;	

	}else{
		document.getElementById("religionb").innerHTML = dexmod;		
	}

	if (document.getElementById('stealth').checked){
		document.getElementById("stealthb").innerHTML = dexmod + profmod;	

	}else{
		document.getElementById("stealthb").innerHTML = dexmod;		
	}

	if (document.getElementById('survival').checked){
		document.getElementById("survivalb").innerHTML = wismod + profmod;	

	}else{
		document.getElementById("survivalb").innerHTML = wismod;		
	}

}


function rollBaybee(){

	alert("Welcome to GeeksforGeeks.\n " +
            "It is the best portal for computer" +
                    "science enthusiasts!");
}


//The tabs for the info box (Actions, Features, Equipment, etc...)
function openInfo(evt, infoN) {
  var i, tabcontent, infolinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  infolinks = document.getElementsByClassName("infolinks");
  for (i = 0; i < infolinks.length; i++) {
    infolinks[i].className = infolinks[i].className.replace(" active", "");
  }
  document.getElementById(infoN).style.display = "block";
  evt.currentTarget.className += " active";
}

