//Evento de clicks em itens do menu inicial
var divs = document.querySelectorAll(".option");

for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function () {
        var id_ = this.id + "_panel";
        var div = document.getElementById(id_);
        hiddenAllPanels();
        if (id_ != 'inicio_panel') {
            div.style.display = "block";
        } else {
            div.style.display = "-webkit-box";
        }
        changeTitleScreenById(id_);
        closeMenuMobile();
    })
}

var forms = document.querySelectorAll(".panel_cadastro");
var chips = document.querySelectorAll(".mdl-chip");

for (var i = 0; i < chips.length; i++) {
    chips[i].addEventListener('click', function () {

        var id_form = "form-" + this.id;
        for (var j = 0; j < chips.length; j++) {
            document.getElementById(forms[j].id).style.display = "none";
            document.getElementById(chips[j].id).style.backgroundColor = "#dedede";
        }
        document.getElementById(this.id).style.backgroundColor = "deepskyblue";
        document.getElementById(id_form).style.display = "flex";
    })
}

var panels = document.querySelectorAll(".panel");

document.getElementById('item-drawer-inicio').addEventListener('click', function () {
    hiddenAllPanels();
    document.getElementById('inicio_panel').style.display = "-webkit-box";
    changeTitleScreen("Inicio");
});
document.getElementById('item-drawer-my_account').addEventListener('click', function () {
    hiddenAllPanels();
    document.getElementById('my_account_panel').style.display = "block";
    changeTitleScreen("Minha conta");
});
document.getElementById('item-drawer-publications').addEventListener('click', function () {
    hiddenAllPanels();
    document.getElementById('publications_panel').style.display = "-webkit-box";
    changeTitleScreen("Minha conta");
});
document.getElementById('item-drawer-solicitations').addEventListener('click', function () {
    hiddenAllPanels();
    document.getElementById('solicitacoes_panel').style.display = "-webkit-box";
    changeTitleScreen("Minha conta");
    document.getElementsByClassName("mdl-layout__obfuscator is-visible").click;
});
document.getElementById("estatisticas_panel").addEventListener('click', function () {

});

function hiddenAllPanels() {
    for (var i = 0; i < panels.length; i++) {
        panels[i].style.display = "none";
    }
}

function closeMenuMobile() {
    var menu = document.getElementById("container-menu");
}

function changeTitleScreenById(titleScreen_var) {
    var str;
    switch (true) {
        case titleScreen_var == '':
            str = '';
            break;
        case titleScreen_var == '':
            str = '';
            break;
        default:
            str = 'Inicio';
    }
    var titleScreen = document.getElementById("title-screen");
    titleScreen.innerHTML = str;
}
function changeTitleScreen(titleScreen_var) {
    var titleScreen = document.getElementById("title-screen");
    titleScreen.innerHTML = titleScreen_var;
}

// Snackbar function.
function snackbar(string) {
    var snackbarContainer = document.querySelector('#demo-snackbar-example');
    var data = {
        message: string,
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
};