
    let root_record = ['shimla','chandigarh','delhi','una','dehradun']
localStorage.setItem('roots', JSON.stringify(root_record));
let root_record1 = ['delhi','una','dehradun','shimla','chandigarh']
localStorage.setItem('roots1', JSON.stringify(root_record1));

let from= document.getElementById("bus")
let to= document.getElementById("bus1")

function rootSearch(){
    if(from.value==to.value)
    {
     document.getElementById("error3").innerHTML="From and To Destinations Are Same";
    }
    else{
    document.getElementById("error3").innerHTML="";
    let td=document.createElement("tr")
    td.innerHTML=bus_record_from["busname"];
        tbl1.appendChild(td);
    }
}
let bus_record_from = [
    {
        "busname":"HRTC",
        "fromroot":"chandigarh",
    }
]
localStorage.setItem('busrootfrom', JSON.stringify(bus_record_from));

let bus_record_to=[{
    "busname":"HRTC",
    "toroot":"shimla"
}]
localStorage.setItem('busrootto', JSON.stringify(bus_record_to));