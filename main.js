// Creare array cognomi

var cognomi = ["Baglio","Storti","Poretti","Brazorf","Cecconi"];

//Chiedere all'utente di inserire il suo cognome

var cognome = prompt("INSERISCI IL TUO COGNOME( Iniziale maiuscola ): ");

cognomi.push(cognome);

console.log(cognomi);


//Ordinare alfabeticamente con sort()

/* cognomi.sort(); */

//Ordinare alfabeticamente usando un ciclo (da capire come funziona)

/* var i = 0, j; 
    while (i < cognomi.length) { 
        j = i + 1; 
        while (j < cognomi.length) { 
            if (cognomi[j] < cognomi[i]) { 
                var temp = cognomi[i]; 
                cognomi[i] = cognomi[j]; 
                cognomi[j] = temp; 
            } 
            j++; 
        } 
        i++; 
    }
 */

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

