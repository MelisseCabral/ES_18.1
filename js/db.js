$(function () {
    var db = firebase.firestore();

    var active_chip = 'financiador';

    var btn_insertion_db = document.getElementById('btnCadastro_bd');

    // Campos cadastro de area de concentração
    var nome_area_add = document.getElementById("nome_area_add");
    var desc_area_add = document.getElementById("desc_area_add");
    var data_inicio_area_add = document.getElementById("data_inicio_area_add");
    var data_fim_area_add = document.getElementById("data_fim_area_add");

    // Campos cadastro de Financiador
    var razao_social_finan = document.getElementById("razaoSocialFinancer");
    var nome_fantasia_finan = document.getElementById("nomeFantasiaFinancer");
    var pais_finan = document.getElementById("paisFinancer");
    var site_finan = document.getElementById("siteFinancer");
    var cnpj = document.getElementById("cnpj_finan");
    var status_jur = document.getElementById("status_jur");

    // Programa de Fomento
    var nome_programa = document.getElementById("nomePrograma");
    var id_finan = document.getElementById("finanPrograma");

    // Campos cadastro de Linha de Pesquisa
    var nome_linha = document.getElementById("nome_linha");
    var desc_linha = document.getElementById("desc_linha");
    var date_inicio_linha = document.getElementById("date_inicio_linha");
    var date_fim_linha = document.getElementById("date_fim_linha");
    var id_area_ass = document.getElementById("id_area");

    // Campos cadastro de Professores

    var nome_prof = document.getElementById("nome_prof");
    var nomeSocial_prof = document.getElementById("nome_social_prof");
    var email_prof = document.getElementById("email_prof");
    var dataNasc_prof = document.getElementById("data_nasc_prof");
    var sexo_prof = document.getElementById("sexo_prof");
    var dataInicioVinculo_prof = document.getElementById("date_inicio_prof");
    var dataFimVinculo_prof = document.getElementById("date_fim_prof");
    var categoria_prof = document.getElementById("categ_prof");
    var tipoDocumento_prof = document.getElementById("tipo_doc_prof");
    var numDocumento_prof = document.getElementById("num_doc_prof");
    var nacionalidade_prof = document.getElementById("nacionalidade_prof");
    var bolsaPP_prof = document.getElementById("bolsaPP_prof");
    var cargaHorariaSemanal_prof = document.getElementById("ch_sem_prof");
    var anoTitulaao_prof = document.getElementById("ano_tit_prof");
    var instTitulacao_prof = document.getElementById("pais_tit_prof");
    var paisTitulacao_prof = document.getElementById("inst_tit_prof");
    var intituicaoOrigem_prof = document.getElementById("instOrigem_prof");
    var nivel_prof = document.getElementById("nivel_prof");

    // Campos cadastro de Discentes

    var nome_disc = document.getElementById("nome_disc");
    var nomeSocial_disc = document.getElementById("nome_social_disc");
    var tipoDocumento_disc = document.getElementById("tipo_doc_disc");
    var numDocumento_disc = document.getElementById("num_doc_disc");
    var email_prof_disc = document.getElementById("email_disc");
    var sexo_disc = document.getElementById("sexo_prof");
    var dataNasc_disc = document.getElementById("data_nasc_disc");
    var dataMat_disc = document.getElementById("data_mat_disc");

    var deficiencia_disc = document.getElementById("def_disc");
    var categoria_disc = document.getElementById("categ_disc");
    var nacionalidade_prof = document.getElementById("situacao_disc");
    var situacao_disc = document.getElementById("nasc_disc");
    var idOrient_disc = document.getElementById("id_orient");
    var idPartPesquisa_disc = document.getElementById("id_pesq");
    var idProdIntel_disc = document.getElementById("id_prod_disc");
    var nivel_disc = document.getElementById("nivel_disc");

    var dataInicioBolsa_disc = document.getElementById("date_inicio_bolsa_disc");
    var dataFimBolsa_disc = document.getElementById("date_fim_bolsa_disc");
    var dataInicioOrient_disc = document.getElementById("date_inicio_orient_disc");
    var dataFimOrient_disc = document.getElementById("date_fim_orient_disc");

    // Campos cadastro de Projetos

    var nome_proj = document.getElementById("nome_proj");
    var desc_proj = document.getElementById("desc_proj");
    var id_area_proj = document.getElementById("id_area_proj");
    var id_finan_proj = document.getElementById("id_finan_proj");
    var id_pesq_proj = document.getElementById("id_pesq_proj");
    var id_prod_proj = document.getElementById("id_prod_proj");
    var id_tcc_proj = document.getElementById("id_tcc_proj");
    var nat_proj = document.getElementById("nat_proj");
    var situacao_proj = document.getElementById("situacao_proj");

    btn_insertion_db.addEventListener('click', function () {
        alert('clicked');
        insertData(active_chip);
        active_chip = 'financiador';
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
            snackbar("Adicionado");
            console.log(obj)
        }

        else if (active_chip == 'financiador') {
            path = 'financers';
            obj = {
                cnpj: cnpj.value,
                nomeFantasia: nome_fantasia_finan.value,
                pais: pais_finan.value,
                razaoSocial: razao_social_finan.value,
                site: site_finan.value,
                statusJuri: status_jur.value
            }
        }
        else if (active_chip == 'fomento') {
            console.log(active_chip);
            path = 'programaFomento';
            obj = {
                idFinancer: id_finan.value,
                nome: nome_programa.value,
            }
        }
        else if (path == 'linha') {
            path = 'linhaPesquisa';
            obj = {
                dataFim: date_fim_linha.value,
                dataInicio: date_inicio_linha.value,
                descricao: desc_linha.value,
                idAreaAssociada: id_area_ass.value,
                nome: nome_linha.value
            }
        }
        else if (path == 'professor') {
            path = 'professores';
            obj = {
                nome: nome_prof.value,
                nomeSocial: nomeSocial_prof.value,
                email: email_prof.value,
                dataNascimento: dataNasc_prof.value,
                sexo: sexo_prof.value,
                dataInicioVinculo: dataInicioVinculo_prof.value,
                dataFimVinculo: dataFimVinculo_prof.value,
                categoria: categoria_prof.value,
                tipoDocumento: tipoDocumento_prof.value,
                numDocumento: numDocumento_prof.value,
                nacionalidade: nacionalidade_prof.value,
                bolsaPP: bolsaPP_prof.value,
                cargaHorariaSemanal: cargaHorariaSemanal_prof.value,
                tipoVinculo: '',
                anoTitulaao: anoTitulaao_prof.value,
                instTitulacao: instTitulacao_prof.value,
                paisTitulacao: paisTitulacao_prof.value,
                intituicaoOrigem: intituicaoOrigem_prof.value,
                nivel: nivel_prof.value,

            }
        }
        else if (path == 'discente') {
            path = 'discentes';
            obj = {
                nome: nome_disc.value,
                nomeSocial: nomeSocial_disc.value,
                email: email_prof_disc.value,
                dataNasc: dataNasc_disc.value,
                sexo: sexo_disc.value,
                dataInicioBolsa: dataInicioBolsa_disc.value,
                dataFimBolsa: dataFimBolsa_disc.value,
                dataInicioOrient: dataInicioOrient_disc.value,
                dataFimOrient: dataFimOrient_disc.value,
                dataMat: dataMat_disc.value,
                deficiencia: deficiencia_disc.value,
                categoria: categoria_disc.value,
                tipoDocumento: tipoDocumento_disc.value,
                numDocumento: numDocumento_disc.value,
                nacionalidade: nacionalidade_disc.value,
                situacao: situacao_disc.value,
                idOrientador: idOrient_disc.value,
                idPartPesquisa: idPartPesquisa_disc.value,
                idProdIntel: idProdIntel_disc.value,
                nivel: nivel_disc.value,

            }
        }
        else if (path == 'projeto') {
            path = 'projetos';
            obj = {
                nome: nome_proj.value,
                descricao: desc_proj.value,
                idAreaConcentracao: id_area_proj.value,
                idFinancer: id_finan_proj.value,
                idLinhaPesquisa: id_pesq_proj.value,
                idProdIntel: id_prod_proj.value,
                idTccAss: id_tcc_proj.value,
                naturezaProj: nat_proj.value,
                situacaoProj: situacao_proj.value,
            }
        }
        else if (path == 'participante-ext') {
            path = 'externos';
            obj = {
                nome: '',
                nomeSocial: ''.value,
                email: '',
                dataNasc: '',
                sexo: ''.value,
                tipoDocumento: '',
                numDocumento: '',
                nacionalidade: '',
                situacao: '',
                idPartPP: '',
                idPartIntel: '',
                idBancaTcc: '',
                nivel: '',
                bolsaPP: '',
                instTitulacao: '',
                paisTitulacao: '',
                instOrigem: '',
                nivel: '',

            }
        }
        else if (path == 'tcc') {
            obj = {
                abstract: "",
                dataDefesa: "",
                expecAtuacao: "Engenharia",
                idAreaConcetracao: "",
                idAutor: "fJUa1YdfmLJeuknWyBlN",
                idFinanciador: "",
                idLinhaPesquisa: "",
                idOrientador: "",
                idTcc: "",
                idioma: "Portugues",
                membros: "id prof, id externos",
                mesmaArea: true,
                numeroPaginas: "10",
                palavrasChave: "carro, bola,etc",
                projetoDePesquisa: "",
                resumo: "Estudo de um novo paradigma de programação",
                tipoInst: "",
                tipoTcc: "Monografia",
                tipoVeicEmpr: "Tipo Veiculo Empregatico",
                titulo: "Novo Paradigma de Programação"
            }
        }
        else if (path == 'producao') {
            path = 'producaoIntel';
            obj = {
                ano: "",
                autores: "id prof, id aluno, id externos",
                doi: "",
                idProducao: "",
                issn: "1723681732",
                maisRelevante: true,
                nomeJR: "Galileu",
                numeroPagFinal: "",
                numeroPagInic: "",
                subTipo: "",
                tipo: "Artigo de Divulgação",
                titulo: "Notas de Fisica",
                url: "www.notasfisica.com.br",
                vincTcc: true
            }
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
            snackbar(error);
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
        })
    }

});