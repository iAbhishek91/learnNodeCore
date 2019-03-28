// separates the concern of creating object using new or Object.create(),
// from implementaion.

// there are different strategies of creating(instanciating) an object, 
// and the strategies are abstracted so that user can focus on using the 
// object and focus on functionalities.
const basicFactory = (msg) => {
  return new Error(msg);
}

// ---------------------------------------------------------------------
// we can create fractory which serves a common interace for many problems

const switchFactory = (key) => {
  switch(key) {
   case 'string': return new String();
   case 'integer': return new Number();
   default: return {error: 'invalid key'}
  };
}

// ---------------------------------------------------------------------
// factory pattern also helps in encapsulation, this is using the closure pattern

const encapsulationFractory = (name) => {
  const privateProperty = {};

  const person = {
    setName: (name) => privateProperty.name = name,
    getName: () => privateProperty.name,
  }

  person.setName(name);
  return person;
}

// ---------------------------------------------------------------------
module.exports = {
  basicFactory,
  switchFactory,
  encapsulationFractory,
};