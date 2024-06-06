const filterByName = function (str = "") {
    // Create a deep copy of the 'product' array
    const productCopy = JSON.parse(JSON.stringify(product));

    return productCopy.map((i) => {
        i["products"] = i["products"].filter((j) => j["name"].toUpperCase().includes(str.toUpperCase())
        )

        return i
    }
    )
}

const filterByType = function () {
    if(typesFilterSelection.every((i) => i["checked"] === false))
        return product;
    // Create a deep copy of the 'product' array
    const productCopy = JSON.parse(JSON.stringify(product))

    return productCopy.filter((i, j) => typesFilterSelection[j]["checked"])
}