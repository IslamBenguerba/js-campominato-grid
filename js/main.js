
//bottone
const btnplay = document.getElementById('play')
//container generale
const containerGame = document.querySelector('.container')
//container effettivo dei quadratini
const gridSquare = document.createElement('div')
gridSquare.classList = ('container-grid')
//appendom il container grid all container generale
containerGame.append(gridSquare)


btnplay.addEventListener('click',play)
function play(){
    //troviamo il vallore delle celle da caricare
    const valueSquare = document.getElementById('select').value
    // console.log(valueSquare)
    //creazione della griglia utilizzando il valore inserito
    const griglia = createGrid(valueSquare)
    // console.log(griglia)
    //inseriamo la griglia nel container dedicato
    insertGrid(gridSquare,griglia)

}
/**
 * creaione di goni singola cella 
 * @param {number} numeroCelle valore dato dall utente
 * @param {number} i serve per identificare la cella
 * @param {number} randomNumber numero casuale 
 * @returns 
 */
function createSquare(numeroCelle,i,randomNumber){
    const singleSquare = document.createElement('div')
    const grandezza = Math.sqrt(parseInt(numeroCelle))
    singleSquare.classList = ('square')
    singleSquare.style.flexBasis = `calc(100% /${grandezza} ) `
    // singleSquare.innerHTML = i
    
    singleSquare.addEventListener('click',squareclick)
    /**
     * effetto al click di ogni singolo quadrato
     */
    function squareclick(){
        singleSquare.classList.toggle('bg-primary')
        singleSquare.innerHTML = `${randomNumber}`
        // singleSquare.innerHTML = i
        alert(i)
}
    return singleSquare
}



/**
 * creazione dell'array contenente tutte le celle
 * @param {number} numeroCelle valore dato dall utente
 * @returns ritorna un array di square
 */
function createGrid(numeroCelle){
    array = []
    for (let i = 0; i < numeroCelle; i++) {
        const randomNumber = Math.floor(Math.random()*100) // creazione di numero casulae da assegnare ad ogni cella
        let newsquare = createSquare(numeroCelle,i,randomNumber) //gli passiamo il numero cella e i suo identificativo
        // newsquare.innerText = i
        array.push(newsquare)
        
    }
    return array
}
/**
 * inserimento di ogni cella di un array su un container
 * @param {HTMLDivElement} container 
 * @param {[]} grid 
 * @returns 
 */
function insertGrid (container,grid){
    container.innerHTML = ""
    for (let i = 0; i < grid.length; i++) {
        container.append(grid[i])
        
    }
    return container
}