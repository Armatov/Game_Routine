var search_button =document.getElementById("button_search");

function Show_field(x){
    var visi = x.style.visibility;
    if (visi == 'hidden'){
        x.style.visibility = 'visible';
    }
    else{
        x.style.visibility = 'hidden';
    }
}

//User_room
const add_button = document.querySelector('.add_goals_button');
var inputValue = document.querySelector('.add_goals');
const container = document.querySelector('.container');

class goal{
    constructor(goalName){
        //Create the goal div

        this.createDiv(goalName);
    }

    createDiv(goalName){
        let input = document.createElement('add_goals');
        input.value = goalName;
        input.disabled = true;
        input.classList.add('goal_edit');
        input.type = 'text';

        let goal_box = document.createElement('div');
        goal_box.classList.add('goal');

        let editButton = document.createElement('button');
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');

        container.appendChild(goal_box);

        goal_box.appendChild(input);
        goal_box.appendChild(editButton);
        goal_box.appendChild(removeButton);
    }
}

new goal('Sport');