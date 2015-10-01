// Módosítjuk a h1 tag tartalmát
document.querySelector( "h1" ).innerHTML=" Hello világ!";

// Kép forrásának módosítása
function changeURL(){
    document.querySelector( "img" ).src = "http://blog.snafu.de/yvi/files/2015/02/auto.gif";
}

// Stílus módosítása
function changeStyle(){
    document.querySelector( "img" ).style.width = "40px";
}

// Adatok ellenőrzése
function validate(){
    
    // Input mező és a hibaüzenet kiválasztása
    var input  = document.querySelector( ".input-validate" );
    var errorP = document.querySelector( ".no-validate" );

    // Az input mező értékének a kiolvasása
    var inputValue = input.value;

    // Az input mező értéke nagyobb legyen mint 5 és kisebb mint 21
    if (inputValue<6 || inputValue>20){
        console.log("Az érték nem megfelelő.");
        errorP.innerHTML = "Az érték nem megfelelő.";
    }else{
        errorP.innerHTML = "";
    }
    // Kiírjuk a console-ra
    console.log(inputValue);
}