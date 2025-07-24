


let videoListEl = document.querySelector(".actions")

//Apenas para visualização de mudanças
let header = document.querySelector("header")
//let listVideoEl = document.getElementById("original_header")

console.log('Elements found:', { videoListEl, header })

if (header) {
  header.style.cssText = `
    background-color: red;
  `
}

let newButtonEl = document.createElement("button")
newButtonEl.textContent = "Play"
newButtonEl.style.cssText = `
  font-size: 16px;
  color: #FFFFFF;
  background-color: #ad9718ff;
  margin: 12px 0px 0px 8px;
  padding: 8px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`


newButtonEl.addEventListener('dblclick', function() {
  let pathUrl = window.location.pathname.split('/')
  let urlId = pathUrl[2].split('-')[0]
  console.log(urlId)
})

videoListEl.appendChild(newButtonEl)
console.log('Button added to actions')