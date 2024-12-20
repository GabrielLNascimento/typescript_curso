var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(id, n) {
        this.id = id;
        this.nome = n;
        this.numero = this.gerarNum();
    }
    Pessoa.prototype.gerarNum = function () {
        return Math.floor(Math.random() * 100) + 1;
    };
    return Pessoa;
}());
var Cidadao = /** @class */ (function (_super) {
    __extends(Cidadao, _super);
    function Cidadao(cor, id, n) {
        var _this = _super.call(this, id, n) || this;
        _this.cor = cor;
        return _this;
    }
    Cidadao.prototype.info = function () {
        console.log(this.id);
    };
    return Cidadao;
}(Pessoa));
var p1 = new Cidadao("branco", 10, "Gabriel");
p1.info();
console.log(p1.num_temp);
