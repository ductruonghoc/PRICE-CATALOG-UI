const filterBar = document.getElementById("searchBar")
var typesFilterSelection = [
    {
        "object": "typeCheck1",
        "checked": false,
    },
    {
        "object": "typeCheck2",
        "checked": false,
    },
    {
        "object": "typeCheck3",
        "checked": false,
    },
]

filterBar.addEventListener('input', (event) => {
    const inputValue = event.target.value;

    update(filterByName(inputValue))
});

typesFilterSelection.forEach((i) => {
    document.getElementById(i["object"]).addEventListener("change", (event) => {
        var root = typesFilterSelection.find((i) => i["object"] === event.target.id)
        root["checked"] = event.target.checked;
        console.log(root)

        update(filterByType())
    })
})

function inputClear(id)
{
    document.getElementById(id.slice(0, -1)).value = ""
}