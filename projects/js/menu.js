const menus = [
    ["index.html", "Ballina"],
    ["sport.html", "Sport"],
    ["about.html", "About"],
    ["gallery.html", "Galeria"],
    ["https://cacttus.education/", "Cacttus Education"],
];


for (let i = 0; i < menus.length; i++) {

    document.writeln(`<li class="nav-item">
                    <a class="nav-link" href="${menus[i][0]}">${menus[i][1]}</a>
                  </li>`);
}