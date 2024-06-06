function init()
{
    product.forEach(element => {
        element["products"].forEach(e => {
            addItem(e)
        })
    });
}

init()