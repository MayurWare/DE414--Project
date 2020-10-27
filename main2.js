showNotes2();

// If user adds a note, add it to the localStorage
let addBtn2 = document.getElementById("addBtn2");
addBtn2.addEventListener("click", function (e) {
    let addTxt2 = document.getElementById("addTxt2");
    let addTxt12 = document.getElementById("addTxt12");
    let p = new Date();
    let a = p.getDate();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let b = months[p.getMonth()];
    let c = p.getFullYear();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = days[p.getDay()];
    let notes2 = localStorage.getItem("notes2");
    if (notes2 == null) {
        notesObj2 = [];
    } else {
        notesObj2 = JSON.parse(notes2);
    }
    notesObj2.push([addTxt2.value, addTxt12.value, p, d, b, a, c]);
    localStorage.setItem("notes2", JSON.stringify(notesObj2));
    addTxt2.value = "";
    addTxt12.value = "";
    showNotes2();
});

// Function to show elements from localStorage
function showNotes2() {
    let notes2 = localStorage.getItem("notes2");
    if (notes2 == null) {
        notesObj2 = [];
    } else {
        notesObj2 = JSON.parse(notes2);
    }
    let html2 = "";
    notesObj2.forEach(function (element, index) {
        html2 += `
            <div class="noteCard my-2 mx-2 card" style="width: 21rem; display: flex; margin: 3px;">
                    <div class="card-body">
                        <h6 class="card-title">Note ${index + 1}</h6>
                        <p class="card-text" style="text-transform: none;"><h5 style="text-transform: none;">${element[0]}</h5></p>
                        <h6 style="text-transform: none;"><p>Commented By :</p>${element[1]}</h6>
                        <h6 style="text-transform: none;"><p>Time :</p><small>${element[3]} | ${element[4]} ${element[5]}, ${element[6]}</small></h6>
                    </div>
                </div>`;
    });
    let notesElm2 = document.getElementById("notes2");
    if (notesObj2.length != 0) {
        notesElm2.innerHTML = html2;
    } else {
        notesElm2.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}



