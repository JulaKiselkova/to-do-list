//imports
import {card, modal, inputButton} from "./templates.js";
import {view} from "./view.js";
import {model, todos} from "./model.js";
import {controller} from "./controller.js";

//DOM-elements
const root = document.querySelector('#root');
let inputBtn = document.querySelector('#inputButton');
let modalWindow = document.querySelector('#modal');

//app
function app() {
    root.className = "grid justify-items-center";
    view.init(root);
    model.get();
    view.render(root);
}

app();