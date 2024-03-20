import { MACSKAK } from "./adatok.js";


export function szoveges(MACSKAK){
    let txt = "";
    txt += "<ul>";
    for (let index = 0; index < MACSKAK.length; index++) {
        txt += `<li>${MACSKAK[index].nev}, ${MACSKAK[index].szor}, ${MACSKAK[index].kor}</li>`     
    }
    txt += "</ul>";
    return txt;

    
}
szoveges(MACSKAK);


export function hatterszin(MACSKAK){
    const folevisz = document.querySelector(".tartalom");

    for (let index = 0; index < folevisz.length; index++) {
        folevisz[index].addEventListener('mouseover', function(event){
            event.target.closest("li").classList.add(".kiv");
            
        })
        
    }

}
hatterszin(MACSKAK);

const kivalasztottak = [];

export function listaba(MACSKAK){
    const kattElem = document.querySelector(".tartalom");
    
    for (let index = 0; index < kattElem.length; index++) {
        kattElem[index].addEventListener('click', function(event){
            

            if (kivalasztottak.indexOf(MACSKAK[index].nev) == -1){
                kivalasztottak.push(MACSKAK[index].nev)
            }

            const elem = document.querySelector(".kivalasztott");
            elem.innerHTML = kivalasztottak;
    })


}
}

listaba(MACSKAK);


