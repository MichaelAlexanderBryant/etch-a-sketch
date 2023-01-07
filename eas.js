let length = 16;
let width = 16;

const gridContainer = document.getElementById('grid-container');
let grid = document.getElementById('grid');

function generateGrid() {
    for (let i=0; i < length; i++) {
        grid.innerHTML += `<div class="row" id="${i}"></div>`;
        for (let j=0; j < width; j++) {
            document.getElementById(`${i}`).innerHTML += `<div class="blank-square" id="${i}-${j}"></div>`;
        };
    };
    $(".blank-square").on("mouseover", function() {
        $(this).css("background", "#4C4C4C");
    });
    $(".blank-square").css("padding", `${409.6/(length*2)}px`);
};

generateGrid();

function changeSize(){
    length = prompt("Enter side length (MAX: 100):");
    while ((+length > 100) || (isNaN(+length))) {
        alert("Invalid entry");
        length = prompt("Enter side length (MAX: 100):");
    }
    if (length != null) {
        width = length;
        grid.remove();
        grid = document.createElement('div')
        grid.id = 'grid'
        gridContainer.appendChild(grid);
        generateGrid();
    };
};