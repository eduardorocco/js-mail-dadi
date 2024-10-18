

//Chiedi all’utente la sua email, controlla che sia 
//nella lista di chi può accedere, stampa un messaggio appropriato 
//sull’esito del controllo.

const emailList = [
    'khalil_hansen@gmail.com', 
    'constantin74@hotmail.com', 
    'letitia2@yahoo.com', 
    'hershel_kilback20@yahoo.com', 
    'vicente.goldner@yahoo.com'
]

console.log(emailList)

const userEmail = prompt('Inserisci la tua email')

let emailCheck = false

for (let i = 0; i < emailList.length; i++) {

    const currentMail = emailList[i]

    if (currentMail === userEmail)  {

        emailCheck = true

        break
    }

}

console.log(emailCheck)

if (emailCheck) {

    console.log ('Hai accesso alla pagina')

} else {

    console.log ('Accesso negato')

}