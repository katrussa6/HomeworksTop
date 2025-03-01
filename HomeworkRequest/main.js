const citySelect = document.getElementById('citySelect');
const currentCity = document.getElementById('currentCity');
const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const modal = document.getElementById('modal');
const loginForm = document.getElementById('loginForm');
const labelName = document.getElementById('labelName')

labelName.addEventListener('click',()=>{
    loginForm.elements.login.focus()
loginForm.elements.password.addEventListener('focus',()=>{console.log(
    'Мы сфокусировались на пароле')
}
)

})

document.getElementById('sharePassword').addEventListener('click',function(){
    const btn = this
    const passwordField = loginForm.elements.password
    
    switch(btn.value){
        case 'Показать пароль':{
            btn.value = "Cкрыть пароль"
            passwordField.type = 'text'
            break
        }
        case "Cкрыть пароль":{
            btn.value = "Показать пароль"
            passwordField.type = 'password'
        }

    }
}
    
)



const cities = [
    { value: 'msk', name: 'Москва' },
    { value: 'spb', name: 'Питер' },
    { value: 'rnd', name: 'Ростов-на-Дону' },
    { value: 'tgn', name: 'Таганрог' }
];
const persons =
    [
        { name: 'Иван', password: 'ivan123' },
        { name: 'Ярослав', password: 'yar123' },
        { name: 'Виктор', password: 'vik123' },
    ]

currentCity.textContent = cities[0].name

console.log(citySelect)
cities.forEach((city, index) => {
    const option = document.createElement('option'); // <option></option>
    option.value = city.value; // <option value ='msk'></option>
    option.textContent = `${++index}.${city.name}`// <option value='msk'>Москва</option>
    citySelect.appendChild(option) //добавляет ребенка внутрь эл-та
})

citySelect.addEventListener('change', function () {
    // console.log(citySelect);
    currentCity.textContent = this.options[this.selectedIndex].text;
});

openModalButton.addEventListener('click', function () {
    modal.style.display = 'block'
});

closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none'
});

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const login = this.querySelector('[name="login"]').value
    const password = this.querySelector('[name="password"]').value

    const user = persons.find(person => person.name === login);
    console.log(user)
    if (!user) {
        alert('Не удалось найти пользователя')
        this.reset(); //сброс-закрытие модального окна
    }
    else if (user.password === password) {
        alert(`Добро пожаловать, ${user.name}!`)
        modal.style.display = 'none'
        this.reset();

    }
    else {
        alert('Пароль неверный!')
        this.querySelector('[name="password"]').value = ''

    }

});
document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
        modal.style.display = 'none'
    }
})
loginForm.elements.password.addEventListener('input',function(){
    const field = this;
    const errorMesage = document.getElementById('password-error');
    console.log(errorMesage);
    
    const regex = /^[a-zA-Z0-9]*$/;
    // разрешить английские буквы и цифры

    if(!regex.test(field.value)){
        errorMesage.textContent = "Ой тут ошибочка";
        field.value = field.value.slice(0,-1);
        field.classList.add('errorField')
        // field.blur() //расфокус с елемента
        
    }else {
        errorMesage.textContent = ""
        field.classList.remove('errorField')
    }

})


