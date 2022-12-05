import { Aviary, Lay } from './AviaryJS';

/**The Lay function creates a component scaffold from wich you can create separate components*/
const GooseHawk = Lay('goose-hawk');

/**If attributes are set to the scaffold, all components that are made from it will get the attributes.
 * This can be used to set a generic behavior that's desirable for many components
 * However, they can all be overwritten.
 */
GooseHawk.text = 'hejsan';
GooseHawk.click = () => {
  console.log('KRA');
};

/**A child is set by first creating a scaffold then applying it to the child attribute of its parent
 * This can be done many times to achieve a tree structure.
 * Atm you can only apply a scaffold to the child attribute. However this will change in a near future and
 * you'll be able to apply a hatched scaffold
 */

const LesserWoodpecker = Lay('lesser-woodpecker');
GooseHawk.child = LesserWoodpecker;

/**The hatch attribute is essentially what creates the component */
const gooseHawk = GooseHawk.hatch;

/**Aviary is the app and is called with the outermost components as props. It is perfectly possible to pass more than
 * one component as props and they will be rendered in the same order as they're passed in the Aviary function
 */
Aviary(gooseHawk);
