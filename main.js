const addTask = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemp = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fas fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
};

addTask.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addTask.add.value.trim();

    if(todo.length) {
        generateTemp(todo);
        addTask.reset();
    }
});

// delete todos

list.addEventListener('click', e => {
    e.preventDefault();
    if(e.target.tagName === 'LI') {
        e.target.remove();
    } 
});

//search event on todos

const filterTodos = str => {
    Array.from(list.children)
    .filter((item) => !item.textContent.toLowerCase().includes(str))
    .forEach((item) => item.classList.add('filtered'));

    Array.from(list.children)
    .filter((item) => item.textContent.toLowerCase().includes(str))
    .forEach((item) => item.classList.rmove('filtered'));
};

search.addEventListener('keyup', () => {
    const str = search.value.trim().toLowerCase();
    filterTodos(str);
});






