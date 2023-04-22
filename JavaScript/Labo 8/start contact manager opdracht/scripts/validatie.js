// Dit is dezelfde valideringscode als in de form opgave.// Verwijderde functionaliteit :// - load event listener// - proficiat popupconst valideer = () => {    if (!valideerVoornaam() || !valideerFamilienaam() || !valideerGeboorteDatum() || !valideerEmail() || !valideerAantalKinderen()) {        return false;    } else {        return true;    }}const valideerVoornaam = () => {    let txtVoornaam = document.getElementById("txtVoornaam");    let voornaam = txtVoornaam.value.trim();    if (voornaam.length > 30) {        reportError(txtVoornaam, "max. 30 karakters");        return false;    } else {        clearError(txtVoornaam);        return true;    }};const valideerFamilienaam = () => {    let txtFamilienaam = document.getElementById("txtFamilienaam");    let familienaam = txtFamilienaam.value.trim();    if (familienaam.length == 0) {        reportError(txtFamilienaam, "verplicht veld");        return false;    } else if (familienaam.length > 50) {        reportError(txtFamilienaam, "max. 50 karakters");        return false;    } else {        clearError(txtFamilienaam);        return true;    }};const valideerGeboorteDatum = () => {    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");    let geboorteDatum = txtGeboorteDatum.value.trim();    // correcte lengte?    if (geboorteDatum.length != 10) {        reportError(txtGeboorteDatum, "verplicht veld");        return false;    } else {        let formatCorrect = true;        // streepjes op juiste plaats?        if (formatCorrect && !(geboorteDatum.charAt(4) == '-' && geboorteDatum.charAt(7) == '-')) {            formatCorrect = false;        }        // jaar gedeelte een getal?        if (formatCorrect) {            // year            let yearText = geboorteDatum.substring(0, 4);            if (!isPositiveNonZeroNumber(yearText)) {                formatCorrect = false;            }        }        // maand gedeelte een getal?        if (formatCorrect) {            // month            let monthText = geboorteDatum.substring(5, 7);            if (!isPositiveNonZeroNumber(monthText)) {                formatCorrect = false;            }        }        // dag gedeelte een getal?        if (formatCorrect) {            // day            let dayText = geboorteDatum.substring(8, 11);            if (!isPositiveNonZeroNumber(dayText)) {                formatCorrect = false;            }        }        if (formatCorrect) {            clearError(txtGeboorteDatum);            return true;        } else {            reportError(txtGeboorteDatum, "formaat is niet jjjj-mm-dd");            return false;        }    }};const valideerEmail = () => {    let txtEmail = document.getElementById("txtEmail");    let email = txtEmail.value.trim();    if (email.length == 0) {        reportError(txtEmail, "verplicht veld");        return false;    } else {        let formatCorrect = true;        let idx = email.indexOf("@");        if (idx < 1 || idx == email.length - 1) {            // @ teken komt niet voor, of helemaal vooraan of helemaal achteraan de tekst            formatCorrect = false;        }        idx = email.indexOf("@", idx + 1);        if (formatCorrect && idx != -1) {            // @-teken komt meermaals voor            formatCorrect = false;        }        if (formatCorrect) {            clearError(txtEmail);            return true;        } else {            reportError(txtEmail, "geen geldig email adres");            return false;        }    }};const valideerAantalKinderen = () => {    let txtAantalKinderen = document.getElementById("txtAantalKinderen");    let aantalKinderenText = txtAantalKinderen.value.trim();    if (aantalKinderenText.length == 0) {        reportError(txtAantalKinderen, "verplicht veld");        return false;    } else if (!isPositiveNumber(aantalKinderenText)) {        reportError(txtAantalKinderen, "is geen positief getal");        return false;    } else {        let aantal = parseInt(aantalKinderenText);        if (aantal >= 99) {            reportError(txtAantalKinderen, "te vruchtbaar");            return false;        } else {            clearError(txtAantalKinderen);            return true;        }    }};const isPositiveNumber = (text) => {    let number = parseInt(text, 10);    return !isNaN(number) && number >= 0;    // merk op dat een tekst als "34m" ook aanvaard wordt, wat eigenlijk niet de bedoeling is    // een betere oplossing zou bv. een reguliere expressie gebruiken};const isPositiveNonZeroNumber = (text) => {    let number = parseInt(text, 10);    return !isNaN(number) && number > 0;    // merk op dat een tekst als "34m" ook aanvaard wordt, wat eigenlijk niet de bedoeling is    // een betere oplossing zou bv. een reguliere expressie gebruiken};const reportError = (element, message) => {    let elementId = element.getAttribute("id"); // bv. txtVoornaam    let errElementId = "err" + elementId.substring(3, elementId.length); // bv. errVoornaam    let errElement = document.getElementById(errElementId);    element.className = "invalid";    errElement.innerHTML = message;};const clearError = (element) => {    let elementId = element.getAttribute("id"); // bv. txtVoornaam    let errElementId = "err" + elementId.substring(3, elementId.length); // bv. errVoornaam    let errElement = document.getElementById(errElementId);    element.className = "";    errElement.innerHTML = "";};const clearAllErrors = () => {    let fieldIds = ["txtVoornaam", "txtFamilienaam", "txtGeboorteDatum", "txtEmail", "txtAantalKinderen"];    for (let i = 0; i < fieldIds.length; i++) {        clearError(document.getElementById(fieldIds[i]));    }}