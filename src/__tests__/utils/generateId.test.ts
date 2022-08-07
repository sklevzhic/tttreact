import {generateId} from "../../utils/generateId";

describe("should generate an id", () => {
    test("true", () => {
        expect(generateId(5,5)).toBe("55")
        expect(generateId(12,2)).toBe("122")
        expect(generateId(7,8)).toBe("78")
        expect(generateId(0,15)).toBe("015")
    })
    test("false", () => {
        expect(generateId(0,5)).not.toBe("5")
        expect(generateId(12,2)).not.toBe("14")
        expect(generateId(7,8)).not.toBe("7 8")
        expect(generateId(0,15)).not.toBe(" 015 ")
    })
})