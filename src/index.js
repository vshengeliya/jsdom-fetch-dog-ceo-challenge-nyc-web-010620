console.log('%c HI', 'color: firebrick')
let dogBreeds = [];

document.addEventListener('DOMContentLoaded', function(event){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl)
    .then (resp =>resp.json())
    .then (dogs => dogs.message.forEach(addDog))
    
    
    function addDog(dogUrl){
        const divConrainer = document.getElementById('dog-image-container')
        const dogImg = document.createElement('img')
        dogImg.src = dogUrl
        divConrainer.appendChild(dogImg)
        
    }

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then (resp =>resp.json())
    // .then((dogs => Object.keys(dogs.message).forEach(breed => dogBreeds.push(breed))))
    // .then(console.log)
    .then (dogs => Object.keys(dogs.message).forEach(breed => {
        // console.log('before add breed')
        addBreed(breed)
        // console.log('after add breed')
        dogBreeds.push(breed)
        // console.log('after push')
        // console.log(dogBreeds)
    }))

    function addBreed(breed){
        // console.log(breed)
        const ul = document.getElementById('dog-breeds')
        const breedLi = document.createElement('li')
        breedLi.addEventListener('click', function(event){

         event.target.style.color = 'red'

        })
        breedLi.innerText = `${breed}`
        ul.appendChild(breedLi)

        // ul.innerHTML = ul.innerHTML + `<li>${breed}</li>`
       
    }

    const breedDropdown = document.getElementById('breed-dropdown')
    breedDropdown.addEventListener('change', showFilteredBreeds)

    function showFilteredBreeds(event) {
        const letter = event.target.value
        const filteredBreeds = dogBreeds.filter(breed => breed.charAt(0) === letter);
        const ul = document.getElementById('dog-breeds')
        ul.innerHTML=""
        filteredBreeds.forEach(addBreed)
    }



    



    
}) // End of DOMContentLoaded





// const result = words.filter(word => {
//     return word.length > 6
// });
// const result = words.filter(function(word) {return word.length > 6})