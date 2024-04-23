(() => {
    const form = document.querySelector('.form');
    const input = document.querySelector('.form_input');
    const ul = document.querySelector('.toDoList');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value.trim();
        if (task !== '') {
            addItemToDOM(task);
            input.value = '';
        }
    });

    ul.addEventListener('click', (e) => {
        if (e.target.classList.contains('deleteBtn')) {
            e.target.parentNode.remove();
        }
    });

    function addItemToDOM(task) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button class="deleteBtn">Delete</button>
        `;
        ul.appendChild(li);
    }
})();