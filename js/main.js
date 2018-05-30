//Evento de clicks em itens do menu inicial
var divs = document.querySelectorAll(".option");

for(var i=0; i<divs.length; i++) {
    divs[i].addEventListener('click', function(){       
        var id_ = this.id + "_panel";
        var div = document.getElementById(id_);
        hiddenAllPanels();
        div.style.display = "-webkit-box";
        changeTitleScreen("Inicio");
        closeMenuMobile();
    })
}
var panels = document.querySelectorAll(".panel");

document.getElementById('item-drawer-inicio').addEventListener('click', function(){
    hiddenAllPanels();
    document.getElementById('inicio_panel').style.display = "-webkit-box";
    changeTitleScreen("Inicio");
});
document.getElementById('item-drawer-my_account').addEventListener('click', function(){
    hiddenAllPanels();
    document.getElementById('my_account_panel').style.display = "-webkit-box";
    changeTitleScreen("Minha conta");
});
document.getElementById('item-drawer-publications').addEventListener('click', function(){
    hiddenAllPanels();
    document.getElementById('publications_panel').style.display = "-webkit-box";
    changeTitleScreen("Minha conta");
});
document.getElementById('item-drawer-solicitations').addEventListener('click', function(){
    hiddenAllPanels();
    document.getElementById('solicitacoes_panel').style.display = "-webkit-box";
    changeTitleScreen("Minha conta");
    document.getElementsByClassName("mdl-layout__obfuscator is-visible").click;
});
document.getElementById("estatisticas_panel").addEventListener('click', function(){

});

function hiddenAllPanels(){
    for(var i=0; i<panels.length; i++) {
        panels[i].style.display = "none";
    }
}

function closeMenuMobile(){
    var menu = document.getElementById("container-menu");
}

function changeTitleScreen(titleScreen_var){
    var titleScreen = document.getElementById("title-screen");
    titleScreen.innerHTML = titleScreen_var;
}

function logout(){

}
