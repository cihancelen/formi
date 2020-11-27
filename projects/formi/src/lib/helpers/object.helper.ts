export function fillConstructor(object: Object) {
  Object.keys(object).forEach((key) => (this[key] = object[key]));
}
