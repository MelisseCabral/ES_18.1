function openModal() {
    document.getElementById("new-add-panel").style.display = "-webkit-box";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeModal() {
    document.getElementById("new-add-panel").style.display = "none";
}

function confirmAdd() {
    closeModal()
}
function cleanFieldModal() {

}

document.getElementById("btnCadastro").addEventListener('click', function () {
    //Proceder cadastro
    closeModal();
});
document.getElementById("cancel-add").addEventListener('click', function () {
    closeModal();
});