var acc = document.getElementsByClassName("accordion");
var i;
var arrow = document.getElementsByClassName("arrow");

for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function
    () {
        var pannel = this.nextElementSibling;

        if(pannel.style.display === "block") {
            pannel.style.display = "none";
        } else {
            pannel.style.display = "block";

        }
    });
}
function swapBooks(clickedBook) {
    const book1 = document.querySelector('.book1');
    const book2 = document.querySelector('.book2');
    const book3 = document.querySelector('.book3');

    if (clickedBook === 1) { // Kliknięcie górnej książki
        // Przenieś book1 na środek i zwiększ rozmiar
        book1.style.transform = 'translate(-50%, -50%) scale(4)';
        book1.style.left = '40%';
        book1.style.top = '43%';

        // Przenieś book3 na dół po lewej
        book3.style.transform = 'translate(0, -50%) scale(2)';
        book3.style.left = '10%';
        book3.style.top = '45%';

        // Przenieś book2 na górę po lewej
        book2.style.transform = 'translate(0, 0) scale(2)';
        book2.style.left = '10%';
        book2.style.top = '10%';

        // Zamień klasy, aby zachować odpowiednie pozycje
        book1.className = 'book book3';
        book2.className = 'book book1';
        book3.className = 'book book2';

    } else if (clickedBook === 2) { // Kliknięcie dolnej książki
        // Przenieś book2 na środek i zwiększ rozmiar
        book2.style.transform = 'translate(-50%, -50%) scale(4)';
        book2.style.left = '40%';
        book2.style.top = '43%';

        // Przenieś book1 na dół po lewej
        book1.style.transform = 'translate(0, -50%) scale(2)';
        book1.style.left = '10%';
        book1.style.top = '45%';

        // Przenieś book3 na górę po lewej
        book3.style.transform = 'translate(0, 0) scale(2)';
        book3.style.left = '10%';
        book3.style.top = '10%';

        // Zamień klasy, aby zachować odpowiednie pozycje
        book2.className = 'book book3';
        book3.className = 'book book1';
        book1.className = 'book book2';
    }

    // Zarządzaj klikalnością książek
    manageClickableBooks();
}

function manageClickableBooks() {
    // Wyłącz kliknięcie dla książki na środku
    document.querySelector('.book3').onclick = null;

    // Włącz kliknięcie dla książek po bokach
    document.querySelector('.book1').onclick = function() {
        swapBooks(1);
    };
    document.querySelector('.book2').onclick = function() {
        swapBooks(2);
    };
}

// Inicjalizacja stanu na początku
manageClickableBooks();