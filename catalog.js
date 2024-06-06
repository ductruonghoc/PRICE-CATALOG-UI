const catalog = document.getElementById("catalog")

function cAddItem(i)
{
    catalog.innerHTML 
    += "<div class='item'><div class='image'> <img src='"
    + i["image"]
    + "'><div class='tag'>"
    + i["digit"]
    + "</div></div><h1>"
    + i["name"]
    + "</h1><p>"
    + i["price"]
    + "</p></div>"
}

function cClear()
{
    catalog.innerHTML = ""
}