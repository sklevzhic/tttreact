import {getCurrentFigure} from "../../utils/getCurrentFigure";

describe("should get the current figure", () => {
    test("should get a value X", () => {
        expect(getCurrentFigure(0)).toBe("X")
        expect(getCurrentFigure(2)).toBe("X")
        expect(getCurrentFigure(4)).toBe("X")
        expect(getCurrentFigure(4 + 1)).toBe("0")
        expect(getCurrentFigure(6)).toBe("X")
        expect(getCurrentFigure(8)).toBe("X")
        expect(getCurrentFigure(8 + 1)).toBe("0")
        expect(getCurrentFigure(10)).toBe("X")
        expect(getCurrentFigure(12)).toBe("X")
    })
    test("should get a value Y", () => {
        expect(getCurrentFigure(1)).toBe("0")
        expect(getCurrentFigure(3)).toBe("0")
        expect(getCurrentFigure(5)).toBe("0")
        expect(getCurrentFigure(7)).toBe("0")
        expect(getCurrentFigure(9)).toBe("0")
        expect(getCurrentFigure(11)).toBe("0")
        expect(getCurrentFigure(13)).toBe("0")

    })
})