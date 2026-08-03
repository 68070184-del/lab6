fetch('student-score.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((person, index) => {
        const card = document.createElement("div")
        card.classList.add("card-container")
        if (person.gender === "Male") {
            const img = document.createElement("img")
            img.setAttribute("src", "images/male.png")
            card.appendChild(img)
        } else {
            const img = document.createElement("img")
            img.setAttribute("src", "images/female.png")
            card.appendChild(img)
        }

        const title = document.createElement("h2")
        const nameTitle = String(index + 1) + ". " + person.name
        title.appendChild(document.createTextNode(nameTitle))

        const physic = document.createElement("h3")
        const namePhy = "Physics" + ": " + String(person.physics)
        physic.appendChild(document.createTextNode(namePhy))

        const math = document.createElement("h3")
        const nameMath = "Mathematics" + ": " + String(person.maths)
        math.appendChild(document.createTextNode(nameMath))

        const eng = document.createElement("h3")
        const nameEng = "English" + ": " + String(person.english)
        eng.appendChild(document.createTextNode(nameEng))

        card.appendChild(title)
        card.appendChild(physic)
        card.appendChild(math)
        card.appendChild(eng)

        document.querySelector(".container").appendChild(card)
    })

  })
  .catch(error => console.error('Error fetching JSON:', error));