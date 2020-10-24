const button = document.querySelector("button")
const input = document.querySelector("input")
const ul = document.querySelector("ul")
const listOfLis = document.querySelectorAll(".mad")
const clearItems = document.querySelector(".clearButton")


clearItems.addEventListener("click", ()=> {
    const list2 = document.querySelectorAll(".mad")
    list2.forEach(item=> {   
        item.remove();
    })   
})

const newList = () => {
    const li = document.createElement("li");
    li.addEventListener("click", ()=> {
         li.classList.toggle("done");
    });
    let anchor = document.createElement("a");
    anchor.innerText = "X";
    anchor.classList.add("craze")
    anchor.addEventListener("click", ()=> {
        anchor.parentElement.remove("a")
    })
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(anchor);
    li.classList.add("mad")
    ul.appendChild(li);
    input.value = ""
};

for (let index = 0; index < listOfLis.length; index++) {
    listOfLis[index].addEventListener("click", function() {
        listOfLis[index].classList.toggle("done");
    })
}

let listofAchors = document.querySelectorAll("a")
listofAchors.forEach(item => {
    item.addEventListener("click", ()=> {
        item.parentElement.remove("anchor")
    })
});

const inputLength = () => {
    return input.value.length;
}

const addListAfterClick = () => {
    if (inputLength() > 0) {
        newList();
    };
}

const addListAfterKeypress = (event) => {
    if (inputLength() > 0 && event.keyCode === 13) {
            newList();
        };
}

button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress);
