import homeScript from "./home";
import menuScript from "./menu";

let navbar = (() => {
    const homeTab = document.getElementById("home-tab");
    const menuTab = document.getElementById("menu-tab");
    const contactTab = document.getElementById("contact-tab");
    const content = document.getElementById("content");

    let update = replaceScript => {
        // clear old content
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        };

        replaceScript(content);
    };
    update(homeScript);

    homeTab.addEventListener("click", () => update(homeScript));
    menuTab.addEventListener("click", () => update(menuScript));
    contactTab.addEventListener("click", () => update());

    return {};
})();