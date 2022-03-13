var Mines;
(function (Mines) {
    Mines[Mines["Small"] = 3] = "Small";
    Mines[Mines["Large"] = 4] = "Large";
    Mines[Mines["Medium"] = 5] = "Medium";
})(Mines || (Mines = {}));
console.log(Mines.Large);
