const rowinput = document.getElementById("row");
const colinput = document.getElementById("col");
const Btn = document.getElementById("btnform");

let rownumber = 0;
let colnumber = 0;

rowinput.addEventListener("change", (e)=>{
    rownumber = e.target.value;
})

colinput.addEventListener("change", (e)=>{
    colnumber = e.target.value;
})

Btn.addEventListener("click", ()=>{
   let table = document.querySelector("table");
        for(let i=1; i<=rownumber; i++){
            let tr = document.createElement("tr");
            for(let j =1; j<=colnumber; j++){
                let td = document.createElement("td");
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }  
});