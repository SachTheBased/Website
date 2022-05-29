function Onload () {
    let smoke = parseInt(localStorage.getItem("smoke"));

    if (smoke == null) {
        localStorage.setItem("smoke", parseInt(0));
    } else if (isNaN(prayer)) {
        localStorage.setItem("smoke", parseInt(1));
    }

    document.getElementById("meth_smoked").innerHTML = localStorage.getItem("smoke");
}

function Smoke () {
    localStorage.setItem("smoke", parseInt(localStorage.getItem("smoke"))+1);

    document.getElementById("meth_smoked").innerHTML = localStorage.getItem("smoke");
}