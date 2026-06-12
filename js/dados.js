

let atendimentos = [
    {
        id: 1,
        servico: "Uso Básico do Celular",
        categoria: "Suporte Individual",
        duracao: "1 hora",
        disponibilidade: "Disponível",
        atendente: "Maria Silva",
        atendido: "José Ferreira"
    },
    {
        id: 2,
        servico: "WhatsApp e Videochamadas",
        categoria: "Oficina",
        duracao: "2 horas",
        disponibilidade: "Disponível",
        atendente: "João Santos",
        atendido: "Antônia Souza"
    },
    {
        id: 3,
        servico: "Acesso ao Gov.br",
        categoria: "Suporte Individual",
        duracao: "45 min",
        disponibilidade: "Disponível",
        atendente: "Ana Oliveira",
        atendido: "Carlos Mendes"
    },
    {
        id: 4,
        servico: "Segurança na Internet",
        categoria: "Palestra",
        duracao: "1h30",
        disponibilidade: "Agendamento",
        atendente: "Carlos Pereira",
        atendido: "Grupo da Melhor Idade"
    },
    {
        id: 5,
        servico: "Uso de Aplicativos Bancários",
        categoria: "Suporte Individual",
        duracao: "1 hora",
        disponibilidade: "Disponível",
        atendente: "Fernanda Costa",
        atendido: "Maria Aparecida"
    }

];


document.addEventListener('DOMContentLoaded', () => {

    $('#table').bootstrapTable({
        locale: 'pt-BR',

        iconsPrefix: 'bi',
        icons: {
            paginationSwitchDown: 'bi-caret-down-fill',
            paginationSwitchUp: 'bi-caret-up-fill',
            refresh: 'bi-arrow-clockwise',
            toggleOff: 'bi-list-ul',
            toggleOn: 'bi-grid-3x3-gap',
            columns: 'bi-layout-three-columns',
            detailOpen: 'bi-plus',
            detailClose: 'bi-dash',
            fullscreen: 'bi-arrows-fullscreen',
            export: 'bi-download'
        },

        exportTypes: ['xlsx', 'csv', 'excel', 'txt'],

        exportOptions: {
            fileName: 'atendimentos'
        }
    });

    $('#table').bootstrapTable('append', atendimentos);
});


// PDF manual (coloque FORA do DOMContentLoaded)
window.exportarPDF = function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont('helvetica');

    const rows = atendimentos.map(item => [
        item.atendente,
        item.atendido,
        item.categoria,
        item.servico,
        item.duracao
    ]);

    doc.autoTable({
        head: [['Atendente', 'Atendido', 'Categoria', 'Serviço', 'Duração']],
        body: rows
    });

    doc.save('atendimentos.pdf');
};



function cadastrar_form() {


    let atendente = $('#atendente').val();
    let Atendido = $('#Atendido').val();
    let servico_executado = $('#servico_executado').val();
    let Duracao = $('#Duracao').val();
    let categoria = $('#categoria').val();

    if (atendente == '') {
        $('#atendente').removeClass('is-valid')
        $('#atendente').addClass('is-invalid')
    } else {
        $('#atendente').removeClass('is-invalid')
        $('#atendente').addClass('is-valid')
    }


    if (Atendido == '') {
        $('#Atendido').removeClass('is-valid')
        $('#Atendido').addClass('is-invalid')
    } else {
        $('#Atendido').removeClass('is-invalid')
        $('#Atendido').addClass('is-valid')
    }


    if (servico_executado == '') {
        $('#servico_executado').removeClass('is-valid')
        $('#servico_executado').addClass('is-invalid')
    } else {
        $('#servico_executado').removeClass('is-invalid')
        $('#servico_executado').addClass('is-valid')
    }

    if (Duracao == '') {
        $('#Duracao').removeClass('is-valid')
        $('#Duracao').addClass('is-invalid')
    } else {
        $('#Duracao').removeClass('is-invalid')
        $('#Duracao').addClass('is-valid')
    }

    if (categoria == '') {
        $('#categoria').removeClass('is-valid')
        $('#categoria').addClass('is-invalid')
    } else {
        $('#categoria').removeClass('is-invalid')
        $('#categoria').addClass('is-valid')
    }


    atendimentos.push({
        servico,
        categoria,
        duracao,
        atendente,
        atendido
    });


    function abrir_login() {
        // Captura o elemento input pelo ID
        const meuLogin = document.getElementById('login');

        // Pega o valor contido nele
        const login = meuLogin.value;


        // Captura o elemento input pelo ID
        const minhasenha = document.getElementById('senha');

        // Pega o valor contido nele
        const senha = minhasenha.value;




        if (login == 'Daniel' && senha == '123') {
            window.location.href = "home.html";
        } else {


            Swal.fire({
                title: 'Atenção!',
                text: 'Favor incluir um login e senha válidos!',
                icon: 'info',
                confirmButtonText: 'Cool'
            })

        }
    }
}