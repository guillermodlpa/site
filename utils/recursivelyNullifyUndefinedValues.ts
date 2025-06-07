type JsonValue = string | number | boolean | null | JsonObject | JsonArray;
type JsonObject = { [key: string]: JsonValue };
type JsonArray = JsonValue[];

function isObjectLiteral(value: unknown): value is JsonObject {
  return Object.prototype.toString.call(value) === "[object Object]";
}

/**
 * Transforms all `undefined` values to `null`
 * Next.js throws an error when a prop value contains an `undefined` value
 */
export default function recursivelyNullifyUndefinedValues(
  object: JsonValue | undefined,
): JsonValue {
  if (object === undefined) {
    return null;
  }
  if (isObjectLiteral(object)) {
    const result: JsonObject = {};
    for (const [key, value] of Object.entries(object)) {
      result[key] = recursivelyNullifyUndefinedValues(value);
    }
    return result;
  }
  if (Array.isArray(object)) {
    return object.map((item) => recursivelyNullifyUndefinedValues(item));
  }
  return object;
}
