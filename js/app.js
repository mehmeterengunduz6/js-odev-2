

let taskDOM = document.querySelector('#task'); // input
let bttnDOM = document.querySelector('#liveToastBtn'); // button
let ulDOM = document.querySelector('#list'); // liste
let closeButtonDOM = document.getElementsByName('close-button');
let liDOM = document.querySelectorAll('li');

let todos = [];


function baslangic() {
    closeButtonDOM = document.getElementsByName('close-button');
    liDOM = document.querySelectorAll('li');
    for (var i = 0; i < closeButtonDOM.length; i++) {
        closeButtonDOM[i].addEventListener('click', deleteElement);
        liDOM[i].addEventListener('click', doneTask);
    }
    if (!todos) {
        todos.forEach((taskk) => {
        liDOM.innerHTML = taskk;
        });
    }
}

baslangic();

function newElement() {
    console.log("islem gerceklesti");
    if (taskDOM.value) {
        addTask(taskDOM.value);
        taskDOM.value = '';
        closeButtonDOM = document.getElementsByName('close-button');
        liDOM = document.querySelectorAll('li');
        for (var i = 0; i < closeButtonDOM.length; i++) {
            closeButtonDOM[i].addEventListener('click', deleteElement);
            liDOM[i].addEventListener('click', doneTask);
        }
    } else {
        $('#errorToast').toast('show');
        console.log('hata');
    }
}


const addTask = (task) => {
    let liCreateDOM = document.createElement('li');
    liCreateDOM.innerHTML = `${task} <span class="close" name='close-button'>x</span>`;
    ulDOM.appendChild(liCreateDOM);
    $('#addToast').toast('show');
    saveElement(task);

}



function saveElement(task) {
    localStorage.setItem(`${task}`, JSON.stringify(task));
    todos.push(localStorage.getItem(`${task}`));
    console.log(todos);
}


let isDone = false;

function doneTask() {
    if (this.isDone == false) {
        this.classList.add('bg-success');
        this.isDone = true;
    } else {
        this.classList.remove('bg-success');
        this.isDone = false;
    }
}

function deleteElement() {
    console.log(closeButtonDOM);
    console.log('işe yaradi');
    this.parentNode.parentNode.removeChild(this.parentNode);

}





