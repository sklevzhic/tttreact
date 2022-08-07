import { initialBoard } from "../../utils/initialBoard"

describe("should be initialize the board ", () => {
    test("should get the right array length", () => {
        expect(initialBoard(3).length).toBe(3)
        expect(initialBoard(5).length).toBe(5)
        expect(initialBoard(8).length).toBe(8)
        expect(initialBoard(55).length).toBe(55)
    })
    test("should get the number of elements in the row", () => {
        expect(initialBoard(3).map(el => el.length)).toEqual(Array(3).fill(3))
        expect(initialBoard(55).map(el => el.length)).toEqual(Array(55).fill(55))
    })
})