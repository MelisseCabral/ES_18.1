$(function () {
    var db = firebase.firestore();

    // Campos cadastro de area
    var nome_area_add = document.getElementById("nome_area_add");
    var desc_area_add = document.getElementById("desc_area_add");
    var data_inicio_area_add = document.getElementById("data_inicio_area_add");
    var data_fim_area_add = document.getElementById("data_fim_area_add");

    // insert('areaConcentracao', {nomeArea: nome_area_add.value, descricao: desc_area_add.value, 
    //dataInicio:  data_inicio_area_add.value, dataFim: data_fim_area_add.value })

    document.getElementById("hdrbtn").addEventListener('click', function () {
        insertData('usuarios/Melisse/Test', { email: 'Mil.com', nome: 'faza', });
        snackbar("added");
    });

    function getData(path) {
        db.collection(path).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        });
    }
    function insertData(path, obj) {
        db.collection(path).add(obj)
            .then(function (docRef) {
            })
            .catch(function (error) {
                snackbar(error);
            });
    }

    //funções banco de dados de listagem


    var listaProf = db.collection('professores').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.idProf, "=>", doc.data());
        });
    }).catch(function (error) {
        snackbar(error);
    });
    console.log(listaProf);
    var listaFinanciadores = db.collection('financers').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.idProf, "=>", doc.data());
        });
    }).catch(function (error) {
        snackbar(error);
    });

    var listaDiscentes = db.collection('discentes').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.idProf, "=>", doc.data());
        });
    }).catch(function (error) {
        snackbar(error);
    });

    var listaAreaConcentracao = db.collection('areaConcentracao').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.idProf, "=>", doc.data());
        });
    }).catch(function (error) {
        snackbar(error); console.log("Erro ao acessar documentos: ", error);
    });

    var listaExternos = db.collection('externos').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.idProf, "=>", doc.data());
        });
    }).catch(function (error) {
        snackbar(error);
    });

    var listaLinhaPesquisa = db.collection('linhaPesquisa').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.idProf, "=>", doc.data());
        });
    }).catch(function (error) {
        snackbar(error);
    });

    var listaProducaoIntel = db.collection('producaoIntel').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.idProf, "=>", doc.data());
        });
    }).catch(function (error) {
        snackbar(error);
    });

    var listaProgramaFomento = db.collection('programaFomento').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.idProf, "=>", doc.data());
        });
    }).catch(function (error) {
        snackbar(error);
    });

    var listaProjetos = db.collection('projeto').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.idProf, "=>", doc.data());
        });
    }).catch(function (error) {
        snackbar(error);
    });

    var listaTcc = db.collection('tcc').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.idProf, "=>", doc.data());
        });
    }).catch(function (error) {
        snackbar(error);
    });
});