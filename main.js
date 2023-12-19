let id = (id) => document.getElementById(id);
let classes = (classes) =>
document.getElementsByClassName(classes);
let username = id("username"),
 email = id("email"),
 password = id("password"),
 form = id("form"),
 errorMsg = classes("error"),
 successIcon = classes("success-icon"),
 failureIcon = classes("failure-icon");
form.addEventListener("submit", (e) => {
 e.preventDefault();
 engine(username, 0, "Username cannot be blank");
 engine(email, 1, "Email cannot be blank");
 engine(password, 2, "Password cannot be blank");
});
let engine = (id, serial, message) => {
 if (id.value.trim() === "") {
 errorMsg[serial].innerHTML = message;
 id.style.border = "2px solid red";
 // icons
 failureIcon[serial].style.opacity = "1";
 successIcon[serial].style.opacity = "0";
 } else {
 errorMsg[serial].innerHTML = "";
 id.style.border = "2px solid green";
 // icons
 failureIcon[serial].style.opacity = "0";
 successIcon[serial].style.opacity = "1";
 }
};
// function checkPassword(form) {
    // var password = form.password.value; // Получаем пароль из формы
    // var s_letters = "qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролджэячсмитьбю"; // Буквы в нижнем регистре
    // var b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNMЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ"; // Буквы в верхнем регистре
    // var digits = "0123456789"; // Цифры
    // var specials = "!@#$%^&*()_-+=\|/.,:;[]{}"; // Спецсимволы
    // var is_s = false; // Есть ли в пароле буквы в нижнем регистре
    // var is_b = false; // Есть ли в пароле буквы в верхнем регистре
    // var is_d = false; // Есть ли в пароле цифры
    // var is_sp = false; // Есть ли в пароле спецсимволы
    // for (var i = 0; i < password.length; i++) {
    //   /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
    //   if (!is_s && s_letters.indexOf(password[i]) != -1) is_s = true;
    //   else if (!is_b && b_letters.indexOf(password[i]) != -1) is_b = true;
    //   else if (!is_d && digits.indexOf(password[i]) != -1) is_d = true;
    //   else if (!is_sp && specials.indexOf(password[i]) != -1) is_sp = true;
    // }
    // // var rating = 0;
    // var text = "";
    // // if (is_s) rating++; // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
    // // if (is_b) rating++; // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
    // // if (is_d) rating++; // Если в пароле есть цифры, то увеличиваем рейтинг сложности
    // // if (is_sp) rating++; // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
    // /* Далее идёт анализ длины пароля и полученного рейтинга, и на основании этого готовится текстовое описание сложности пароля */
    // if (password.length < 8) text = "Количество символов в пароле меньше 8";
    // else if (password.length >= 8 && !is_s) text = "Не хватает букв нижнего регистра";
    // else if (password.length >= 8 && !is_b) text = "Не хватает букв верхнего регистра";
    // else if (password.length >= 8 && !is_d) text = "Добавьте цифр в пароль";
    // else if (password.length >= 8 && !is_sp) text = "Добавьте спецсимволы";
    // // return false; // Форму не отправляем
    // if (password.length >= 8 && is_s && is_b && is_d &&is_sp) text = "Поздравляю, у вас надёжный пароль";
    // alert(text);
    // // return false;
    // let pass = prompt("Подтвердите свой пароль:", "");
    // var sec = "";
    // if ( password == pass) sec = "Пароль подтверждён";
    // else{
    //     sec = "Пароли не совпадают";
    //     let pass = prompt("Подтвердите свой пароль:", "");
    // }
    // alert(sec);
    // return false;
    // // else if (password.length >= 6 && rating > 1 && rating < 4) text = "Ваш пароль средней сложности";
    // // else if (password.length >= 6 && rating == 4) text = "Ваш пароль средней сложности";
    // // alert(text); // Выводим итоговую сложность пароля
    // // return true; // Форму отправляем

    document.querySelector('form').addEventListener('submit', function(event) {
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
  
        if (password.length < 8) {
          alert('Пароль должен содержать минимум 8 символов.');
          event.preventDefault(); // Остановить отправку формы
        } else if (!password.match(/[0-9]/)) {
          alert('Пароль должен содержать по крайней мере одну цифру.');
          event.preventDefault();
        } else if (!password.match(/[a-zA-Z]/)) {
          alert('Пароль должен содержать по крайней мере одну букву.');
          event.preventDefault();
        } else if (password !== confirmPassword) {
          alert('Пароль и подтверждение пароля не совпадают.');
          event.preventDefault();
        }
      });
    
function sendMail(){
    var body = document.getElementById("элемент, значение которого передается").value;
    window.location.href = "mailto:mva_2904@mail.ru?subject=Happy NewYear&body="+body;
}
function saveData() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    sessionStorage.setItem("savedUsername", username);
    sessionStorage.setItem("savedEmail", email);

    window.location.href = "index-new.html";
}

