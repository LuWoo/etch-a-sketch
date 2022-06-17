

function createGrid() {
    const container = document.querySelector('.container')
    for (let y=0; y<=15; ++y) {
        let rowContainer = document.createElement('div')
        rowContainer.classList.add('row', y)
        for (let x=0; x<=15; ++x) {
            gridDiv = document.createElement('div')
            gridDiv.classList.add("grid", x)
            gridDiv.setAttribute('color', 'green')
            gridDiv.textContent = x;
            rowContainer.append(gridDiv)
        }
        container.append(rowContainer)
    }
    equalBoxes();
}

function equalBoxes() {
    let height = document.querySelector('.grid').clientWidth;
    height = `${height}px`;
    console.log(height);
    let boxes = document.querySelectorAll('.grid');
    boxes.forEach((box) => {
        console.log(box)
        box.style.height=height;

    })
}

createGrid()