const catalog = document.getElementById("catalog")

function cAddItem(i)
{
    const fontSize = i["name"].length > 13 ? (31 - i["name"].length) : 18

    catalog.innerHTML 
    += "<div class='item'><div class='image'> <img src='"
    + i["image"]
    + "'><div class='tag'>"
    + i["digit"]
    + "</div></div><h1 style='font-size:" 
    + fontSize.toString() + "px'>"
    + i["name"]
    + "</h1><p>"
    + i["price"]
    + "</p></div>"
}

function cClear()
{
    catalog.innerHTML = ""
}