
showNotes3();

// If user adds a note, add it to the localStorage
let addBtn3 = document.getElementById("addBtn3");
addBtn3.addEventListener("click", function (e) {
    let addTxt3 = document.getElementById("addTxt3");
    let addTxt13 = document.getElementById("addTxt13");
    let p = new Date();
    let a = p.getDate();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let b = months[p.getMonth()];
    let c = p.getFullYear();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = days[p.getDay()];
    let notes3 = localStorage.getItem("notes3");
    if (notes3 == null) {
        notesObj3 = [];
    } else {
        notesObj3 = JSON.parse(notes3);
    }
    notesObj3.push([addTxt3.value, addTxt13.value, p, d, b, a, c]);
    localStorage.setItem("notes3", JSON.stringify(notesObj3));
    addTxt3.value = "";
    addTxt13.value = "";
    showNotes3();
});

// Function to show elements from localStorage
function showNotes3() {
    let notes3 = localStorage.getItem("notes3");
    if (notes3 == null) {
        notesObj3 = [];
    } else {
        notesObj3 = JSON.parse(notes3);
    }
    let html3 = "";
    notesObj3.forEach(function (element, index) {
        html3 += `
            <div class="noteCard my-2 mx-2 card" style="width: 21rem; display: flex; margin: 3px;">
                    <div class="card-body">
                        <h6 class="card-title">Note ${index + 1}</h6>
                        <p class="card-text" style="text-transform: none;"><h5 style="text-transform: none;">${element[0]}</h5></p>
                        <h6 style="text-transform: none;"><p>Commented By :</p>${element[1]}</h6>
                        <h6 style="text-transform: none;"><p>Time :</p><small>${element[3]} | ${element[4]} ${element[5]}, ${element[6]}</small></h6>
                    </div>
                </div>`;
    });
    let notesElm3 = document.getElementById("notes3");
    if (notesObj3.length != 0) {
        notesElm3.innerHTML = html3;
    } else {
        notesElm3.innerHTML = `Nothing to show! Use "Add a comment" section above to add notes.`;
    }
}



