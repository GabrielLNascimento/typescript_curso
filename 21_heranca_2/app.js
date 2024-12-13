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
var Veiculo = /** @class */ (function () {
    function Veiculo(m) {
        this.motor = m;
    }
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(model, m) {
        var _this = _super.call(this, m) || this;
        _this.modelo = model;
        return _this;
    }
    Carro.prototype.info = function () {
        console.log(this.modelo);
        console.log(this.motor);
    };
    return Carro;
}(Veiculo));
var car1 = new Carro("fiat", "v4");
car1.info();
// --------------------------------------------
var Sorteio = /** @class */ (function () {
    function Sorteio(n) {
        this.numero = this.gerarNumero();
        this.nome = n;
    }
    Sorteio.prototype.gerarNumero = function () {
        return Math.floor(Math.random() * 100) + 1;
    };
    return Sorteio;
}());
// --------------------------------------------------
// animais e seus sons
var Animal = /** @class */ (function () {
    function Animal(n) {
        this.nome = n;
    }
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(n) {
        return _super.call(this, n) || this;
    }
    Cachorro.prototype.falar = function () {
        return "Au au";
    };
    return Cachorro;
}(Animal));
var dog1 = new Cachorro("Tobi");
console.log(dog1.falar());
// ---------------------------------
// sistema de produtos
var Produto = /** @class */ (function () {
    function Produto(n, p) {
        this.nome = n;
        this.preco = p;
    }
    return Produto;
}());
var ProdutoEletronico = /** @class */ (function (_super) {
    __extends(ProdutoEletronico, _super);
    function ProdutoEletronico(n, p, g) {
        var _this = _super.call(this, n, p) || this;
        _this.garantia = g;
        return _this;
    }
    ProdutoEletronico.prototype.info = function () {
        console.log("Garantia:", this.garantia);
    };
    return ProdutoEletronico;
}(Produto));
var ProdutoAlimenticio = /** @class */ (function (_super) {
    __extends(ProdutoAlimenticio, _super);
    function ProdutoAlimenticio(n, p, d) {
        var _this = _super.call(this, n, p) || this;
        _this.dataValidade = d;
        return _this;
    }
    ProdutoAlimenticio.prototype.info = function () {
        console.log("Validade:", this.dataValidade);
    };
    return ProdutoAlimenticio;
}(Produto));
var p1 = new ProdutoEletronico("chaleira elétrica", 450, 3);
var p2 = new ProdutoAlimenticio("banana", 10, 4);
p1.info();
p2.info();
