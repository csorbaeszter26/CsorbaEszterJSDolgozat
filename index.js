import { MACSKAK } from "./adatok.js";
import { szoveges } from "./fuggveny.js";


const szovegki = document.querySelector(".tartalom");
szovegki.innerHTML = szoveges(MACSKAK);

szoveges();


import { hatterszin } from "./fuggveny.js";
import { listaba } from "./fuggveny.js";


hatterszin();

listaba();
