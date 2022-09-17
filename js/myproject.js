let dataProject = []
function addProject(event){
    event.preventDefault()

    let title = document.getElementById("input-project-title").value
    let startdate = document.getElementById("input-sdate").value
    let edate = document.getElementById("input-edate").value
    let description = document.getElementById("input-project-description").value
    let image = document.getElementById("input-project-image").files
console.log(title)
console.log(startdate)
console.log(edate)
console.log(description)
console.log(image)


let nodejs = document.getElementById("input-node-js").checked
let react = document.getElementById("input-react").checked
let java = document.getElementById("input-java").checked
let python = document.getElementById("input-python").checked

if(nodejs){
    nodejs = document.getElementById("input-node-js").value
} else {
    nodejs = ""
}

if(react){
    react = document.getElementById("input-react").value
} else {
    react = ""
}

if(java){
    java = document.getElementById("input-java").value
} else {
    java = ""
}

if(python){
  python = document.getElementById("input-python").value
} else {
  python = ""
}


    // untuk membuat url gambar, agar tampil
    image = URL.createObjectURL(image[0])

    let project = {
        title,
        startdate,
        edate,
        description,
        image,
        nodejs,
        react,
        java,
        python
    }

    dataProject.push(project)
    console.log(dataProject);

    renderProject()
}

function renderProject(){
    
    document.getElementById("descriptions").innerHTML = ''

    // console.log(dataProject);
    
    for (let index = 0; index < dataProject.length; index++) {
        
        // console.log(dataProject[index]);
        document.getElementById("descriptions").innerHTML += 

        `
        <div class="project-list-item">
          <div class="project-image">
            <img src="${dataProject[index].image}" alt="" />
          </div>
          <div class="project-description">
            
              <h1>
                <a class="judul-description" href="project-detail.html" 
                target="_blank">${dataProject[index].title}</a>
              </h1>
              
            <div class="detail-project-description">
                durasi: 3 bulan
            </div>

            <div class="description">
              <p>
              ${dataProject[index].description}
              </p>
            </div>

            <div class="logo-icon">
                <i class="fa-brands fa-${dataProject[index].nodejs}"></i>
                <i class="fa-brands fa-${dataProject[index].react}"></i>
                <i class="fa-brands fa-${dataProject[index].java}"></i>
                <i class="fa-brands fa-${dataProject[index].python}"></i>
            </div>

            <div class="btn-group">
                <div class="btn-edit">
                  <button>edit</button>
                </div>
                
                <div class="btn-delete">
                  <button>delete</button>
                </div>
            </div>
           
          </div>
        </div>

        

      
        `
    }
}
