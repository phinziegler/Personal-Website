const linklist = Array.from(document.querySelectorAll(".linkli"));
console.log(linklist.length)
linklist.forEach(liElement => {
    liElement.addEventListener("mouseenter", (e) => {
        let description = liElement.querySelector(".description");
        toggle(description);
    });
    liElement.addEventListener("mouseleave", (e) => {
        let description = liElement.querySelector(".description");
        toggle(description);
    });
});

function toggle(description) {
    description.classList.toggle("visibleDescription");
}