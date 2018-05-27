function showRowsOfTable(idTbody){
    var rowsTable = document.getElementById(idTbody);
    rowsTable.style.display = "inherit";

}

function hiddenRowsOfTable(idTbody){
    var rowsTable = document.getElementById(idTbody);
    rowsTable.style.display = "none";
    rowsTable.style.width = "100%";

}

function changeDisplayTable(idTbody){
    var rowsTable = document.getElementById(idTbody);

    if(rowsTable.style.display == "none"){
        showRowsOfTable(idTbody);
    } else{
        hiddenRowsOfTable(idTbody);
    }
}

function changeArrow(id){

}

function HiddenAll(){
    hiddenRelSaida();
    hiddenRelEntrada();
    hiddenInicio();
    hiddenSolicitacoes();
    hiddenEstatisca();
}

function hiddenRelSaida(){
   var div = document.getElementById("rel_saida");
   div.style.display = "none";
}
function hiddenRelEntrada(){
    var div = document.getElementById("rel_entrada");
   div.style.display = "none";
}
function hiddenInicio(){
    var div = document.getElementById("inicio");
    div.style.display = "none";
}
function hiddenSolicitacoes(){
    var div = document.getElementById("solicitacoes");
    div.style.display = "none";
}
function hiddenEstatisca(){
    var div = document.getElementById("estatistica");
   div.style.display = "none";
}
function openRelEntrada(){
    HiddenAll();
    var div = document.getElementById("rel_entrada");
    div.style.display = "block";
    changeTitleScreen("Relatorios de entrada");
    closeMenuMobile();
}

function openInicio(){
    HiddenAll();
    var div = document.getElementById("inicio");
    div.style.display = "-webkit-box";
    changeTitleScreen("Inicio");
    closeMenuMobile();
}

function openRelSaida(){
    HiddenAll();
    var div = document.getElementById("rel_saida");
    div.style.display = "inherit";
    changeTitleScreen("Relatorios de saída");
    closeMenuMobile();
}
function openSolicitacoes(){
    HiddenAll();
    var div = document.getElementById("solicitacoes");
    div.style.display = "inherit";
    changeTitleScreen("Solicitações");
    closeMenuMobile();
}

function openEstatistica(){
    HiddenAll();
    var div = document.getElementById("estatistica");
    div.style.display = "inherit";
    changeTitleScreen("Estatistica");
    closeMenuMobile();
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
