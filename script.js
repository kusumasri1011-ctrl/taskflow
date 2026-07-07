

function saveWater() {
    let glass = document.getElementById("glass").value;

    if (glass == "") {
        alert("Enter number of glasses");
        return;
    }

    document.getElementById("result").innerHTML =
        "You drank " + glass + " glass(es) today.";
}