let from = document.getElementById("bus")
let to = document.getElementById("bus1")
let loginuser=document.getElementById("loginuser");

// Chandigarh To Shimla Bus List
let chandigarh_to_shimla = [
    {
        bname: 'HRTC', from: 'Chandigarh', to: 'Shimla', time: '01:30 PM', amount: '250/-'
    },
    {
        bname: 'HRTC', from: 'Chandigarh', to: 'Shimla', time: '02:30 PM', amount: '250/-'
    }
];
localStorage.setItem('chandigarh_to_shimla', JSON.stringify(chandigarh_to_shimla));

// Shimla To Chandigarh Bus List
let shimla_to_chandigarh = [
    {
        bname: 'HRTC', from: 'Shimla', to: 'Chandigarh', time: '12:30 PM', amount: '250/-'
    },
    {
        bname: 'HRTC', from: 'Shimla', to: 'Chandigarh', time: '04:00 PM', amount: '250/-'
    }
];
localStorage.setItem('shimla_to_chandigarh', JSON.stringify(shimla_to_chandigarh));

// chandigarh_to_una Bus List
let chandigarh_to_una = [
    {
        bname: 'HRTC', from: 'Chandigarh', to: 'Una', time: '01:30 PM', amount: '350/-'
    },
    {
        bname: 'HRTC', from: 'Chandigarh', to: 'Una', time: '02:30 PM', amount: '350/-'
    },
];
localStorage.setItem('chandigarh_to_una', JSON.stringify(chandigarh_to_una));

// una_to_chandigarh Bus List
let una_to_chandigarh = [
    {
        bname: 'HRTC', from: 'Una', to: 'Chandigarh', time: '10:45 AM', amount: '350/-'
    },
    {
        bname: 'HRTC', from: 'Una', to: 'Chandigarh', time: '11:30 AM', amount: '350/-'
    }
];
localStorage.setItem('una_to_chandigarh', JSON.stringify(una_to_chandigarh));

// chandigarh_to_Delhi Bus List
let chandigarh_to_delhi = [
    {
        bname: 'CTU', from: 'Chandigarh', to: 'Delhi', time: '11:30 AM', amount: '400/-'
    },
    {
        bname: 'HRTC', from: 'Chandigarh', to: 'Delhi', time: '03:00 PM', amount: '400/-'
    }
];
localStorage.setItem('chandigarh_to_delhi', JSON.stringify(chandigarh_to_delhi));
// Delhi_to_Chandigarh Bus List
let delhi_to_chandigarh = [
    {
        bname: 'CTU', from: 'Delhi', to: 'Chandigarh', time: '09:30 AM', amount: '400/-'
    },
    {
        bname: 'HRTC', from: 'Delhi', to: 'Chandigarh', time: '01:00 PM', amount: '400/-'
    }
];
localStorage.setItem('delhi_to_chandigarh', JSON.stringify(delhi_to_chandigarh));
// Shimla To Una Bus List
let shimal_to_una = [
    {
        bname: 'HRTC', from: 'Shimla', to: 'Una', time: '09:30 AM', amount: '200/-'
    },
    {
        bname: 'HRTC', from: 'Shimla', to: 'Una', time: '01:00 PM', amount: '200/-'
    }
];
localStorage.setItem('shimal_to_una', JSON.stringify(shimal_to_una));
// Una To Shimla Bus List
let una_to_shimla = [
    {
        bname: 'HRTC', from: 'Una', to: 'Shimla', time: '11:30 AM', amount: '200/-'
    },
    {
        bname: 'HRTC', from: 'Una', to: 'Shimla', time: '04:00 PM', amount: '200/-'
    }
];
localStorage.setItem('una_to_shimla', JSON.stringify(una_to_shimla));



function rootSearch() {
    if (from.value==="Select Destination From" && to.value==="Select Destination To"
    || from.value==="Shimla" && to.value==="Shimla"|| from.value==="Una" && to.value==="Una"
    || from.value==="Chandigarh" && to.value==="Chandigarh"
    || from.value==="Delhi" && to.value==="Delhi" 
    || from.value==="Select Destination From" && to.value==="Shimla"
    || from.value==="Select Destination From" && to.value==="Chandigarh"
    || from.value==="Select Destination From" && to.value==="Delhi"
    || from.value==="Select Destination From" && to.value==="Una"
    || from.value==="Shimla" && to.value==="Select Destination To"
    || from.value==="Chandigarh" && to.value==="Select Destination To"
    || from.value==="Una" && to.value==="Select Destination To"
    || from.value==="Delhi" && to.value==="Select Destination To") {
        document.getElementById('error3').innerHTML = "From and To Destinations Are Same";
    } else if (from.value === "Chandigarh" && to.value === "Una") {
        document.getElementById('error3').innerHTML = '';
        let list = JSON.parse(localStorage.getItem('chandigarh_to_una'));
        renderTable(list);
    }
    else if (from.value === "Una" && to.value === "Chandigarh") {
        document.getElementById('error3').innerHTML = '';
        let list = JSON.parse(localStorage.getItem('una_to_chandigarh'));
        renderTable(list);
    }
    else if (from.value === "Chandigarh" && to.value === "Delhi") {
        document.getElementById('error3').innerHTML = '';
        let list = JSON.parse(localStorage.getItem('chandigarh_to_delhi'));
        renderTable(list);
    }
    else if (from.value === "Delhi" && to.value === "Chandigarh") {
        document.getElementById('error3').innerHTML = '';
        let list = JSON.parse(localStorage.getItem('delhi_to_chandigarh'));
        renderTable(list);
    }
    else if (from.value === "Shimla" && to.value === "Una") {
        document.getElementById('error3').innerHTML = '';
        let list = JSON.parse(localStorage.getItem('shimal_to_una'));
        renderTable(list);
    }
    else if (from.value === "Una" && to.value === "Shimla") {
        document.getElementById('error3').innerHTML = '';
        let list = JSON.parse(localStorage.getItem('una_to_shimla'));
        renderTable(list);
    }
    else if (from.value === "Una" && to.value === "Delhi") {
        alert ("No Bus Avalable !!");
    }
    else if (from.value === "Delhi" && to.value === "Una") {
        alert ("No Bus Avalable !!");
    }
    else if (from.value === "Shimla" && to.value === "Delhi") {
        alert ("No Bus Avalable !!");
    }
    else if (from.value === "Delhi" && to.value === "Shimla") {
        alert ("No Bus Avalable !!");
    }
    else if (from.value === "Shimla" && to.value === "Chandigarh") {
        document.getElementById('error3').innerHTML = '';
        let list = JSON.parse(localStorage.getItem('shimla_to_chandigarh'));
        renderTable(list);
    }
    else {
        document.getElementById('error3').innerHTML = '';
        let list = JSON.parse(localStorage.getItem('chandigarh_to_shimla'));
        renderTable(list);
    }
}

function renderTable(list) {
    let render = "<table class='table-bordered table-hover bg-info'>";
    render += "<tr><th>Bus Name</th><th>From</th><th>To</th><th>Time</th><th>Amount</th></tr>";

    for (let i = 0; i < list.length; i++) {
        render += "<tr>";
        render += "<td>" + list[i].bname + "</td>";
        render += "<td>" + list[i].from + "</td>";
        render += "<td>" + list[i].to + "</td>";
        render += "<td>" + list[i].time + "</td>";
        render += "<td>" + list[i].amount + "<a href='bus_sheet.html' class='btn btn-outline-dark'>Select Seats</a></td>";
        render += "</tr>";
    }

    render += "</table>";
    document.getElementById("tbl1").innerHTML = render;
}
