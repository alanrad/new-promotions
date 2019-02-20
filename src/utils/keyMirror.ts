/**
 * Constructs an enumeration with keys equal to their value.
 *
 */

export const keyMirror = (obj: object): object => {
  const ret: object = {};
  let key: string;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      ret[key] = key;
    }
  }
  return ret;
};
