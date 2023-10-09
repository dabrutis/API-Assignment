async function start() {
    const response = await fetch("https://api.thecatapi.com/v1/breeds")
    const data = await response.json()
    createBreedList(data)
}

start()

function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
        <select>
            <option>Choose a cat breed</option>
            ${breedList.map(function (breed) {
                return `<option>${breed.name}</option>`
            }).join('')}
        </select>
    `
}