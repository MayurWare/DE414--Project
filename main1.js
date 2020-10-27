
showNotes1();

// If user adds a note, add it to the localStorage
let addBtn1 = document.getElementById("addBtn1");
addBtn1.addEventListener("click", function (e) {
    let addTxt1 = document.getElementById("addTxt1");
    let addTxt11 = document.getElementById("addTxt11");
    let p = new Date();
    let a = p.getDate();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let b = months[p.getMonth()];
    let c = p.getFullYear();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = days[p.getDay()];
    let notes1 = localStorage.getItem("notes1");
    if (notes1 == null) {
        notesObj1 = [];
    } else {
        notesObj1 = JSON.parse(notes1);
    }
    notesObj1.push([addTxt1.value, addTxt11.value, p, d, b, a, c]);
    localStorage.setItem("notes1", JSON.stringify(notesObj1));
    addTxt1.value = "";
    addTxt11.value = "";
    showNotes1();
});

// Function to show elements from localStorage
function showNotes1() {
    let notes1 = localStorage.getItem("notes1");
    if (notes1 == null) {
        notesObj1 = [];
    } else {
        notesObj1 = JSON.parse(notes1);
    }
    let html1 = "";
    notesObj1.forEach(function (element, index) {
        html1 += `
            <div class="noteCard my-2 mx-2 card" style="width: 21rem; display: flex; margin: 3px;">
                    <div class="card-body">
                        <h6 class="card-title">Note ${index + 1}</h6>
                        <p class="card-text" style="text-transform: none;"><h5 style="text-transform: none;">${element[0]}</h5></p>
                        <h6 style="text-transform: none;"><p>Commented By :</p>${element[1]}</h6>
                        <h6 style="text-transform: none;"><p>Time :</p><small>${element[3]} | ${element[4]} ${element[5]}, ${element[6]}</small></h6>
                    </div>
                </div>`;
    });
    let notesElm1 = document.getElementById("notes1");
    if (notesObj1.length != 0) {
        notesElm1.innerHTML = html1;
    } else {
        notesElm1.innerHTML = `Nothing to show! Use "Add a comment" section above to add notes.`;
    }
}



