fetch('questionAnswerData.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((quiz,index) => {
        const form = document.createElement("form")
        const q = document.createElement("h3")
        const makeQuestion = String(index + 1) + " " + quiz.question
        q.appendChild(document.createTextNode(makeQuestion))
        form.appendChild(q)
        
        Object.keys(quiz.answers).slice(0,-1).forEach((choice,index) => {
            const aLab = document.createElement("label")
            const a = document.createElement("input")
            const br = document.createElement("br")
            a.setAttribute("type","radio")
            a.setAttribute("value",choice)
            a.setAttribute("name",index)
            aLab.appendChild(a)
            aLab.appendChild(document.createTextNode(quiz.answers[choice]))
            aLab.appendChild(br)
            form.appendChild(aLab)
        })
        document.querySelector(".container").appendChild(form)
    })
  })
  .catch(error => console.error('Error fetching JSON:', error));