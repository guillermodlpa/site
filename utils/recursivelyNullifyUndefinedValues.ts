function isObjectLiteral(value: any) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

/**
 * Transforms all `undefined` values to `null`
 * Next.js throws an error when a prop value contains an `undefined` value
 */
export default function recursivelyNullifyUndefinedValues(object: any): any {
  if (object === undefined) {
    return null;
  }
  if (isObjectLiteral(object)) {
    return Object.entries(object).reduce(
      (memo, [key, value]) => ({
        ...memo,
        [key]: recursivelyNullifyUndefinedValues(value),
      }),
      {}
    );
  }
  if (Array.isArray(object)) {
    return object.map((item) => recursivelyNullifyUndefinedValues(item));
  }
  return object;
}
