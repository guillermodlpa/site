import recursivelyNullifyUndefinedValues from "./recursivelyNullifyUndefinedValues";

describe("recursivelyNullifyUndefinedValues", () => {
  it("should update nested undefined values to null", () => {
    const input = {
      name: "Daniel",
      age: 50,
      gender: undefined,
      birthday: false,
      courseCount: 0,
      foods: [
        { id: 1, mainIngredient: null },
        { id: 2, mainIngredient: undefined },
        { id: 2, mainIngredient: "fish" },
      ],
    };
    expect(recursivelyNullifyUndefinedValues(input)).toEqual({
      name: "Daniel",
      age: 50,
      gender: null,
      birthday: false,
      courseCount: 0,
      foods: [
        { id: 1, mainIngredient: null },
        { id: 2, mainIngredient: null },
        { id: 2, mainIngredient: "fish" },
      ],
    });
  });
  it("should return an empty object when passed an empty object", () => {
    expect(recursivelyNullifyUndefinedValues({})).toEqual({});
  });
});
