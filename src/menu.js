export default function menuScript(content) {
    let element;
    let elementChild;

    let menuItem = (name, desc, price, img, imgDesc) => {
        let elementGrandchild;

        element = document.createElement("div");
        element.setAttribute("class", "section card");

        elementChild = document.createElement("img");
        elementChild.setAttribute("src", img);
        elementChild.setAttribute("alt", imgDesc);
        element.appendChild(elementChild);

        elementChild = document.createElement("div");
        elementChild.setAttribute("class", "cardLabel");

        elementGrandchild = document.createElement("h5");
        elementGrandchild.textContent = name;
        elementChild.appendChild(elementGrandchild);

        elementGrandchild = document.createElement("h5");
        elementGrandchild.textContent = price;
        elementChild.appendChild(elementGrandchild);

        elementGrandchild = elementChild;
        elementChild = document.createElement("div");
        elementChild.setAttribute("class", "cardDesc");
        elementChild.appendChild(elementGrandchild);

        elementGrandchild = document.createElement("p");
        elementGrandchild.textContent = desc;
        elementChild.appendChild(elementGrandchild);

        element.appendChild(elementChild);

        return element
    };

    // Menu
    element = document.createElement("h2");
    element.setAttribute("class", "section");
    element.textContent = "Menu";
    content.appendChild(element);

    // Appetizers
    element = document.createElement("h3");
    element.setAttribute("class", "section");
    element.textContent = "Appetizers";
    content.appendChild(element);

    // Main Dishes
    element = document.createElement("h3");
    element.setAttribute("class", "section");
    element.textContent = "Main Dishes";
    content.appendChild(element);

    // Sides
    element = document.createElement("h3");
    element.setAttribute("class", "section");
    element.textContent = "Sides";
    content.appendChild(element);

    // Beverages
    element = document.createElement("h3");
    element.setAttribute("class", "section");
    element.textContent = "Beverages";
    content.appendChild(element);

    element = menuItem(
        "Drink",
        "A generic desrciption for a generic drink. Adding more words makes the spacing look better.",
        "$2",
        "../img/drink.png",
        "A drink"
    )
    content.appendChild(element);
};