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
shuffle(orderRange);

// Add Order Css Property To Game Block
blocks.forEach((block , index) => {

    block.style.order = orderRange[index];
    block.addEventListener('click', function () {
        // Trigger The Flip Block Function
        flipBlock(block);
    })
});


// Flip Block Function
function flipBlock(selectedBlock) {
    
    selectedBlock.classList.add('flipped');

    // Collect All Flipped Cards
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('flipped'));

    // if Theres Two Selected Blocks
    if (allFlippedBlocks.length === 2) {
        
        // Stop Clicking Function
        stopClicking();

        // Check Matched Block Function
    checkMatchedBlocks(allFlippedBlocks[0] , allFlippedBlocks[1]);

    }

}

// Stop Clicking Function
function stopClicking() {

    // Add Class No Clicking on Main Container
    blocksContainer.classList.add('no-clicking');
    setTimeout(() => {

        blocksContainer.classList.remove('no-clicking');
    }, duration);
  
}

  // Ckeck Matched Block
    function checkMatchedBlocks(firstBlock , secondblock) {
        let triesElement = document.querySelector('.tries span');

        if (firstBlock.dataset.football === secondblock.dataset.football) {
            firstBlock.classList.remove('flipped');
            secondblock.classList.remove('flipped');

            firstBlock.classList.add('matched');
            secondblock.classList.add('matched');
        } else {
            triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

            setTimeout(() => {
                
             firstBlock.classList.remove('flipped');
            secondblock.classList.remove('flipped');
            }, duration);

        }
    }
    
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

