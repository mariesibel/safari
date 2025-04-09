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

Start(startside);

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

    const lyd = new Blocks.Sound("lyder/gratulerer.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}

// Disse scenene er her som eksempler. Du kan ta dem bort eller endre dem.

function bakgrunnsbilde() {
    //tegn bakgrunnsbilde her
    new Blocks.Image("bilder/bakgrunnsbilde.png", { x: 0, y: 0, width: 1080, height: 810 });

}

function startside() {
    bakgrunnsbilde();

    const logo = new Blocks.Image("bilder/logoNy.png", { x: 290, y: 75, width: 500, height: 500 });

    const startknapp = new Blocks.Image("bilder/startknapp.png", { x: 440, y: 600, width: 200, height: 100 });

    Actions.Click(startknapp, () => {
        GaaTil(valgside);
    })

}

function valgside() {
    bakgrunnsbilde();

    const historie = new Blocks.Image("bilder/historie.png", { x: 140, y: 330, width: 350, height: 200 });
    Actions.Click(historie, () => {
        GaaTil(historieside);
    })

    const utfordringer = new Blocks.Image("bilder/utfordringer.png", { x: 590, y: 330, width: 350, height: 200 });
    Actions.Click(utfordringer, () => {
        GaaTil(forsideDyr);
    })
}


function historieside() {
    bakgrunnsbilde();

    const zoo = new Blocks.Image("bilder/zoo.png", { x: 165, y: 50, width: 750, height: 525 });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });

    const lyd = new Blocks.Sound("lyder/historie.m4a", { loop: false, auto: true });

    Actions.Click(tilbake, () => {
        GaaTil(valgside);
    })
}

function forsideDyr() {

    //bakgrunnsbilde må inn her
    //bakgrunnsbildet må være like stort som en Ipad
    //bruk funksjonen bakgrunnsbilde

    bakgrunnsbilde();

    const sebra = new Blocks.Image("bilder/sebra.png", { x: 160, y: 50, width: 225, height: 290 });
    Actions.Click(sebra, () => {
        visSebra();
    })

    const løve = new Blocks.Image("bilder/løve.png", { x: 440, y: 50, width: 225, height: 285 });
    Actions.Click(løve, () => {
        visLøve();
    })

    const pingvin = new Blocks.Image("bilder/pingvin.png", { x: 720, y: 50, width: 225, height: 300 });
    Actions.Click(pingvin, () => {
        visPingvin();
    })

    const sjiraff = new Blocks.Image("bilder/sjiraff.png", { x: 300, y: 335, width: 225, height: 290 });
    Actions.Click(sjiraff, () => {
        visSjiraff();
    })

    const slange = new Blocks.Image("bilder/slange.png", { x: 560, y: 335, width: 225, height: 325 });
    Actions.Click(slange, () => {
        visSlange();
    })


    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });

    Actions.Click(tilbake, () => {
        GaaTil(valgside);
    })
}


function utfordring1() {
    bakgrunnsbilde();
    new Blocks.Text("Brøl som en løve!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/løve.png", { x: 477, y: 100, width: 125, height: 150 });
    //---------------
    const lyd = new Blocks.Sound("lyder/en.m4a", { loop: false, auto: true });
    //----------------
    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring2() {
    bakgrunnsbilde();
    new Blocks.Text("Snik deg som en løve gjennom gresset, uten å lage lyd!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/løve.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/to.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring3() {
    bakgrunnsbilde();
    new Blocks.Text("Finn tre ting i rommet med lik farge som løvens pels!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/løve.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/tre.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring4() {
    bakgrunnsbilde();
    new Blocks.Text("Gå i flokk som løver!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/løve.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/fire.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });



    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring5() {
    bakgrunnsbilde();
    new Blocks.Text("Klarer du å ta 5 lange steg? Dette er like langt som en løve hopper!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/løve.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/fem.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring6() {
    bakgrunnsbilde();
    new Blocks.Text("Strekk deg så langt du kan! Blir du like lang som en sjiraff!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/sjiraff.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/seks.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring7() {
    bakgrunnsbilde();
    new Blocks.Text("Finn fem ting rundt deg som er høyere enn deg selv!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/sjiraff.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/syv.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring8() {
    bakgrunnsbilde();
    new Blocks.Text("Finn en venn og stå rygg mot rygg. Hvem er høyest?!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/sjiraff.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/åtte.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring9() {
    bakgrunnsbilde();
    new Blocks.Text("Klarer du å strekke ut tunga like langt som en sjiraff?", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/sjiraff.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/ni.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring10() {
    bakgrunnsbilde();
    new Blocks.Text("Kryp som en slange over gulvet, uten å bruke hendene!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/slange.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/ti.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring11() {
    bakgrunnsbilde();
    new Blocks.Text("Lag samme lyd som slangen mens du står på et bein!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/slange.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/elleve.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring12() {
    bakgrunnsbilde();
    new Blocks.Text("Finn tre ting som rimer på slange!", { style: "overskrift2", x: 440, y: 300, width: 300, height: 200 });
    const img1 = new Blocks.Image("bilder/slange.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/tolv.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring13() {
    bakgrunnsbilde();
    new Blocks.Text("Fullfør setningen: Det var en gang en slange som...", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/slange.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/tretten.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring14() {
    bakgrunnsbilde();
    new Blocks.Text("Kan du nevne tre ting en slange kan spise?", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/slange.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/fjorten.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring15() {
    bakgrunnsbilde();
    new Blocks.Text("Galloper som en sebra med armer og bein!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/sebra.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/femten.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring16() {
    bakgrunnsbilde();
    new Blocks.Text("Kommer du på noen andre dyr som også er stripete som sebraen?", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/sebra.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/seksten.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring17() {
    bakgrunnsbilde();
    new Blocks.Text("Rop sebra når du ser noen i rommet som har svart eller hvit på seg!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/sebra.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/sytten.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring18() {
    bakgrunnsbilde();
    new Blocks.Text("Gå som en pingvin rundt i rommet!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/pingvin.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/atten.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring19() {
    bakgrunnsbilde();
    new Blocks.Text("Dans slik du tror en pingvin ville danset!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/pingvin.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/nitten.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}


function utfordring20() {
    bakgrunnsbilde();
    new Blocks.Text("Pingvinen er sulten hopp ned fra benken for å fange fisk!", { style: "overskrift2", x: 440, y: 300, width: 200, height: 200 });
    const img1 = new Blocks.Image("bilder/pingvin.png", { x: 477, y: 100, width: 125, height: 150 });

    const lyd = new Blocks.Sound("lyder/tjue.m4a", { loop: false, auto: true });

    const tilbake = new Blocks.Image("bilder/tilbake.png", { x: 465, y: 600, width: 150, height: 110 });


    Actions.Click(tilbake, () => {
        GaaTil(forsideDyr);
    })
}
