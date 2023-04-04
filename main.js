document.querySelector(".control-buttons span").onclick = function () {
    let yourName = prompt('What is Your Name ?')

    if (yourName == null || yourName =="" ) {
        document.querySelector(".name span").innerHTML = 'unkown';
    } else {
        document.querySelector(".name span").innerHTML = yourName;
    }

    document.querySelector(".control-buttons").remove();
}