import { ADD_TODO, REMOVE_TODO } from "./action.types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

// reducer is the brain of the application.

// Now reducer take advantage of action file and define what should i do when i hit this ADD_TODO
//  or what should i do when i hit this REMOVE_TODO

// so for that firstly you should know what is there in action file so it have to import them.

// then based on the action performed it wants to provide a reducer for that action .
// basically it wants to provide a functionality or a method based on that.

// in this case it makes sense that we export a switch and case.  here is its syntax.

// Whenever somebody is going to use this file , it need to provide a state. state here means just a
//   central place where everything is being stored.

// whoever is calling this file , is also going to provide us an action .... that what action you want
//   to take  on that state Whether you want to add some todo or you want to remove some todo.

// we can provide a simple if and else but here lets use switch and case
//  because we have to analyse the action what you really wnat to do .

// now action has a lot of things
// one thing in that lot of things in action is .type   :  means we are restricting our type with only
//                                                       the things which are mentioned in our action file

// in case of ADD_TODO , what i really want to do is i want to add the todo to the state .
// ...state is loading the state .  that whatever the values in state just load that.
// and then simply go ahead and do an action.payload
// we are gonna understand more about these actions later but let me tell you that this action
//  is not just an alone guy , it is an object which consists of variety of things . one thing it consists
//   is type

// payload is the information that action caries along with it ..... in our case its goimg to be string but it can carry anything  any object or anything
// so payload is kind of a baggage you are giving to action that it is carrying all along with it
// so take that todo string and we are adding that to the state in ADD_TODO

// in case of REMOVE_TODO : since state is kind of iterable so we will filter and remove what we want to
// remove .
