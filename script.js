const linklist = Array.from(document.querySelectorAll(".linkli"));
linklist.forEach(liElement => {
    liElement.addEventListener("mouseenter", (e) => {
        let description = liElement.querySelector(".description");
        toggleOn(description);
    });
    liElement.addEventListener("mouseleave", (e) => {
        let description = liElement.querySelector(".description");
        toggleOff(description);
    });
    liElement.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        let link = liElement.querySelector("a").getAttribute("href");
        window.open(link);
    });
});

function toggleOff(description) {
    if(description.classList.contains("visibleDescription")) {
        description.classList.toggle("visibleDescription");
    }
}

function toggleOn(description) {
    if(!description.classList.contains("visibleDescription")) {
        description.classList.toggle("visibleDescription");
    }
}