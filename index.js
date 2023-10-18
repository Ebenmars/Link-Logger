let myLinks = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const removeBtn = document.getElementById("remove-btn")

const linksFromStorage = JSON.parse(localStorage.getItem("myLinks"))

if (linksFromStorage) {
    myLinks = linksFromStorage
    render(myLinks)
}

inputBtn.addEventListener("click", function() {
    myLinks.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    render(myLinks)
})

removeBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLinks = [];
   render(myLinks) 
   ulEl.innerHTML = ''
    
})

function render(links) {
    let listItems = ""
    for (let i = 0; i < links.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${links[i]}'>
                    ${links[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}




