fetch('employees.json')
  .then(response => response.json())
  .then(data => {
    const headers = ["ID","Name","Gender","Position","Address"]
    
    headers.forEach(headerText => {
        const th = document.createElement("th")
        th.appendChild(document.createTextNode(headerText))
        document.querySelector(".headerRow").appendChild(th)
    })
    
    data.forEach(row => {
        const tr = document.createElement("tr")
        const id = document.createElement("td")
        id.appendChild(document.createTextNode(row.id))
        tr.appendChild(id)
    
        const name = document.createElement("td")
        fullName = row.FirstName + " " + row.LastName
        name.appendChild(document.createTextNode(fullName))
        tr.appendChild(name)
    
        const gender = document.createElement("td")
        gender.appendChild(document.createTextNode(row.Gender[0]))
        tr.appendChild(gender)
    
        const position = document.createElement("td")
        position.appendChild(document.createTextNode(row.Position))
        tr.appendChild(position)
    
        const address = document.createElement("td")
        address.appendChild(document.createTextNode(row.Address))
        tr.appendChild(address)
    
        document.querySelector("tbody").appendChild(tr)
    })
  })
  .catch(error => console.error('Error fetching JSON:', error));

