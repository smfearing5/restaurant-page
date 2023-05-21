export default function homeScript(content) {
    let element;
    let elementChild;

    // Restaurant Name
    element = document.createElement("h2");
    element.setAttribute("class", "section");
    element.textContent = "Restaurant Name";
    content.appendChild(element);

    // Testamonial
    element = document.createElement("div");
    element.setAttribute("class", "section");

    elementChild = document.createElement("p");
    elementChild.textContent = "This is a testamonial.  It says some things about how great this restaurant is.  It was kind of short, so here is another sentence.";
    element.appendChild(elementChild);

    elementChild = document.createElement("div");
    elementChild.textContent = "- The Quoter";
    elementChild.setAttribute("class", "quoter");
    element.appendChild(elementChild);

    content.appendChild(element);

    // Hours
    element = document.createElement("div");
    element.setAttribute("class", "section");

    elementChild = document.createElement("h4");
    elementChild.textContent = "Hours";
    element.appendChild(elementChild);

    //      Hours Table
    elementChild = (() => {
        let row, item;
        let hoursTable = document.createElement("table");

        row = document.createElement("tr");

        item = document.createElement("th");
        item.textContent = "Day";
        row.appendChild(item);

        item = document.createElement("th");
        item.textContent = "Open";
        row.appendChild(item);

        item = document.createElement("th");
        item.textContent = "Close";
        row.appendChild(item);

        hoursTable.appendChild(row);

        let dayRow = (day, open, close) => {
            row = document.createElement("tr");

            item = document.createElement("th");
            item.textContent = day;
            row.appendChild(item);

            item = document.createElement("td");
            item.textContent = open;
            row.appendChild(item);

            item = document.createElement("td");
            item.textContent = close;
            row.appendChild(item);

            return row;
        };
        row = dayRow("Sunday", "8AM", "8PM");
        hoursTable.appendChild(row);

        row = dayRow("Monday", "6AM", "6PM");
        hoursTable.appendChild(row);
        
        row = dayRow("Tuesday", "6AM", "6PM");
        hoursTable.appendChild(row);
        
        row = dayRow("Wednesday", "6AM", "6PM");
        hoursTable.appendChild(row);
        
        row = dayRow("Thursday", "6AM", "10PM");
        hoursTable.appendChild(row);
        
        row = dayRow("Friday", "6AM", "10PM");
        hoursTable.appendChild(row);
        
        row = dayRow("Saturday", "8AM", "10PM");
        hoursTable.appendChild(row);

        return hoursTable;
    })();
    element.appendChild(elementChild);

    content.appendChild(element);

    // Location
    element = document.createElement("div");
    element.setAttribute("class", "section");

    elementChild = document.createElement("h4");
    elementChild.textContent = "Location";
    element.appendChild(elementChild);

    elementChild = document.createElement("p");
    elementChild.textContent = "123 Street Road, Townville, ST";
    element.appendChild(elementChild);

    content.appendChild(element);
};