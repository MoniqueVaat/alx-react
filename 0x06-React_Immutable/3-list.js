import { List } from 'immutable';

export function getListObject (array) {
  const immutableList = List(array);
  return immutableList;
}
export function addElementToList (list, element) {
  const newList = list.push(element);
  return newList;
}
