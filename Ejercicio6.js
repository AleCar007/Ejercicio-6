let arr = []

function consultar(){
    const vendedor = document.getElementById('vendedor').value
    const producto1 = parseFloat(document.getElementById('Aqua').value)
    const producto2 = parseFloat(document.getElementById('Emocion').value)
    const producto3 = parseFloat(document.getElementById('Alegria').value)
    const producto4 = parseFloat(document.getElementById('Frescura').value)
    let precio = 0
    let precio1 = (producto1 * 200)
    let precio2 = producto2 * 180
    let precio3 = producto3 * 160
    let precio4 = producto4 * 150

    precio = precio + precio1 + precio2 + precio3 + precio4
    arr.push({vendedor,precio})

    document.getElementById('resultados1').innerHTML = `${vendedor} vendio ${precio}`
}

