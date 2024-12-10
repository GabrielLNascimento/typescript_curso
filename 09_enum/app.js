var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["ter\u00E7a"] = 2] = "ter\u00E7a";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
// console.log(dias.domingo)
// console.log(dias['domingo'])
// console.log(dias[1])
var d = new Date();
// let indice = d.getDay()
// console.log(dias[indice])
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["azul"] = "#00f";
    cores["verde"] = "#0f0";
})(cores || (cores = {}));
console.log(cores.branco);
console.log(cores["preto"]);
// console.log(cores[0]) -> erro
var tipoUsers;
(function (tipoUsers) {
    tipoUsers[tipoUsers["USER"] = 10] = "USER";
    tipoUsers[tipoUsers["ADM"] = 100] = "ADM";
    tipoUsers[tipoUsers["SUPER"] = 1000] = "SUPER";
})(tipoUsers || (tipoUsers = {}));
var tp = tipoUsers.SUPER;
console.log(tp);
