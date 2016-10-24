(function diceGame() {

    // Use document.querySelector('...') to find HTML elements
    // The argument into the function is a CSS selector!
    // Any HTML element has an `innerText` property that you can
    // access (or change) for the contents of that element.

    document.querySelector('button').addEventListener('click', function buttonClicked() {

        var dieNumOne = document.querySelector('.dice aside:first-child').innerText;
        console.log(dieNumOne);

    });


})();
