export const model = {
    data: [],
    get: function(){
        if(localStorage.length){
            data = JSON.parse(localStorage.getItem('todos'))
        }
    },
    set: function(obj){
        model.data.push(obj)
    },
};

export let todos = [
    {
        title: 'Drink',
        text: 'I need to drink',
        time: '15:00',
        isDone: true,
        id: '0'
    },

    {
        title: 'Eat',
        text: 'I need to eat',
        time: '15:00',
        isDone: false,
        id: '1'
    }
]