//import html function
import { html } from "./Html.js"

//target the main section in index.html
const mainContainer = document.querySelector("#container")

//add a render function that invokes the html function
const render = () => {
    mainContainer.innerHTML = html()
}

//invoke the render function
render()

//add an event listener that listens for a change in state and invokes the render function
document.addEventListener("stateChanged", event => {
    render()
})