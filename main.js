

let videoListEl = document.querySelector(".actions")
let header = document.querySelector("header")

header.style.cssText = `
  background-color: red;
`

let newButtomEl = document.createElement("button")
newButtomEl.textContent("Play")
newButtomEl.style.cssText = `
  font-size: 16px;
  color: #FFFFFF;
  background-color: #185909;
  margin-left: 12px;
  width: 200px;
`

videoListEl.prepend(newButtomEl)

