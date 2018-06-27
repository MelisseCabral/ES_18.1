$(function () {
    var db = firebase.firestore();

    var active_chip = 'financiador';

    var btn_insertion_db = document.getElementById('btnCadastro_bd');

    // Campos cadastro de area
    var nome_area_add = document.getElementById("nome_area_add");
    var desc_area_add = document.getElementById("desc_area_add");
    var data_inicio_area_add = document.getElementById("data_inicio_area_add");
    var data_fim_area_add = document.getElementById("data_fim_area_add");

    // insert('areaConcentracao', {nomeArea: nome_area_add.value, descricao: desc_area_add.value, 
    //dataInicio:  data_inicio_area_add.value, dataFim: data_fim_area_add.value })

    btn_insertion_db.addEventListener('click', function () {
        insertData(active_chip);
        snackbar("added");
    });

    document.getElementById("refresh_professor").addEventListener('click', function () {
        atualizaProfessoresTable();
    });


    function getData(path) {
        db.collection(path).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        });
    }
    function insertData(path) {

        if (path == 'area') {
            path = 'areaConcentracao';
            obj = {
                dataFim: data_fim_area_add.value,
                dataInicio: data_inicio_area_add.value,
                descricao: desc_area_add.value,
                idArea: "01",
                nome: nome_area_add.value
            }
            console.log(obj)
        }

        else if (path == 'financiador') {
            path = 'financers';
        }
        else if (path == 'fomento') {
            path = 'programaFomento';
        }
        else if (path == 'linha') {
            path = 'linhaPesquisa';
        }
        else if (path == 'professor') {
            path = 'professores';
        }
        else if (path == 'discente') {
            path = 'discentes';
        }
        else if (path == 'projeto') {
            path = 'projetos';
        }
        else if (path == 'participante-ext') {
            path = 'externos';
        }
        else if (path == 'tcc') {

        }
        else if (path == 'producao') {
            path = 'producaoIntel';
        }

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
            $('#professor-table tbody tr').remove();

            querySnapshot.forEach(function (doc) {

                var content = '';

                content += '<tr>';
                content += '<td></td>';
                content += '<td class="mdl-data-table__cell--non-numeric">25</td>';
                content += '<td>' + doc.data().nome + '</td>'; //column1
                content += '<td>' + doc.data().tipoDocumento + '</td>';
                content += '<td>' + doc.data().numDocumento + '</td>';
                content += '<td>' + doc.data().dataNasc + '</td>';
                content += '<td>' + doc.data().sexo + '</td>';
                content += '<td>' + doc.data().nomeSocial + '</td>'; //column1
                content += '<td>' + doc.data().nacionalidade + '</td>';
                content += '<td>' + doc.data().bolsaPP + '</td>';
                content += '<td>' + doc.data().email + '</td>';//column2
                content += '<td>' + doc.data().nivel + '</td>';
                content += '<td>' + doc.data().regimeTrabalho + '</td>';
                content += '<td>' + doc.data().cargaHorariaSemanal + '</td>';
                content += '</tr>';

                $('#professor-table').append(content);
            });

        }).catch(function (error) {
            snackbar(error);
        });
    }

    function atualizaFinancersTable() {
        db.collection('financers').get().then(function (querySnapshot) {
            $('#financers-table tbody tr').remove();
            querySnapshot.forEach(function (doc) {
                var content = '';

                content += '<tr>';
                content += '<td></td>';
                content += '<td class="mdl-data-table__cell--non-numeric">25</td>';
                content += '<td></td>';
                content += '<td>' + doc.data().nomeFantasia + '</td>';
                content += '<td>' + doc.data().razaoSocial + '</td>';
                content += '<td>' + doc.data().cnpj + '</td>';
                content += '<td>' + doc.data().pais + '</td>'; //column1
                content += '<td>' + doc.data().statusJuri + '</td>';
                content += '</tr>';

                $('#financers-table').append(content);
            });
        }).catch(function (error) {
            snackbar(error);
        });
    }
    function atualizaAlunosTable() {
        db.collection('discentes').get().then(function (querySnapshot) {
            $('#aluno-table body tr').remove();
            querySnapshot.forEach(function (doc) {
                var content = '';

                content += '<tr>';
                content += '<td></td>';
                content += '<td class="mdl-data-table__cell--non-numeric">25</td>';
                content += '<td>' + doc.data().nome + '</td>'
                content += '<td>' + doc.data().tipoDocumento + '</td>';//tipo do documento
                content += '<td>' + doc.data().numDocumento + '</td>';//numero documento
                content += '<td>' + doc.data().dataNasc + '</td>';//data de nascimento
                content += '<td>' + doc.data().sexo + '</td>';//sexo
                content += '<td>' + doc.data().nomeSocial + '</td>'; //column1
                content += '<td>' + doc.data().nacionalidade + '</td>';
                content += '<td>' + doc.data().deficiencia + '</td>';
                content += '<td>' + doc.data().email + '</td>';//column2
                content += '<td>' + doc.data().nivel + '</td>';
                content += '<td>' + doc.data().situacao + 'r</td>';
                content += '</tr>';

                $('#aluno-table').append(content);
            });
        }).catch(function (error) {
            snackbar(error);
        });
    }
    function atualiaAreaConcentracaoTalbe() {
        db.collection('areaConcentracao').get().then(function (querySnapshot) {
            $('#area-concentracao-table body tr').remove();
            querySnapshot.forEach(function (doc) {
                var content = '';

                content += '<tr>';
                content += '<td></td>';
                content += '<td class="mdl-data-table__cell--non-numeric">25</td>';
                content += '<td>' + doc.data().nome + '</td>';//nome da area de concentracao
                content += '<td>' + doc.data().descricao + '</td>';//descrição da area comunicação
                content += '<td>' + doc.data().dataInicio + '</td>';//data de inicio
                content += '<td>' + doc.data().dataFim + '</td>';//data fim
                content += '</tr>';

                $('#area-contentracao-table').append(content);
            });
        }).catch(function (error) {
            snackbar(error); console.log("Erro ao acessar documentos: ", error);
        });
    }

    function atualizaExternosTable() {
        db.collection('externos').get().then(function (querySnapshot) {
            $('#externos-table body tr').remove();
            querySnapshot.forEach(function (doc) {
                var content = '';

                content += '<tr>';
                content += '<td></td>';
                content += '<td class="mdl-data-table__cell--non-numeric">25</td>';
                content += '<td>' + doc.data().nome + '</td>'//nome do externo
                content += '<td>' + doc.data().tipoDocumento + '</td>';//tipo do documento
                content += '<td>' + doc.data().numDocumento + '</td>';//numero documento
                content += '<td>' + doc.data().dataNasc + '</td>';//data de nascimento
                content += '<td>' + doc.data().sexo + '</td>';//sexo
                content += '<td>' + doc.data().nomeSocial + '</td>'; //column1
                content += '<td>' + doc.data().nacionalidade + '</td>';//nacionalidade
                content += '<td>' + doc.data().paisTitulacao + '</td>';//pais titulação
                content += '<td>' + doc.data().bolsaPP + '</td>';//bolsa projeto pesquisa
                content += '<td>' + doc.data().email + '</td>';//email
                content += '<td>' + doc.data().nivel + '</td>';//nivel
                content += '</tr>';

                $('#externos-table').append(content);
            });
        }).catch(function (error) {
            snackbar(error);
        });
    }

    function atualizaLinhaPesquisaTable() {
        db.collection('linhaPesquisa').get().then(function (querySnapshot) {
            $('#linha-pesquisa-table body tr').remove();
            querySnapshot.forEach(function (doc) {
                var content = '';

                content += '<tr>';
                content += '<td></td>';
                content += '<td class="mdl-data-table__cell--non-numeric">25</td>';
                content += '<td>' + doc.data().nome + '</td>';//nome da linha de pesquisa
                content += '<td>' + doc.data().descricao + '</td>';//descrição da linha de pesquisa
                content += '<td>' + doc.data().dataInicio + '</td>';//data de inicio
                content += '<td>' + doc.data().dataFim + '</td>';//data fim
                content += '</tr>';

                $('#linha-pesquisa-table').append(content);
            });
        }).catch(function (error) {
            snackbar(error);
        });
    }

    function atualizaProducaoIntelTable() {
        db.collection('producaoIntel').get().then(function (querySnapshot) {
            $('#producao-intel-table body tr').remove();
            querySnapshot.forEach(function (doc) {
                var content = '';

                content += '<tr>';
                content += '<td></td>';
                content += '<td class="mdl-data-table__cell--non-numeric">25</td>';
                content += '<td>' + doc.data().titulo + '</td>';//titulo da produção intelectual
                content += '<td>' + doc.data().tipo + '</td>';//tipo da produção intelectual
                content += '<td>' + doc.data().nomeJR + '</td>';//nome jornal revista
                content += '<td>Sérgio, Melisse, Denilson, Anderson, Igor, Ialis</td>';//Autores
                content += '<td>' + doc.data().issn + '</td>';//issn 
                content += '<td>' + doc.data().url + '</td>';//site da produção intelectual
                content += '</tr>';

                $('#producao-intel-table').append(content);
            });
        }).catch(function (error) {
            snackbar(error);
        });
    }

    function atualizaProgramaFomentoTable() {
        db.collection('programaFomento').get().then(function (querySnapshot) {
            $('#programa-fomento-table body tr').remove();
            querySnapshot.forEach(function (doc) {
                var content = '';

                content += '<tr>';
                content += '<td></td>';
                content += '<td class="mdl-data-table__cell--non-numeric">25</td>';
                content += '<td>' + doc.data().nome + '</td>';//nome do programa fomento
                content += '<td>' + doc.data().idFinancer + '</td>';//código programa fomento
                content += '</tr>';

                $('#programa-fomento-table').append(content);
            });
        }).catch(function (error) {
            snackbar(error);
        });
    }

    function atualizaProjetoTable() {
        db.collection('projeto').get().then(function (querySnapshot) {
            $('#projetos-table body tr').remove();
            querySnapshot.forEach(function (doc) {
                var content = '';

                content += '<tr>';
                content += '<td></td>';
                content += '<td class="mdl-data-table__cell--non-numeric">25</td>';
                content += '<td>' + doc.data().nome + '</td>';//nome do projeto
                content += '<td>' + doc.data().naturezaProj + '</td>';//natureza do projeto
                content += '<td>' + doc.data().descricao + '</td>';//Descrição do Projeto
                content += '<td>' + doc.data().situacaoProj + '</td>';//situação do projeto
                content += '</tr>';

                $('#projetos-table').append(content);
            });
        }).catch(function (error) {
            snackbar(error);
        });
    }

    function atualizaTccTable() {
        db.collection('tcc').get().then(function (querySnapshot) {
            $('#tcc-table body tr').remove();
            querySnapshot.forEach(function (doc) {
                var content = '';

                content += '<tr>';
                content += '<td></td>';
                content += '<td class="mdl-data-table__cell--non-numeric">25</td>';
                content += '<td>' + doc.data().titulo + '</td>';//titulo tcc
                content += '<td>' + doc.data().resumo + '</td>';//resumo do tcc
                content += '<td>' + doc.data().idioma + '</td>';//idioma
                content += '<td>' + doc.data().tipoTcc + '</td>';//tipo tcc
                content += '<td>' + doc.data().idAluno + '</td>';//Autores
                content += '<td>' + doc.data().numeroPaginas + '</td>';//numero de paginas
                content += '<td>' + doc.data().expecAtuacao + '</td>';//expectatica de atuação
                content += '</tr>';

                $('#tcc-table').append(content);
            });
        }).catch(function (error) {
            snackbar(error);
        });
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
            active_chip = this.id;
            console.log(active_chip);
        })
    }

});