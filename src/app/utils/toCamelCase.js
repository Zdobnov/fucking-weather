import camelcaseKeys from 'camelcase-keys';

export default function toCamelCase(obj) {
  return camelcaseKeys(obj, {deep: true});
}
