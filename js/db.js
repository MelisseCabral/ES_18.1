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
        atualizaProfessoresTable();
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

    function atualizaProfessoresTable() {
        db.collection('professores').get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                var content = '';

                content += '<tr>';
                content += '<td></td>';
                content += '<td class="mdl-data-table__cell--non-numeric">25</td>';
                content += '<td>RG</td>';
                content += '<td>176238163</td>';
                content += '<td>9/12/1977</td>';
                content += '<td>Masculino</td>';
                content += '<td>' + doc.data().nomeSocial + '</td>'; //column1
                content += '<td>Brasileiro</td>';
                content += '<td>Não</td>';
                content += '<td>' + doc.data().email + '</td>';//column2
                content += '<td>Phd</td>';
                content += '<td>Dedicacao exclusiva</td>';
                content += '<td>40h</td>';
                content += '</tr>';

                $('#ex-table').append(content);
            });

        }).catch(function (error) {
            snackbar(error);
        });
    }

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