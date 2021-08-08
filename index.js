const root = document.querySelector('#root');

let todos = [
    {
        title: 'Drink',
        text: 'I need to drink',
        time: '15:00',
    },

    {
        title: 'Eat',
        text: 'I need to eat',
        time: '15:00',
    }
]

function creatCard(obj) {
    const card = document.createElement('div');
    const cardTitle = document.createElement('h2');
    const cardText = document.createElement('p');
    const cardTime = document.createElement('p');
    const cardBtnContainer = document.createElement('div');
    const cardBtnDone = document.createElement('link'); // тут для каждой ссылки свою константу или для двух кнопок где раздичается контент можно одну переменную
    const cardBtnDelete = document.createElement('link');

    card.className = 'w-1/4 border-4 border-blue-200 mb-4 rounded-2xl bg-gradient-to-r from-green-200 to-blue-200';
    root.className = 'flex items-center justify-center bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-col';
    cardBtnDone.className = 'inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white cursor-pointer hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm transition duration-500 ease-in-out bg-blue-600 hover:bg-green-500 transform hover:-translate-y-1 hover:scale-110 mb-5'
    cardBtnDelete.className = 'inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white cursor-pointer hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm transition duration-500 ease-in-out bg-blue-600 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 mb-5'
    
    cardTitle.className = 'text-lg leading-6 font-medium text-gray-900 mt-5 text-2xl ml-6' 
    cardBtnContainer.className = 'my-5'
    cardText.className = 'mt-2 text-lg ml-6'
    cardTime.className = 'mt-2 text-lg ml-6'

    cardTitle.textContent = obj.title;
    cardText.textContent = obj.text;
    cardTime.textContent = obj.time;
    cardBtnDone.textContent = 'Done';
    cardBtnDelete.textContent = 'Delete';

    card.append(cardTitle, cardText, cardTime, cardBtnContainer, cardBtnDone, cardBtnDelete);
    root.append(card);
}

function setInput() {
    const cardTitle = document.createElement('h2');
    const cardText = document.createElement('p');
    const cardTime = document.createElement('p');

    let obj = {};


    obj.title = prompt('Введите заголовок');
    obj.text = prompt('Введите текст');
    obj.time = prompt('Введите время');
    
    if (obj.title === null || obj.text === null || obj.time === null) {
        return;
    } else {
        todos.push(obj);
        creatCard(todos[todos.length - 1]);
    }
}

for( let obj of todos ) {
    creatCard(obj);
}

const buttonNewCard = document.createElement('link');
root.append(buttonNewCard);
buttonNewCard.className = 'w-1/4 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 cursor-pointer mb-4'
buttonNewCard.textContent = 'Add new task';

buttonNewCard.onclick = setInput;

//setInput();