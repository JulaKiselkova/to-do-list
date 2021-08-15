import {model} from "./model.js";
import {todos} from "./model.js";
import {card, creatCard, inputButton, modal} from "./templates.js";

export const view = {
    init: function(){
        root.insertAdjacentHTML('afterbegin', inputButton());
        root.insertAdjacentHTML('beforeend', modal());
    },
    openModal: function(modal){
        modal.classList.remove('hidden');
    },
    closeModal: function(modal){
        modal.classList.add('hidden');
    },
    render: function(root){
        for(let obj of todos){
            root.insertAdjacentHTML('beforeend', сard(obj));
        }
    },
}
