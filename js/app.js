$(function(){
    console.log('test')
    // Initialize Firebase.
    var config = {
        apiKey: "AIzaSyDyAO3KuqpMdJP5hLTe9ZbPaJCenqG2Sb8",
        authDomain: "posgradufc.firebaseapp.com",
        databaseURL: "https://posgradufc.firebaseio.com",
        projectId: "posgradufc",
        storageBucket: "posgradufc.appspot.com",
        messagingSenderId: "775660398938"
    };
    firebase.initializeApp(config);
    const db = firebase.firestore();
    db.settings({timestampsInSnapshots: true});    

    // Control variables;
    var signedout = false;
    var logged = false;

    // Shared variables. 
    var email = null;
    var displayName = null;
    var photoURL = null;
    var uid = null;

    // Firestore variables and constants.
    var firestore = firebase.firestore();
    const dbUser = firestore.collection("users/");
    const dbPublications = firestore.collection("publications/");
    const dbProjects = firestore.collection("projects/");

    //Get Elements
    btnLogin = document.getElementById("login-btn"),
    btnSignUp = document.getElementById("signUp_btn"),
    btnLogout = document.getElementById("btn_logout");

    btnLogin.addEventListener('click', function() {

    //Get email and Pass
    const email = document.getElementById("login-txt").value,
        pass = document.getElementById("password-txt").value,
        auth = firebase.auth();
        console.log(email);
        console.log(pass);
        auth.signInWithEmailAndPassword(email, pass).then(function () {
            logged = true;
            checkAuth();
        }).catch(function (error) {
            console.log("Got an error", error);
        });

    });

    btnSignUp.addEventListener('click', function() {
    //Get Email and confirm password
    const email = document.getElementById("email-signup").value,
    pass = document.getElementById("password-signup").value,
    confirmPass = document.getElementById("confirm-password").value,
    auth = firebase.auth();

    if (pass == confirmPass) {
    const promise = auth.createUserWithEmailAndPassword(email, pass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/invalid-email') {
            snackbar('The email is invalid.');
        }
        if (errorCode == 'auth/weak-password') {
            snackbar('The password is too weak.');
        } else {
            snackbar(errorMessage);
        }
        console.log(error)
    });

    // [START sendemailverification]
    firebase.auth().currentUser.sendEmailVerification().then(function () {
        
        snackbar('Email de verificação enviado!');
    });
    // [END sendemailverification]
    } else {
    snackbar("Senhas não conferem");
    }
    });


    function logout_firebase(){
        
    }
    btnLogout.addEventListener('click', function() {
        firebase.auth().signOut().then(function () {
            logged = false;
            console.log('logout')
            checkAuth();
        }).catch(function (error) {
            console.log("Sign out error", error);
            snackbar(error);
        });
    });


  function checkAuth(){
    if (logged) {
        // User is signed in.
        // Reporting status.
        console.log("Signed in.");
        // Update the database.
        // Redirect to home.
        window.location.href = '/home.html';


    } else {
        // Redirect to login.
        window.location.href= "/index.html";

    
    }
    
  }
    function snackbar(string) {
        var snackbarContainer = document.querySelector('#demo-snackbar-example');
        var data = {
            message: string,
        };
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
    };
})

//funções banco de dados de listagem

var listaProf = db.collection('professores').get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        console.log(doc.idProf, "=>", doc.data());
    });
}).catch(function(error){
    console.log("Erro ao acessar documentos: ", error);
});

var listaFinanciadores = db.collection('financers').get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        console.log(doc.idProf, "=>", doc.data());
    });
}).catch(function(error){
    console.log("Erro ao acessar documentos: ", error);
});

var listaDiscentes = db.collection('discentes').get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        console.log(doc.idProf, "=>", doc.data());
    });
}).catch(function(error){
    console.log("Erro ao acessar documentos: ", error);
});

var listaAreaConcentracao = db.collection('areaConcentracao').get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        console.log(doc.idProf, "=>", doc.data());
    });
}).catch(function(error){
    console.log("Erro ao acessar documentos: ", error);
});

var listaExternos = db.collection('externos').get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        console.log(doc.idProf, "=>", doc.data());
    });
}).catch(function(error){
    console.log("Erro ao acessar documentos: ", error);
});

var listaLinhaPesquisa = db.collection('linhaPesquisa').get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        console.log(doc.idProf, "=>", doc.data());
    });
}).catch(function(error){
    console.log("Erro ao acessar documentos: ", error);
});

var listaProducaoIntel = db.collection('producaoIntel').get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        console.log(doc.idProf, "=>", doc.data());
    });
}).catch(function(error){
    console.log("Erro ao acessar documentos: ", error);
});

var listaProgramaFomento = db.collection('programaFomento').get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        console.log(doc.idProf, "=>", doc.data());
    });
}).catch(function(error){
    console.log("Erro ao acessar documentos: ", error);
});

var listaProjetos = db.collection('projeto').get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        console.log(doc.idProf, "=>", doc.data());
    });
}).catch(function(error){
    console.log("Erro ao acessar documentos: ", error);
});

var listaTcc = db.collection('tcc').get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        console.log(doc.idProf, "=>", doc.data());
    });
}).catch(function(error){
    console.log("Erro ao acessar documentos: ", error);
});

//funções de inserção ao banco de dados


//deveria estar dentro de alguma função??
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('financers').add({
        nomeFantasia: form.nomeFantasia.value,
        cnpj: form.cnpj.value,
        site: form.site.value,
        razaoSocial: form.razaoSocial.value,
        pais: form.pais.value,
        statusJuri: form.statusJuri.value
    })
    form.nomeFantasia.value = '';
    form.cnpj.value = '';
    form.site.value = '';
    form.razaoSocial.value = '';
    form.pais.value = '';
    form.statusJuri.value = '';
});


//insere area concentração
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('areaConcentracao').add({
        nome: form.nome.value,
        descricao: form.descricao.value,
        dataInicio: form.dataInicio.value,
        dataFim: form.dataFim.value,
    })
    form.nome.value = '';
    form.descricao.value = '';
    form.dataInicio.value = '';
    form.dataFim.value = '';
});

//insere aluno (discente)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('discentes').add({
        nome: form.nome.value,
        nomeSocial: form.nomeSocial.value,
        numDocumento: form.numDocumento.value,
        sexo: form.sexo.value,
        situacao: form.situacao.value,
        tipoDocumento: form.tipoDocumento.value,
        nivel: form.nivel.value,
        nacionalidade: form.nacionalidade.value,
        idProdIntel: form.idProdIntel.value,
        idPartPesquisa: form.idPartPesquisa.value,
        idOrientador: form.idOrientador.value,
        idCoOrientador: form.idCoOrientador.value,
        idBolsa: form.idBolsa.value,
        idBancaTcc: form.idBancaTcc.value,
        email: form.email.value,
        deficiencia: form.deficiencia.value,
        dataNasc: form.dataNasc.value,
        dataMat: form.dataMat.value,
        dataInicioBolsa: form.dataInicioBolsa.value,
        dataFimBolsa: form.dataFimBolsa.value,
        dataInicioOrientacao: form.dataInicioOrientacao.value,
        dataFimOrientacao: form.dataFimOrientacao.value,
        dataInicioCoOrientacao: form.dataInicioCoOrientacao.value,
        dataFimCoOrientacao: form.dataFimCoOrientacao.value
    })
        form.nome.value = '';
        form.nomeSocial.value = '';
        form.numDocumento.value = '';
        form.sexo.value = '';
        form.situacao.value = '';
        form.tipoDocumento.value = '';
        form.nivel.value = '';
        form.nacionalidade.value = '';
        form.idProdIntel.value = '';
        form.idPartPesquisa.value = '';
        form.idOrientador.value = '';
        form.idCoOrientador.value = '';
        form.idBolsa.value = '';
        form.idBancaTcc.value = '';
        form.email.value = '';
        form.deficiencia.value = '';
        form.dataNasc.value = '';
        form.dataMat.value = '';
        form.dataInicioBolsa.value = '';
        form.dataFimBolsa.value = '';
        form.dataInicioOrientacao.value = '';
        form.dataFimOrientacao.value = '';
        form.dataInicioCoOrientacao.value = '';
        form.dataFimCoOrientacao.value = '';
});

//adicionar externo
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('externos').add({
        nome: form.nome.value,
        nomeSocial: form.nomeSocial.value,
        numDocumento: form.numDocumento.value,
        sexo: form.sexo.value,
        titulacao: form.titulacao.value,
        paisTitulacao: form.titulacao.value,
        anoTitulacao: form.anoTitulacao.value,
        tipoDocumento: form.tipoDocumento.value,
        nivel: form.nivel.value,
        nacionalidade: form.nacionalidade.value,
        instTitulacao: form.instTitulacao.value,
        instOrigem: form.instOrigem.value,
        idPartPP: form.idPartPP.value,
        idPartIntel: form.idPartIntel.value,
        idBancaTcc: form.idBancaTcc.value,
        email: form.email.value,
        dataNasc: form.dataNasc.value,
        bolsaPP: form.bolsaPP.value
    })
    form.nome.value = '';
    form.nomeSocial.value= '';
    form.numDocumento.value= '';
    form.sexo.value= '';
    form.titulacao.value= '';
    form.titulacao.value= '';
    form.anoTitulacao.value= '';
    form.tipoDocumento.value= '';
    form.nivel.value= '';
    form.nacionalidade.value= '';
    form.instTitulacao.value= '';
    form.instOrigem.value= '';
    form.idPartPP.value= '';
    form.idPartIntel.value= '';
    form.idBancaTcc.value= '';
    form.email.value= '';
    form.dataNasc.value= '';
    form.bolsaPP.value= '';
});

//adiciona liha de pesquisa
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('linhaPesquisa').add({
        nome: form.nome.value,
        idAreaAssiciada: form.idAreaAssiciada.value,
        descricao: form.descricao.value,
        dataInicio: form.dataInicio.value,
        dataFim: form.dataFim.value,
    })
    form.idAreaAssiciada.value = '';
    form.nome.value = '';
    form.descricao.value = '';
    form.dataInicio.value = '';
    form.dataFim.value = '';
});

//adiciona produção intelectual
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('producaoIntel').add({
       vincTcc: form.vincTcc.value,
       url: form.url.value,
       titulo: form.titulo.value,
       tipo: form.tipo.value,
       subTipo: form.subTipo.value,
       numeroPagInic: form.numeroPagInic.value,
       numeroPagFinal: form.numeroPagFinal.value,
       nomeJR: form.nomeJR.value,
       maisRelevante: form.maisRelevante.value,
       issn: form.issn.value,
       doi: form.doi.value,
       autores: form.autores.value,
       ano: form.ano.value
    })
     form.vincTcc.value = '';
       form.url.value = '';
       form.titulo.value = '';
       form.tipo.value = '';
       form.subTipo.value = '';
       form.numeroPagInic.value = '';
       form.numeroPagFinal.value = '';
       form.nomeJR.value = '';
       form.maisRelevante.value = '';
       form.issn.value = '';
       form.doi.value = '';
       form.autores.value = '';
       form.ano.value = '';
});

//adiciona professores
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('professores').add({
        tipoVinculo: form.tipoVinculo.value,
        nome: form.nome.value,
        nomeSocial: form.nomeSocial.value,
        numDocumento: form.numDocumento.value,
        sexo: form.sexo.value,
        dataNascimento: form.dataNascimento.value,
        caragaHorariaSemanal: form.caragaHorariaSemanal.value,
        categoria: form.categoria.value,
        titulacao: form.titulacao.value,
        paisTitulacao: form.titulacao.value,
        anoTitulacao: form.anoTitulacao.value,
        tipoDocumento: form.tipoDocumento.value,
        nivel: form.nivel.value,
        nacionalidade: form.nacionalidade.value,
        instTitulacao: form.instTitulacao.value,
        instOrigem: form.instOrigem.value,
        idProjetosVinculo: form.idProjetosVinculo.value,
        dataInicioVinculo: form.dataInicioVinculo.value,
        dataFimVinculo: form.dataFimVinculo.value,
        idPartBanca: form.idPartBanca.value,
        email: form.email.value,
        dataNasc: form.dataNasc.value,
        bolsaPP: form.bolsaPP.value
    })
        form.tipoVinculo.value = '';
        form.nome.value = '';
        form.nomeSocial.value = '';
        form.numDocumento.value = '';
        form.sexo.value = '';
        form.dataNascimento.value = '';
        form.caragaHorariaSemanal.value = '';
        form.categoria.value = '';
        form.titulacao.value = '';
        form.titulacao.value = '';
        form.anoTitulacao.value = '';
        form.tipoDocumento.value = '';
        form.nivel.value = '';
        form.nacionalidade.value = '';
        form.instTitulacao.value = '';
        form.instOrigem.value = '';
        form.idProjetosVinculo.value = '';
        form.dataInicioVinculo.value = '';
        form.dataFimVinculo.value = '';
        form.idPartBanca.value = '';
        form.email.value = '';
        form.dataNasc.value = '';
        form.bolsaPP.value = '';
});

//adiciona programa fomento

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('programaFomento').add({
        nome: form.nome.value,
        idFinancer: form.idFinancer.value,
    })
    form.idFinancer.value = '';
    form.nome.value = '';
});

//adiciona projeto

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('projetos').add({
        nome: form.nome.value,
        situacaoProj: form.situacaoProj.value,
        naturezaProj: form.naturezaProj.value,
        idTccAss: form.idTccAss.value,
        idProdIntelAss: form.isProdIntelAss.value,
        idLinhaPesquisa: form.idLinhaPesquisa.value,
        idFinancer: form.idFinancer.value,
        idAreaConcentracao: form.idAreaConcentracao.value,
        equipe: form.equipe.value,
        descricao: form.descricao.value
    })
        form.nome.value = '';
        form.situacaoProj.value = '';
        form.naturezaProj.value = '';
        form.idTccAss.value = '';
        form.isProdIntelAss.value = '';
        form.idLinhaPesquisa.value = '';
        form.idFinancer.value = '';
        form.idAreaConcentracao.value = '';
        form.equipe.value = '';
        form.descricao.value = '';
});

//adiciona tcc

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('tcc').add({
        titulo: form.titulo.value,
        tipoVeicEmpr: form.tipoVeicEmpr.value,
        tipoTcc: form.tipoTcc.value,
        tipoInst: form.tipoInst.value,
        resumo: form.resumo.value,
        projetoDePesquisa: form.projetoDePesquisa.value,
        palavrasChave: form.palavrasChave.value,
        numeroPaginas: form.numeroPaginas.value,
        mesmaArea: form.mesmaArea.value,
        membros: form.membros.value,
        idioma: form.idioma.value,
        idOrientador: form.idOrientador.value,
        idLinhaPesquisa: form.idLinhaPesquisa.value,
        idFinanciador: form.idFinanciador.value,
        idAutor: form.idAutor.value,
        idAreaConcentrada: form.idAreaConcentrada.value,
        expecAtuacao: form.expecAtuacao.value,
        dataDefesa: form.dataDefesa.value,
        abstract: form.abstract.value
    })
    form.titulo.value = '';
    form.tipoVeicEmpr.value = '';
    form.tipoTcc.value = '';
    form.tipoInst.value = '';
    form.resumo.value = '';
    form.projetoDePesquisa.value = '';
    form.palavrasChave.value = '';
    form.numeroPaginas.value = '';
    form.mesmaArea.value = '';
    form.membros.value = '';
    form.idioma.value = '';
    form.idOrientador.value = '';
    form.idLinhaPesquisa.value = '';
    form.idFinanciador.value = '';
    form.idAutor.value = '';
    form.idAreaConcentrada.value = '';
    form.expecAtuacao.value = '';
    form.dataDefesa.value = '';
    form.abstract.value = '';
});

//adiciona usuarios

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('usuarios').add({
        nome: form.nome.value,
        email: form.email.value,
        senha: form.senha.value
    })
        form.nome.value = '';
        form.email.value = '';
        form.senha.value = '';
});

//funções de remoção do banco de dados

//removendo professor

cross.addEventListener('click', (e)=>{ //caso para remover o elemento seria apertando um 'x' do lado elemento
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('financers').doc(id).delete();
});

cross.addEventListener('click', (e)=>{ //caso para remover o elemento seria apertando um 'x' do lado elemento
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('areaConcentracao').doc(id).delete();
});

cross.addEventListener('click', (e)=>{ //caso para remover o elemento seria apertando um 'x' do lado elemento
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('discentes').doc(id).delete();
});

cross.addEventListener('click', (e)=>{ //caso para remover o elemento seria apertando um 'x' do lado elemento
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('externos').doc(id).delete();
});

cross.addEventListener('click', (e)=>{ //caso para remover o elemento seria apertando um 'x' do lado elemento
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('linhaPesquisa').doc(id).delete();
});

cross.addEventListener('click', (e)=>{ //caso para remover o elemento seria apertando um 'x' do lado elemento
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('producaoIntel').doc(id).delete();
});

cross.addEventListener('click', (e)=>{ //caso para remover o elemento seria apertando um 'x' do lado elemento
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('professores').doc(id).delete();
});

cross.addEventListener('click', (e)=>{ //caso para remover o elemento seria apertando um 'x' do lado elemento
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('programaFomento').doc(id).delete();
});

cross.addEventListener('click', (e)=>{ //caso para remover o elemento seria apertando um 'x' do lado elemento
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('projetos').doc(id).delete();
});

cross.addEventListener('click', (e)=>{ //caso para remover o elemento seria apertando um 'x' do lado elemento
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('tcc').doc(id).delete();
});

cross.addEventListener('click', (e)=>{ //caso para remover o elemento seria apertando um 'x' do lado elemento
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('usuarios').doc(id).delete();
});