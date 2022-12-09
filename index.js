const bodyNew = document.querySelector ('body')
console.log(bodyNew.innerHTML)
bodyNew.innerHTML = `
<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль новый
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Проверить новое
    </button>
</form>`

const newForm = document.createElement('form')
newForm.className = "create-user-form1"
const newForm1 = document.querySelector('body')
newForm1.append(newForm)

const lable = document.createElement ('lable')
lable.textContent = 'Имя1'
const labelNew = document.querySelector('.create-user-form1')
labelNew.prepend (lable)

const input = document.createElement('input')
input.type ='password'
input.name = 'password'
input.placeholder = 'Введите ваше имя 1'
const inputNew = document.querySelector('lable')
inputNew.append(input)

const lable1 = document.createElement ('lable')
lable1.id = 'new'
lable1.textContent = 'Пароль новый 1'
const labelNew1 = document.querySelector('.create-user-form1')
labelNew1.append (lable1)

const input1 = document.createElement('input')
input1.type ='password'
input1.name = 'password'
input1.placeholder = 'Придумайте Пароль 1'
const inputNew1 = document.querySelector('#new')
inputNew1.append(input1)

const button = document.createElement ('button')
button.type ='submit'
button.textContent = 'Проверить новое1'
const buttonnew = document.querySelector ('.create-user-form1')
buttonnew.append(button)
