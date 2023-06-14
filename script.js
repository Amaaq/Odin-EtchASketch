let container = document.querySelector(".container")
let button = document.querySelector("button")
let rgb = []
createDivs(16)
button.addEventListener("click",() => {
    let numberOfSquaresPerLine = prompt("Choose a number between 2 and 100") 
    container.innerHTML = ""
    createDivs(numberOfSquaresPerLine)
})
function createDivs(n){
    rgb.length = n*n
    rgb.fill(255) 
    for(let i=0;i<n*n;i++){
    let div=document.createElement('div')
    
    div.style.width = (960/n)+"px"
    div.style.height = (960/n)+"px"
    container.appendChild(div)
    
    container.children[i].addEventListener("mouseover",() => {
            rgb[i] -= 25 
            container.children[i].style.backgroundColor = `rgb(${rgb[i]},${rgb[i]},${rgb[i]})`
    })
    }
}
