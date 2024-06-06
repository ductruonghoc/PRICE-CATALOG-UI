function init()
{
    update(product)
}

function update(action)
{
    cClear()

    action.forEach(element => {
        element["products"].forEach(e => {
            cAddItem(e)
        })
    });
}

init()