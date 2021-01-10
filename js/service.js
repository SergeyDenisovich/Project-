// --- переключение вкладок
var buttons = document.getElementsByClassName("button-btn");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        this.classList.toggle("active-btn");
        var block = this.nextElementSibling;
        if (block.style.display === "block") {
            block.style.display = "none";
        } else {
            block.style.display = "block";
        }
    });
}


// ---- кнопка переключения страниц
// function myFunction() {
//     var elems = document.querySelectorAll('.menu__list li');
//
//     for (var i = 0; i < 5; i++ ) {
//         if(elems[i].style.display === 'block') {
//             elems[i].style.display = "none";
//         } else {
//             elems[i].style.display = 'block';
//         }
//     }
//
// }