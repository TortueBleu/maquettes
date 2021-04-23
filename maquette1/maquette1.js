let Who = document.getElementById("Who");
let conso = document.getElementById("conso");
let recolte = document.getElementById("recolte");
let text = document.getElementById("text");


Who.addEventListener("click", truc)
conso.addEventListener("click", truc)
recolte.addEventListener("click", truc)


function truc(event) {
console.log(event.target.id);
    if (event.target.id === "Who") {
        text.innerHTML = "Sed ut perspiciatis unde omnis iste  natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";      
    }
    else if (event.target.id === "conso") {
        
        text.innerHTML = "Sed ut perspiciatis unde omnis iste  natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab";     
    }
    else if (event.target.id === "recolte") {
       
        text.innerHTML = " laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";
    }
}