document.querySelector(".control-buttons span").onclick = function () {
    let yourName = prompt('What is Your Name ?')

    if (yourName == null || yourName == "") {
        document.querySelector(".name span").innerHTML = 'unkown';
    } else {
        document.querySelector(".name span").innerHTML = yourName;
    }

    document.querySelector(".control-buttons").remove();
};
let duration = 1000;
let blocksContainer = document.querySelector('.memore-game-blocks');
let blocks = Array.from(blocksContainer.children);

let orderRange = [...Array(blocks.length).keys()];

// Add Order Css Property To Game Block
blocks.forEach((block , index) => {

    block.style.order = orderRange[index];
   
});

 
shuffle(orderRange);

//Shuffle Function 
function shuffle(array) {
    let current = array.length,
        temp,
        random;
    
    while (current > 0) {
        
        random = Math.floor(Math.random() * current);
       
        //Decrease Length By 1 
        current--;

        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
       
    }
    return array
}

