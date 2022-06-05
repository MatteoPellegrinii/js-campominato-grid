
const field = document.getElementById("field_container");



const easyField = document.getElementById("easy");

const mediumField = document.getElementById("medium");

const hardField = document.getElementById("hard");



easyField.addEventListener("click", 
    function () {

        clearField();
        fieldGen(100, " easy_slot");
    }
)

mediumField.addEventListener("click", 
    function () {

        clearField();
        fieldGen(81, " medium_slot");
    }
)

hardField.addEventListener("click", 
    function () {

        clearField();
        fieldGen(49, " hard_slot");
    }
)


function fieldGen(nSlot, slotClass) {
    for (let i = 0; i < nSlot; i++) {

        const slot = document.createElement("div");
        slot.className = "base_slot" + slotClass;

        field.append(slot)

        slot.addEventListener("click",
        function() {
            this.classList.add("checked");
        }
        )
    }

}


function clearField() {
    let oldSlot = field.lastElementChild;
    while (oldSlot) {
        field.removeChild(oldSlot);
        oldSlot = field.lastElementChild;
    }
}