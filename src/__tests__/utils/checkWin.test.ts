import {checkValuesInLine, checkWin, checkWinSeriesInLine} from "../../utils/checkWin"
import {Figures} from "../../consts/figures";
import {ILines} from "../../types/ILine";

export let boardMock: any = [
    [
        {
            "x": 0,
            "y": 0,
            "value": null,
            "id": 5417
        },
        {
            "x": 1,
            "y": 0,
            "value": null,
            "id": 6175
        },
        {
            "x": 2,
            "y": 0,
            "value": null,
            "id": 2253
        },
        {
            "x": 3,
            "y": 0,
            "value": null,
            "id": 1182
        },
        {
            "x": 4,
            "y": 0,
            "value": null,
            "id": 9293
        },
        {
            "x": 5,
            "y": 0,
            "value": null,
            "id": 6235
        },
        {
            "x": 6,
            "y": 0,
            "value": null,
            "id": 1291
        },
        {
            "x": 7,
            "y": 0,
            "value": null,
            "id": 7299
        }
    ],
    [
        {
            "x": 0,
            "y": 1,
            "value": null,
            "id": 8840
        },
        {
            "x": 1,
            "y": 1,
            "value": "0",
            "id": 4963
        },
        {
            "x": 2,
            "y": 1,
            "value": "X",
            "id": 8436
        },
        {
            "x": 3,
            "y": 1,
            "value": "0",
            "id": 1522
        },
        {
            "x": 4,
            "y": 1,
            "value": null,
            "id": 197
        },
        {
            "x": 5,
            "y": 1,
            "value": null,
            "id": 6022
        },
        {
            "x": 6,
            "y": 1,
            "value": null,
            "id": 636
        },
        {
            "x": 7,
            "y": 1,
            "value": null,
            "id": 8943
        }
    ],
    [
        {
            "x": 0,
            "y": 2,
            "value": null,
            "id": 2457
        },
        {
            "x": 1,
            "y": 2,
            "value": "X",
            "id": 2050
        },
        {
            "x": 2,
            "y": 2,
            "value": null,
            "id": 6146
        },
        {
            "x": 3,
            "y": 2,
            "value": "X",
            "id": 8012
        },
        {
            "x": 4,
            "y": 2,
            "value": "0",
            "id": 3966
        },
        {
            "x": 5,
            "y": 2,
            "value": null,
            "id": 7478
        },
        {
            "x": 6,
            "y": 2,
            "value": null,
            "id": 6276
        },
        {
            "x": 7,
            "y": 2,
            "value": null,
            "id": 9582
        }
    ],
    [
        {
            "x": 0,
            "y": 3,
            "value": "0",
            "id": 7374
        },
        {
            "x": 1,
            "y": 3,
            "value": "X",
            "id": 7393
        },
        {
            "x": 2,
            "y": 3,
            "value": null,
            "id": 9279
        },
        {
            "x": 3,
            "y": 3,
            "value": "X",
            "id": 8088
        },
        {
            "x": 4,
            "y": 3,
            "value": "X",
            "id": 3958
        },
        {
            "x": 5,
            "y": 3,
            "value": "0",
            "id": 9371
        },
        {
            "x": 6,
            "y": 3,
            "value": null,
            "id": 5872
        },
        {
            "x": 7,
            "y": 3,
            "value": null,
            "id": 4868
        }
    ],
    [
        {
            "x": 0,
            "y": 4,
            "value": "0",
            "id": 5870
        },
        {
            "x": 1,
            "y": 4,
            "value": "X",
            "id": 3983
        },
        {
            "x": 2,
            "y": 4,
            "value": null,
            "id": 1898
        },
        {
            "x": 3,
            "y": 4,
            "value": "0",
            "id": 2868
        },
        {
            "x": 4,
            "y": 4,
            "value": "0",
            "id": 5886
        },
        {
            "x": 5,
            "y": 4,
            "value": null,
            "id": 326
        },
        {
            "x": 6,
            "y": 4,
            "value": null,
            "id": 372
        },
        {
            "x": 7,
            "y": 4,
            "value": null,
            "id": 6882
        }
    ],
    [
        {
            "x": 0,
            "y": 5,
            "value": null,
            "id": 652
        },
        {
            "x": 1,
            "y": 5,
            "value": null,
            "id": 1308
        },
        {
            "x": 2,
            "y": 5,
            "value": "X",
            "id": 8414
        },
        {
            "x": 3,
            "y": 5,
            "value": "X",
            "id": 309
        },
        {
            "x": 4,
            "y": 5,
            "value": null,
            "id": 8340
        },
        {
            "x": 5,
            "y": 5,
            "value": null,
            "id": 5268
        },
        {
            "x": 6,
            "y": 5,
            "value": null,
            "id": 4534
        },
        {
            "x": 7,
            "y": 5,
            "value": null,
            "id": 3782
        }
    ],
    [
        {
            "x": 0,
            "y": 6,
            "value": null,
            "id": 5275
        },
        {
            "x": 1,
            "y": 6,
            "value": null,
            "id": 2553
        },
        {
            "x": 2,
            "y": 6,
            "value": null,
            "id": 6256
        },
        {
            "x": 3,
            "y": 6,
            "value": null,
            "id": 1408
        },
        {
            "x": 4,
            "y": 6,
            "value": null,
            "id": 5328
        },
        {
            "x": 5,
            "y": 6,
            "value": null,
            "id": 5162
        },
        {
            "x": 6,
            "y": 6,
            "value": null,
            "id": 6937
        },
        {
            "x": 7,
            "y": 6,
            "value": null,
            "id": 2700
        }
    ],
    [
        {
            "x": 0,
            "y": 7,
            "value": null,
            "id": 4875
        },
        {
            "x": 1,
            "y": 7,
            "value": null,
            "id": 1709
        },
        {
            "x": 2,
            "y": 7,
            "value": null,
            "id": 5571
        },
        {
            "x": 3,
            "y": 7,
            "value": null,
            "id": 8002
        },
        {
            "x": 4,
            "y": 7,
            "value": null,
            "id": 2099
        },
        {
            "x": 5,
            "y": 7,
            "value": null,
            "id": 3357
        },
        {
            "x": 6,
            "y": 7,
            "value": null,
            "id": 2146
        },
        {
            "x": 7,
            "y": 7,
            "value": null,
            "id": 2552
        }
    ]
]
//  0 1 2 3 4 5 6 7 = x
//0 * * * * * * * *
//1 * 0 X 0 * * * *
//2 * X * X 0 * * *
//3 0 X * X X 0 * *
//4 0 X * 0 0 * * *
//5 * * X X * * * *
//6 * * * * * * * *
//7 * * * * * * * *
//=
//y


let lines: ILines = {
    "vertical": {x: "n", y: "i", arr: []},
    "horizontal": {x: "i", y: "n", arr: []},
    "mainDiagonal": {x: "i", y: "i", arr: []},
    "secondaryDiagonal": {x: "i", y: "d", arr: []},
}

describe("Should get values values from the line", () => {
    test("should get values from the vertical", () => {
        expect(checkValuesInLine(boardMock, 4,  {"x": 4, "y": 0, "value": Figures.X, "id": "5478"}, lines["vertical"]))
            .toEqual([null, null, "0", "X"])
        expect(checkValuesInLine(boardMock, 4,  {"x": 2, "y": 2, "value": Figures.X, "id": "5478"}, lines["vertical"]))
            .toEqual([null, "X", null, null, null, "X"])
        expect(checkValuesInLine(boardMock, 4,  {"x": 7, "y": 7, "value": Figures.X, "id": "5478"}, lines["vertical"]))
            .toEqual([null, null, null, null])
        expect(checkValuesInLine(boardMock, 4,  {"x": 3, "y": 3, "value": Figures.X, "id": "5478"}, lines["vertical"]))
            .toEqual([null, "0", "X", "X", "0", "X", null])
    })
    test("should get values from the horizontal", () => {
        expect(checkValuesInLine(boardMock, 4,  {"x": 4, "y": 4, "value": Figures.X, "id": "5478"}, lines["horizontal"]))
            .toEqual(["X", null, "0", "0", null, null, null])
        expect(checkValuesInLine(boardMock, 4,  {"x": 0, "y": 0, "value": Figures.X, "id": "5478"}, lines["horizontal"]))
            .toEqual([null, null, null, null])
        expect(checkValuesInLine(boardMock, 4,  {"x": 0, "y": 3, "value": Figures.X, "id": "5478"}, lines["horizontal"]))
            .toEqual(["0", "X", null, "X"])
        expect(checkValuesInLine(boardMock, 4,  {"x": 7, "y": 3, "value": Figures.X, "id": "5478"}, lines["horizontal"]))
            .toEqual([ "X","0", null, null])
    })
    test("should get values from the main diagonal", () => {
        expect(checkValuesInLine(boardMock, 4,  {"x": 4, "y": 4, "value": Figures.X, "id": "5478"}, lines["mainDiagonal"]))
            .toEqual(["0", null, "X", "0", null, null, null])
        expect(checkValuesInLine(boardMock, 4,  {"x": 0, "y": 0, "value": Figures.X, "id": "5478"}, lines["mainDiagonal"]))
            .toEqual([null, "0", null, "X"])
        expect(checkValuesInLine(boardMock, 4,  {"x": 7, "y": 3, "value": Figures.X, "id": "5478"}, lines["mainDiagonal"]))
            .toEqual([null, null, null, null])
        expect(checkValuesInLine(boardMock, 4,  {"x": 7, "y": 0, "value": Figures.X, "id": "5478"}, lines["mainDiagonal"]))
            .toEqual([null])
        expect(checkValuesInLine(boardMock, 4,  {"x": 0, "y": 7, "value": Figures.X, "id": "5478"}, lines["mainDiagonal"]))
            .toEqual([null])
    })
    test("should get values from the secondary diagonal", () => {
        expect(checkValuesInLine(boardMock, 4,  {"x": 4, "y": 4, "value": Figures.X, "id": "5478"}, lines["secondaryDiagonal"]))
            .toEqual([null, null, "X", "0", "0", null, null])
        expect(checkValuesInLine(boardMock, 4,  {"x": 0, "y": 0, "value": Figures.X, "id": "5478"}, lines["secondaryDiagonal"]))
            .toEqual([null])
        expect(checkValuesInLine(boardMock, 4,  {"x": 7, "y": 7, "value": Figures.X, "id": "5478"}, lines["secondaryDiagonal"]))
            .toEqual([null])
        expect(checkValuesInLine(boardMock, 4,  {"x": 7, "y": 0, "value": Figures.X, "id": "5478"}, lines["secondaryDiagonal"]))
            .toEqual(["X", null, null, null])
        expect(checkValuesInLine(boardMock, 4,  {"x": 1, "y": 1, "value": Figures.X, "id": "5478"}, lines["secondaryDiagonal"]))
            .toEqual([ null, "0", null])
        expect(checkValuesInLine(boardMock, 4,  {"x": 5, "y": 3, "value": Figures.X, "id": "5478"}, lines["secondaryDiagonal"]))
            .toEqual([ null,"X","0", "0", null, null])
    })
})
describe("should check elements of the line on availability win series", () => {
    test("правильный 1", () => {
        expect(checkWinSeriesInLine([Figures.X, Figures.X, Figures.X, Figures.X, Figures.X, null, Figures.O, null, null], 5, Figures.X)).toBeTruthy()
    })
    test("правильный 2", () => {
        expect(checkWinSeriesInLine([Figures.O, null, Figures.X, Figures.X, Figures.X, Figures.X, Figures.X, Figures.X, null, null, Figures.O, null], 5, Figures.X)).toBeTruthy()
    })
    test("правильный 3", () => {
        expect(checkWinSeriesInLine([Figures.X, Figures.X, Figures.X, null, Figures.O, null, null, Figures.X, Figures.X, Figures.X, Figures.X, Figures.X,], 5, Figures.X)).toBeTruthy()
    })
    test("правильный 4", () => {
        expect(checkWinSeriesInLine([Figures.O, Figures.O, Figures.O, Figures.O, Figures.O, null, null, null], 5, Figures.O)).toBeTruthy()
    })
    test("неправильный 1", () => {
        expect(checkWinSeriesInLine([Figures.O, Figures.O, Figures.O, Figures.X, Figures.O, Figures.O, null, null, null], 5, Figures.O)).toBeFalsy()
    })
    test("неправильный 2", () => {
        expect(checkWinSeriesInLine([Figures.O, Figures.O, null, Figures.O, Figures.X, Figures.O, Figures.O, null, null], 5, Figures.O)).toBeFalsy()
    })
    test("неправильный 3", () => {
        expect(checkWinSeriesInLine([Figures.O, Figures.O, null, Figures.O, Figures.X, Figures.O, Figures.O, null, null], 5, Figures.O)).toBeFalsy()
    })
})


describe("should check win", () => {
    test("win", () => {
        expect(checkWin(boardMock, {"x": 4, "y": 3, "value": Figures.X, "id": "5478"}, 3, Figures.X)).toBeTruthy()
        expect(checkWin(boardMock, {"x": 3, "y": 2, "value": Figures.X, "id": "5478"}, 3, Figures.X)).toBeTruthy()
        expect(checkWin(boardMock, {"x": 1, "y": 2, "value": Figures.X, "id": "5478"}, 3, Figures.X)).toBeTruthy()
        expect(checkWin(boardMock, {"x": 4, "y": 2, "value": Figures.O, "id": "5478"}, 3, Figures.O)).toBeTruthy()

    })
    test("lose", () => {
        expect(checkWin(boardMock, {"x": 4, "y": 0, "value": Figures.X, "id": "5478"}, 4, Figures.X)).toBeFalsy()
        expect(checkWin(boardMock, {"x": 1, "y": 1, "value": Figures.X, "id": "5478"}, 4, Figures.X)).toBeFalsy()
        expect(checkWin(boardMock, {"x": 1, "y": 2, "value": Figures.X, "id": "5478"}, 4, Figures.X)).toBeFalsy()
        expect(checkWin(boardMock, {"x": 3, "y": 5, "value": Figures.X, "id": "5478"}, 4, Figures.X)).toBeFalsy()
    })
})