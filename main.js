// Creare array cognomi

var cognomi = ["Baglio","Storti","Poretti","Brazorf","Cecconi"];

//Chiedere all'utente di inserire il suo cognome

var cognome = prompt("INSERISCI IL TUO COGNOME( Iniziale maiuscola ): ");

cognomi.push(cognome);

console.log(cognomi);


//Ordinare alfabeticamente e stampare

cognomi.sort();

document.getElementById("titolo").innerHTML= "Cognomi ordinati alfabeticamente: "
document.getElementById("lista").innerHTML+="<li>"+ cognomi[0] +"</li>";
document.getElementById("lista").innerHTML+="<li>"+ cognomi[1] +"</li>";
document.getElementById("lista").innerHTML+="<li>"+ cognomi[2] +"</li>";
document.getElementById("lista").innerHTML+="<li>"+ cognomi[3] +"</li>";
document.getElementById("lista").innerHTML+="<li>"+ cognomi[4] +"</li>";
document.getElementById("lista").innerHTML+="<li>"+ cognomi[5] +"</li>";

var posizione = cognomi.indexOf(cognome);
document.getElementById("position").innerHTML+= posizione + 1;
console.log(posizione + 1);

