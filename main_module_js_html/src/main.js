
    let nameArray = [];

    function printNavn() {
    const navn = document.getElementById("navn_boks").value;
    const etternavn = document.getElementById("etternavn_boks").value;
    const telefon = document.getElementById("telefon_boks").value;
    const epost = document.getElementById("epost_boks").value;



    //navn//
    if (navn === "") {
    document.getElementById("navn_test").innerText="Ugyldig navn";

} else {
    document.getElementById("navn_test").innerText = ""; // Clear validation message if name is not empty
}

    //Etternavn//
    if (etternavn === "") {
    document.getElementById("etternavn_test").innerText="Ugyldig etternavn";
}
    else {
    document.getElementById("etternavn_test").innerText = ""; // Clear validation message if name is not empty
}

    //telefon//
    if (telefon === "") {
    document.getElementById("telefon_test").innerText="Ugyldig telefonnummer";
}
    else if (!/^\d{8}$/.test(telefon)) {
    document.getElementById("telefon_test").innerText="Telefonnummeret må være 8 siffer";
    return;
}
    else {
    document.getElementById("telefon_test").innerText = "";
}

    //epost//
    if (epost === "") {
    document.getElementById("epost_test").innerText="Ugyldig epost";
}
    else {
    document.getElementById("epost_test").innerText = "";
}

    if (navn === "" || etternavn === "" || telefon === "" || epost === "") {
    return;
}

    // Array verdier//
    nameArray.push({ navn: navn, etternavn: etternavn, telefon: telefon, epost: epost });

    document.getElementById("navn_boks").value = "";
    document.getElementById("etternavn_boks").value = "";
    document.getElementById("telefon_boks").value = "";
    document.getElementById("epost_boks").value = "";

    // Array liste //
    let Arrayliste = "\n";
    for (const person of nameArray) {
    Arrayliste += person.navn + " " + person.etternavn + " "+ person.telefon + " " +person.epost + "\n";
}
    document.getElementById("superdiv").innerText = Arrayliste;
}
    function fjernNavn() {
    nameArray = []; // Empty the array
    document.getElementById("superdiv").innerText = "";
    //
}

/* 0.) input med forskjellige input-valideringer per felt.
1.) Trykk kjøp billett
* 2.) lagre billetten som obj. i et arrray
*3.) list ut billetten under "Alle billetter" - knappen
*4.) Blam ut input-felt for nye billetter
*  5.) Slett array (blank) med "slett alle billettene" - knappen
* */


/* en input-box trenger en label ellers feilmelding i IntelliJ-->
<!--<input type="text" onChange="visNavn()" id="fornavner"/>-->
<!--function visNavn(){-->
    <!--const navneliste-->
<!--}
<!--<button onClick="visMelding()">Vis melding</button>-->*/
