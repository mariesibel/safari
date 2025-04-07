//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";

const GaaTil = (maal) => {
    document.body.innerHTML = "";
    removeAll();
    maal();
}

const Start = (maal) => {
    if (window.location.hash) {
        maal = window.location.hash.replace("#", "")
        eval(maal)();
    } else {
        GaaTil(maal);
    }
}
//#endregion

Start(forside);

const sebraUtfordringer = [utfordring15, utfordring16, utfordring17]
const løveUtfordringer = [utfordring1, utfordring2, utfordring3, utfordring4, utfordring5]
const pingvinUtfordringer = [utfordring18, utfordring19, utfordring20]
const sjiraffUtfordringer = [utfordring6, utfordring7, utfordring8, utfordring9]
const slangeUtfordringer = [utfordring10, utfordring11, utfordring12, utfordring13, utfordring14]

function visSebra() {
    const tilfeldigTall = Math.floor(Math.random() * sebraUtfordringer.length)
    const valgtScene = sebraUtfordringer[tilfeldigTall];
    //linja under fjerner den valgte utfordringern fra lista

    if (sebraUtfordringer.length === 0) {
        GaaTil(velgEtAnnetDyr)
    } else {
        GaaTil(valgtScene);
    }
    sebraUtfordringer.splice(tilfeldigTall, 1);

}

function visLøve() {
    const tilfeldigTall = Math.floor(Math.random() * løveUtfordringer.length)
    const valgtScene = løveUtfordringer[tilfeldigTall]

    if (løveUtfordringer.length === 0) {
        GaaTil(velgEtAnnetDyr)
    } else {
        GaaTil(valgtScene);
    }
    løveUtfordringer.splice(tilfeldigTall, 1);

}

function visPingvin() {
    const tilfeldigTall = Math.floor(Math.random() * pingvinUtfordringer.length)
    const valgtScene = pingvinUtfordringer[tilfeldigTall];

    if (pingvinUtfordringer.length === 0) {
        GaaTil(velgEtAnnetDyr);
    } else {
        GaaTil(valgtScene);
    }
    pingvinUtfordringer.splice(tilfeldigTall, 1);

}

function visSjiraff() {
    const tilfeldigTall = Math.floor(Math.random() * sjiraffUtfordringer.length)
    const valgtScene = sjiraffUtfordringer[tilfeldigTall]

    if (sjiraffUtfordringer.length === 0) {
        GaaTil(velgEtAnnetDyr)
    } else {
        GaaTil(valgtScene);
    }
    sjiraffUtfordringer.splice(tilfeldigTall, 1);

}

function visSlange() {
    const tilfeldigTall = Math.floor(Math.random() * slangeUtfordringer.length)
    const valgtScene = slangeUtfordringer[tilfeldigTall]

    if (slangeUtfordringer.length === 0) {
        GaaTil(velgEtAnnetDyr)
    } else {
        GaaTil(valgtScene);
    }
    slangeUtfordringer.splice(tilfeldigTall, 1);

}

function velgEtAnnetDyr() {
    bakgrunnsbilde();
    new Blocks.Text("Gratulerer du har fullført alle utfordringene. Velg et annet dyr!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}

// Disse scenene er her som eksempler. Du kan ta dem bort eller endre dem.

function bakgrunnsbilde() {
    //tegn bakgrunnsbilde her
    new Blocks.Image("bilder/bakgrunnsbilde.png", { x: 0, y: 0, width: 1080, height: 810 });

}

function forside() {

    //bakgrunnsbilde må inn her
    //bakgrunnsbildet må være like stort som en Ipad
    //bruk funksjonen bakgrunnsbilde

    bakgrunnsbilde();

    const sebra = new Blocks.Image("bilder/sebra.png", { x: 160, y: 100, width: 200, height: 250 });
    Actions.Click(sebra, () => {
        visSebra();
    })

    const løve = new Blocks.Image("bilder/løve.png", { x: 440, y: 100, width: 200, height: 250 });
    Actions.Click(løve, () => {
        visLøve();
    })

    const pingvin = new Blocks.Image("bilder/pingvin.png", { x: 720, y: 100, width: 200, height: 250 });
    Actions.Click(pingvin, () => {
        visPingvin();
    })

    const sjiraff = new Blocks.Image("bilder/sjiraff.png", { x: 300, y: 400, width: 200, height: 250 });
    Actions.Click(sjiraff, () => {
        visSjiraff();
    })

    const slange = new Blocks.Image("bilder/slange.png", { x: 580, y: 400, width: 200, height: 250 });
    Actions.Click(slange, () => {
        visSlange();
    })

}


function utfordring1() {
    bakgrunnsbilde();
    new Blocks.Text("Brøl som en løve!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/løve.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring2() {
    bakgrunnsbilde();
    new Blocks.Text("Snik deg som en løve gjennom gresset, uten å lage lyd!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/løve.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring3() {
    bakgrunnsbilde();
    new Blocks.Text("Finn tre ting i rommet med lik farge som løvens pels!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/løve.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring4() {
    bakgrunnsbilde();
    new Blocks.Text("Gå i flokk som løver!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/løve.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring5() {
    bakgrunnsbilde();
    new Blocks.Text("Klarer du å ta 5 lange steg? Dette er like langt som en løve hopper!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/løve.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring6() {
    bakgrunnsbilde();
    new Blocks.Text("Strekk deg så langt du kan! Blir du like lang som en sjiraff!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/sjiraff.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring7() {
    bakgrunnsbilde();
    new Blocks.Text("Finn fem ting rundt deg som er høyere enn deg selv!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/sjiraff.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring8() {
    bakgrunnsbilde();
    new Blocks.Text("Finn en venn og stå rygg mot rygg. Hvem er høyest?!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/sjiraff.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring9() {
    bakgrunnsbilde();
    new Blocks.Text("Klarer du å strekke ut tunga like langt som en sjiraff?", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/sjiraff.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring10() {
    bakgrunnsbilde();
    new Blocks.Text("Kryp som en slange over gulvet, uten å bruke hendene!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/slange.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring11() {
    bakgrunnsbilde();
    new Blocks.Text("Lag samme lyd som slangen mens du står på et bein!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/slange.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring12() {
    bakgrunnsbilde();
    new Blocks.Text("Finn tre ting som rimer på slange!", { style: "overskrift2", x: 440, y: 200, width: 300, height: 200 });
    const img1 = new Blocks.Image("bilder/slange.png", { x: 577, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring13() {
    bakgrunnsbilde();
    new Blocks.Text("Fullfør setningen: Det var en gang en slange som...", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/slange.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring14() {
    bakgrunnsbilde();
    new Blocks.Text("Kan du nevne tre ting en slange kan spise?", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/slange.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring15() {
    bakgrunnsbilde();
    new Blocks.Text("Galloper som en sebra med armer og bein!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/sebra.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring16() {
    bakgrunnsbilde();
    new Blocks.Text("Kommer du på noen andre dyr som også er stripete som sebraen?", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/sebra.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring17() {
    bakgrunnsbilde();
    new Blocks.Text("Rop sebra når du ser noen i rommet som har svart eller hvit på seg!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/sebra.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring18() {
    bakgrunnsbilde();
    new Blocks.Text("Gå som en pingvin rundt i rommet!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/pingvin.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring19() {
    bakgrunnsbilde();
    new Blocks.Text("Dans slik du tror en pingvin ville danset!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/pingvin.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}


function utfordring20() {
    bakgrunnsbilde();
    new Blocks.Text("Pingvinen er sulten hopp ned fra benken for å fange fisk!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/pingvin.png", { x: 477, y: 100, width: 125, height: 150 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forside);
    })
}
