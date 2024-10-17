

//Chiedi all’utente la sua email, controlla che sia 
//nella lista di chi può accedere, stampa un messaggio appropriato 
//sull’esito del controllo.

let emailList = [
    'khalil_hansen@gmail.com', 
    'constantin74@hotmail.com', 
    'letitia2@yahoo.com', 
    'hershel_kilback20@yahoo.com', 
    'vicente.goldner@yahoo.com'
]

console.log(emailList)

let emailCheck = prompt('Scrivi la tua email')

console.log(emailCheck)


if (emailCheck == emailList[0]) {

    console.log(`Benvenuto, ${emailCheck}`)

} else if (emailCheck == emailList[1]) {

    console.log(`Benvenuto, ${emailCheck}`)

} else if (emailCheck == emailList[2]) {

    console.log(`Benvenuto, ${emailCheck}`)

} else if (emailCheck == emailList[3]) {

    console.log(`Benvenuto, ${emailCheck}`)

} else if (emailCheck == emailList[4]) {

    console.log(`Benvenuto, ${emailCheck}`)

} else {

    console.log('La mail non risulta nella lista')
}