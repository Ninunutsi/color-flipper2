// const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// const color = document.getElementById("color")
// const btn = document.getElementById("btn")

// btn.addEventListener('click', () =>{
//     let hexColor = '#'
//     for(let i = 0; i < 6; i++){
//         hexColor += hex[getRandom()]
//     }
//     color.textContent = hexColor
//     color.style.color = hexColor
//     color.style.transition = '1s'
//     document.body.style.transition = '1s'
//     document.body.style.backgroundColor = hexColor
// })

// const getRandom = () => {
//     return Math.floor(Math.random() * hex.length)
// }








const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const color = document.getElementById('color')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let hexColor = '#'
    for(let i = 0; i < 6; i++){
        hexColor = hexColor + hex[getRandom()]
    }
    color.textContent = hexColor
    color.style.color = hexColor
    document.body.style.backgroundColor = hexColor
})

function getRandom() {
    return Math.floor(Math.random() * hex.length)
}


















