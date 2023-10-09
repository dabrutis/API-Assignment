async function start() {
    const response = await fetch("https://api.thecatapi.com/v1/breeds")
    const data = await response.json()
    createBreedList(data)
}

start()

function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
        <select onchange="loadByBreed(this.value)">
            <option>Choose a cat breed</option>
            ${breedList.map(function (breed) {
                return `<option>${breed.name}</option>`
            }).join('')}
        </select>
    `
}

async function loadByBreed(breed) {
    if (breed != "Choose a cat breed") {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_name=${breed}`)
        const data = await response.json()
        createSlideShow(data)
    }
}

function createSlideShow(images) {
    document.getElementById("slideshow").innerHTML = `
    <div class="slide" style="background-image: url('${images[0].url}')"></div>
    `
}