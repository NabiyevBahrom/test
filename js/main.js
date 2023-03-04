const tabsBox = document.querySelector(".tabs-box");
array = document.querySelectorAll(".icon i");

let isDragging = false;




const handleIcons = () => {
    let scrollVal = Math.round(tabsBox.scrollLeft);
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    array[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
    array[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex" : "none";
}

array.forEach((icon) => {
    icon.addEventListener("click", () => {
        tabsBox.scrollLeft += icon.id === "left" ? -30 : 30;
        setTimeout(() => handleIcons(), 50);
    });
});

const dragging = (e) => {
    if (!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
}

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
