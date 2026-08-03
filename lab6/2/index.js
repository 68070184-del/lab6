fetch('student-score.json')
  .then(response => response.json())
  .then(data => {
    data.foreach(person => {
        const card = document.createElement("div")
        card.classList.add("card-container")
        if (person.gender === "Male") {
            const img = document.createElement("img")
            img.setAttribute("src","/images/male.png")
            card.appendChild(img)
        } else {
            const img = document.createElement("img")
            img.setAttribute("src","/images/female.png")
            card.appendChild(img)
        }
        
    })
  })
  .catch(error => console.error('Error fetching JSON:', error));
