showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTxt1 = document.getElementById("addTxt1");
    let p = new Date();
    let a = p.getDate();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let b = months[p.getMonth()];
    let c = p.getFullYear();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = days[p.getDay()];
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push([addTxt.value, addTxt1.value, p, d, b, a, c]);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTxt1.value = "";
    showNotes();
});

// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 21rem; display: flex; margin: 3px;">
                    <div class="card-body">
                        <h6 class="card-title">Note ${index + 1}</h6>
                        <p class="card-text" style="text-transform: none;"><h5 style="text-transform: none;">${element[0]}</h5></p>
                        <h6 style="text-transform: none;"><p>Commented By :</p>${element[1]}</h6>
                        <h6 style="text-transform: none;"><p>Time :</p><small>${element[3]} | ${element[4]} ${element[5]}, ${element[6]}</small></h6>
                    </div>
                </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}



