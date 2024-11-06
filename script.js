const button = document.querySelector(".button");
const result = document.querySelector(".result-value");
const Dot1 = document.querySelector(".dot1-value");
const Dot2 = document.querySelector(".dot2-value");

function calculatePossibility(length) {
    dot1 = Math.floor(Math.random() * length);
    dot2 = Math.floor(Math.random() * length);

    Dot1.innerHTML = dot1;
    Dot2.innerHTML = dot2;

    if (
        (dot1 > length / 2 && dot2 > length / 2) ||
        (dot1 < length / 2 && dot2 < length / 2)
    ) {
        result.innerHTML = "no balance";
    } else {
        result.innerHTML = "balance is";
    }

    console.log(dot1, dot2);
}

button.addEventListener("click", () => {
    const input = document.getElementById("length-input").value;
    calculatePossibility(input);
});
