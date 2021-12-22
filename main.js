let size_var = document.getElementById("size_of_array")
let array_size = size_var.value;
let generate_var = document.getElementById("generate_array");
let speed_var = document.getElementById("speed_of_algo");

let butts_algos = document.querySelectorAll(".algos button");

let div_sizes = [];
let divs = [];
let margin_size;
let cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

//Array generation and updation.

generate_var.addEventListener("click", generate_array);
size_var.addEventListener("input", update_array_size);
stop_var.addEventListener("click",stopFunction)



function generate_array() {
    cont.innerHTML = "";

    for (let i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (size_var.max - size_var.min)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;

        divs[i].style = " margin:0% " + margin_size + "%; background-color:blue; width: " + (100 / array_size - (2 * margin_size)) + "%; height: " + (div_sizes[i]) + "%;";


    }

}

function update_array_size() {
    array_size = size_var.value;
    generate_array();
}

window.onload = update_array_size();

//Running the appropriate algorithm.
for (let i = 0; i < butts_algos.length; i++) {
    butts_algos[i].addEventListener("click", runalgo);
}

function disable_buttons() {
    // inp_gen.style.cursor=auto
    for (let i = 0; i < butts_algos.length-1; i++) {
        butts_algos[i].classList = [];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled = true;
        size_var.disabled = true;
        generate_var.disabled = true;
        speed_var.disabled = true;
    }
}

function runalgo() {
    disable_buttons();

    this.classList.add("butt_selected");
    switch (this.innerHTML) {
        case "Bubble": Bubble();
            break;
        case "Selection": Selection_sort();
            break;
        case "Insertion": Insertion();
            break;
        case "Merge": Merge();
            break;
        case "Quick": Quick();
            break;
        case "Heap": Heap();
            break;
    }
}