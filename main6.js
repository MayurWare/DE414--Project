
showNotes6();

// If user adds a note, add it to the localStorage
let addBtn6 = document.getElementById("addBtn6");
addBtn6.addEventListener("click", function (e) {
    let addTxt6 = document.getElementById("addTxt6");
    let addTxt16 = document.getElementById("addTxt16");
    let p = new Date();
    let a = p.getDate();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let b = months[p.getMonth()];
    let c = p.getFullYear();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = days[p.getDay()];
    let notes6 = localStorage.getItem("notes6");
    if (notes6 == null) {
        notesObj6 = [];
    } else {
        notesObj6 = JSON.parse(notes6);
    }
    notesObj6.push([addTxt6.value, addTxt16.value, p, d, b, a, c]);
    localStorage.setItem("notes6", JSON.stringify(notesObj6));
    addTxt6.value = "";
    addTxt16.value = "";
    showNotes6();
});

// Function to show elements from localStorage
function showNotes6() {
    let notes6 = localStorage.getItem("notes6");
    if (notes6 == null) {
        notesObj6 = [];
    } else {
        notesObj6 = JSON.parse(notes6);
    }
    let html6 = "";
    notesObj6.forEach(function (element, index) {
        html6 += `
            <div class="noteCard my-2 mx-2 card" style="width: 21rem; display: flex; margin: 3px;">
                    <div class="card-body">
                        <h6 class="card-title">Note ${index + 1}</h6>
                        <p class="card-text" style="text-transform: none;"><h5 style="text-transform: none;">${element[0]}</h5></p>
                        <h6 style="text-transform: none;"><p>Commented By :</p>${element[1]}</h6>
                        <h6 style="text-transform: none;"><p>Time :</p><small>${element[3]} | ${element[4]} ${element[5]}, ${element[6]}</small></h6>
                    </div>
                </div>`;
    });
    let notesElm6 = document.getElementById("notes6");
    if (notesObj6.length != 0) {
        notesElm6.innerHTML = html6;
    } else {
        notesElm6.innerHTML = `Nothing to show! Use "Add a comment" section above to add notes.`;
    }
}



