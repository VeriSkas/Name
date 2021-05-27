const URL = 'https://jsonplaceholder.typicode.com/users';
let getUser = () => new Promise ( resolve => {
    fetch(URL)
        .then(response => response.json())
        .then(json => resolve(json))
})

let createUser = () => {
    let main = document.querySelector('.main');
    getUser().then( result => {
        result.forEach(user => {
            const div = document.createElement('div');
            div.className = "btn-group dropend block";
            main.append(div);

            let button = document.createElement('button');
            button.className = "btn btn-info dropdown-toggle";
            button.setAttribute("data-bs-toggle", "dropdown");
            button.innerHTML = user.name;
            div.append(button);

            const ul = document.createElement('ul');
            ul.className = "dropdown-menu";
            div.append(ul);

            const li = document.createElement('li');
            li.innerHTML = user.email;
            ul.append(li);

            const li2 = document.createElement('li');
            li2.innerHTML = user.phone;
            ul.append(li2);
        })
    })
}
createUser()
