//vars
const root = document.querySelector('#root');
let inputBtn = document.querySelector('#inputButton');
let modalWindow = document.querySelector('#modal');

import {card, modal, inputButton, creatCard} from "./templates.js";
import {view} from "./view.js";
import {model, todos} from "./model.js";
import {controller} from "./controller.js";

function app() {
    view.init(root);
    model.get();
    view.render(root);
}

app();