import { fromJS } from 'immutable';

function getImmutableObject (object) {
  if (typeof object !== 'object' || object === null) {
    throw new Error('Input must be a valid object')
  };

  return fromJS(object);
}

const oldMethod = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

const newMethod = getImmutableObject(oldMethod);

console.log(newMethod.toString());
