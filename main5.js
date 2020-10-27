
showNotes5();

// If user adds a note, add it to the localStorage
let addBtn5 = document.getElementById("addBtn5");
addBtn5.addEventListener("click", function (e) {
    let addTxt5 = document.getElementById("addTxt5");
    let addTxt15 = document.getElementById("addTxt15");
    let p = new Date();
    let a = p.getDate();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let b = months[p.getMonth()];
    let c = p.getFullYear();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = days[p.getDay()];
    let notes5 = localStorage.getItem("notes5");
    if (notes5 == null) {
        notesObj5 = [];
    } else {
        notesObj5 = JSON.parse(notes5);
    }
    notesObj5.push([addTxt5.value, addTxt15.value, p, d, b, a, c]);
    localStorage.setItem("notes5", JSON.stringify(notesObj5));
    addTxt5.value = "";
    addTxt15.value = "";
    showNotes5();
});

// Function to show elements from localStorage
function showNotes5() {
    let notes5 = localStorage.getItem("notes5");
    if (notes5 == null) {
        notesObj5 = [];
    } else {
        notesObj5 = JSON.parse(notes5);
    }
    let html5 = "";
    notesObj5.forEach(function (element, index) {
        html5 += `
            <div class="noteCard my-2 mx-2 card" style="width: 21rem; display: flex; margin: 3px;">
                    <div class="card-body">
                        <h6 class="card-title">Note ${index + 1}</h6>
                        <p class="card-text" style="text-transform: none;"><h5 style="text-transform: none;">${element[0]}</h5></p>
                        <h6 style="text-transform: none;"><p>Commented By :</p>${element[1]}</h6>
                        <h6 style="text-transform: none;"><p>Time :</p><small>${element[3]} | ${element[4]} ${element[5]}, ${element[6]}</small></h6>
                    </div>
                </div>`;
    });
    let notesElm5 = document.getElementById("notes5");
    if (notesObj5.length != 0) {
        notesElm5.innerHTML = html5;
    } else {
        notesElm5.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}



