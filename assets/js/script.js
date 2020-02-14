var radiologia = [
    {
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente:"FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA"
    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE"
    },
    {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE"
    },
    {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA"
    },
    {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA"
    }
];

var traumatologia = [
    {
        hora: "08:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONASA"
    },
    {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        prevision: "ISAPRE"
    },
    {
        hora: "10:30",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE"
    },
    {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA"
    },
    {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE"
    },
    {
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE"
    }
];


var dental = [
    {
        hora: "08:30",
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE"
    },
    {
        hora: "11:30",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA"
    },
    {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA"
    },
    {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA"
    },
    {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE"
    }
];

var consultasRadiologia = radiologia.length;
var consultasTraumatologia = traumatologia.length;
var consultasDental = dental.length;

//Radiologia
var primeraRadiologiaPaciente = radiologia[0].paciente;
var primeraRadiologiaRut = radiologia[0].rut;
var primeraRadiologiaPrevision = radiologia[0].prevision;

var ultimaRadiologiaPaciente = radiologia[radiologia.length-1].paciente;
var ultimaRadiologiaRut = radiologia[radiologia.length-1].rut;
var ultimaRadiologiaPrevision = radiologia[radiologia.length-1].prevision;

//Traumatologia
var primeraTraumatologiaPaciente = traumatologia[0].paciente;
var primeraTraumatologiaRut = traumatologia[0].rut;
var primeraTraumatologiaPrevision = traumatologia[0].prevision;

var ultimaTraumatologiaPaciente = traumatologia[traumatologia.length - 1].paciente;
var ultimaTraumatologiaRut = traumatologia[traumatologia.length - 1].rut;
var ultimaTraumatologiaPrevision = traumatologia[traumatologia.length - 1].prevision;

//Dental
var primeraDentalPaciente = dental[0].paciente;
var primeraDentalRut = dental[0].rut;
var primeraDentalPrevision = dental[0].prevision;

var ultimaDentalPaciente = dental[dental.length - 1].paciente;
var ultimaDentalRut = dental[dental.length - 1].rut;
var ultimaDentalPrevision = dental[dental.length - 1].prevision;



document.write('<h1>Estad&iacute;sticas centro m&eacute;dico &Ntilde;u&ntilde;oa</h1>');

document.write('<p class="styleSub">Consultas de Radiolog&iacute;a: ' + consultasRadiologia + '</p>');
document.write('<p>Primer paciente Radiolog&iacute;a: ' + primeraRadiologiaPaciente + ' - ' + primeraRadiologiaRut + ' - ' + primeraRadiologiaPrevision+'</p>');
document.write('<p>&Uacute;ltimo paciente Radiolog&iacute;a: ' + ultimaRadiologiaPaciente + ' - ' + ultimaRadiologiaRut + ' - ' + ultimaRadiologiaPrevision + '</p><br/>');

document.write('<p class="styleSub">Consultas de Traumatolog&iacute;a: ' + consultasTraumatologia + '</p>');
document.write('<p>Primer paciente Traumatolog&iacute;a: ' + primeraTraumatologiaPaciente + ' - ' + primeraTraumatologiaRut + ' - ' + primeraTraumatologiaPrevision + '</p>');
document.write('<p>&Uacute;ltimo paciente Traumatolog&iacute;a: ' + ultimaTraumatologiaPaciente + ' - ' + ultimaTraumatologiaRut + ' - ' + ultimaTraumatologiaPrevision + '</p><br/>');

document.write('<p class="styleSub">Consultas Dentales: ' + consultasDental + '</p>');
document.write('<p>Primer paciente Dental: ' + primeraDentalPaciente + ' - ' + primeraDentalRut + ' - ' + primeraDentalPrevision + '</p>');
document.write('<p>&Uacute;ltimo paciente Dental: ' + ultimaDentalPaciente + ' - ' + ultimaDentalRut + ' - ' + ultimaDentalPrevision + '</p><br/>');
