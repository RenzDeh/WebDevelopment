const setup = () => {
   let prog1 = document.getElementById("prog1button");
   let prog2 = document.getElementById("prog2button");
   prog1.addEventListener("click", programma1);
   prog2.addEventListener("click", programma2);
}

const programma1 = () => {
   /*let student1={};
    student1.voornaam = "Renz";
    student1.familienaam = "Deheegher";
    student1.geboortedatum = new Date(2003,3,18);*/

   let student={
      voornaam : "Renz",
      familienaam : "Deheegher",
      geboorteDatum : new Date("2003-03-18"),
      adres : { // een object
         straat : "Kerkstraat 13",
         postcode : "8500",
         gemeente : "Kortrijk"
      },
      isIngeschreven : true,
      namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo"], // een array
      aantalAutos : 2
   }


   let tekst = JSON.stringify(student);
   console.log(tekst);
}

const programma2 = () => {
   let student = '{"voornaam":"Renz","familienaam":"Deheegher","geboorteDatum":"2003-03-18T00:00:00.000Z","adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}'
   let json = JSON.parse(student);
   console.log(json.voornaam + " " + json.familienaam);
}
window.addEventListener("load", setup);