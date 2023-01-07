const LENGTH = 16;
const WIDTH = 16;

const grid = document.getElementById('grid');

function generateGrid() {
    for (let i=0; i < LENGTH; i++) {
        grid.innerHTML += `<div class="row" id="${i}"></div>`;
        for (let j=0; j < WIDTH; j++) {
            document.getElementById(`${i}`).innerHTML += `<div class="blank-square" id="${i}-${j}"></div>`;
        };
    };
};

generateGrid();

$(".blank-square").on("mouseover", function() {
    $(this).css("background", "grey");
});