function odliczanie() {
    var dzisiaj = new Date();

    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth() + 1;
    var rok = dzisiaj.getFullYear();

    var godzina = dzisiaj.getHours();
    if (godzina < 0) { godzina = "0" + godzina; }

    var minuta = dzisiaj.getMinutes();
    if (minuta < 0) { godzina = "0" + minuta; }

    var sekundy = dzisiaj.getSeconds();
    if (sekundy < 0) { sekundy = "0" + sekundy; }

    console.log(dzien + "/" + miesiac + "/" + rok + "  |  " + godzina + ":" + minuta + ":" + sekundy);

}

setTimeout(odliczanie(), 1000);
//odliczanie();


