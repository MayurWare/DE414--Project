
showNotes4();

// If user adds a note, add it to the localStorage
let addBtn4 = document.getElementById("addBtn4");
addBtn4.addEventListener("click", function (e) {
    let addTxt4 = document.getElementById("addTxt4");
    let addTxt14 = document.getElementById("addTxt14");
    let p = new Date();
    let a = p.getDate();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let b = months[p.getMonth()];
    let c = p.getFullYear();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = days[p.getDay()];
    let notes4 = localStorage.getItem("notes4");
    if (notes4 == null) {
        notesObj4 = [];
    } else {
        notesObj4 = JSON.parse(notes4);
    }
    notesObj4.push([addTxt4.value, addTxt14.value, p, d, b, a, c]);
    localStorage.setItem("notes4", JSON.stringify(notesObj4));
    addTxt4.value = "";
    addTxt14.value = "";
    showNotes4();
});

// Function to show elements from localStorage
function showNotes4() {
    let notes4 = localStorage.getItem("notes4");
    if (notes4 == null) {
        notesObj4 = [];
    } else {
        notesObj4 = JSON.parse(notes4);
    }
    let html4 = "";
    notesObj4.forEach(function (element, index) {
        html4 += `
            <div class="noteCard my-2 mx-2 card" style="width: 21rem; display: flex; margin: 3px;">
                    <div class="card-body">
                        <h6 class="card-title">Note ${index + 1}</h6>
                        <p class="card-text" style="text-transform: none;"><h5 style="text-transform: none;">${element[0]}</h5></p>
                        <h6 style="text-transform: none;"><p>Commented By :</p>${element[1]}</h6>
                        <h6 style="text-transform: none;"><p>Time :</p><small>${element[3]} | ${element[4]} ${element[5]}, ${element[6]}</small></h6>
                    </div>
                </div>`;
    });
    let notesElm4 = document.getElementById("notes4");
    if (notesObj4.length != 0) {
        notesElm4.innerHTML = html4;
    } else {
        notesElm4.innerHTML = `Nothing to show! Use "Add a comment" section above to add notes.`;
    }
}



