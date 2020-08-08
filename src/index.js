document.addEventListener("DOMContentLoaded", function(){

    console.log('%c HI', 'color: firebrick')
    
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    let array = []
    let ul = document.querySelector("#dog-breeds")
    
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogs=> dogs.message.forEach(renderDogs))
    
    function renderDogs(dog){
         
        let divDog = document.querySelector("#dog-image-container")
        let image = document.createElement("img")
        image.src = `${dog}`
        divDog.appendChild(image)
    }

    fetch(breedUrl)
    .then(resp=>resp.json())
    .then(breeds=>Object.keys(breeds.message).forEach(renderBreeds))

    function renderBreeds(breed){
        array.push(breed)
        let li = document.createElement('li')
        li.innerText=`${breed}`
        ul.appendChild(li)

        li.addEventListener("click", function(e){

        e.target.style.color = 'turquoise'
        })
    }
      
    let dropDown  = document.getElementById("breed-dropdown")
    dropDown.addEventListener("change", function(e){

       if (e.target.value==='a'){
            
           let byA = array.filter(n=> {
               {return n.split("")[0]==='a';
               }})
        
               ul.innerHTML=""
               byA.forEach(renderFilteredBreeds)

            } else if (e.target.value==='b'){
                let byB = array.filter(n=> {
                    {return n.split("")[0]==='b';
                    }})
             
                    ul.innerHTML=""
                    byB.forEach(renderFilteredBreeds)
     
            } else if (e.target.value==='c'){
                let byC = array.filter(n=> {
                    {return n.split("")[0]==='c';
                    }})

                    ul.innerHTML=""
                    byC.forEach(renderFilteredBreeds)
       
            } else {
                let byD = array.filter(n=> {
                    {return n.split("")[0]==='d';
                    }})
                    ul.innerHTML=""
                    byD.forEach(renderFilteredBreeds)
                
            }

         function renderFilteredBreeds(breed){
          let li = document.createElement('li')
          li.innerText=`${breed}`
          ul.appendChild(li)
        }

    })

    



})//DOMContentLoaded

