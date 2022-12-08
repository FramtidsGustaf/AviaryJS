import Aviary, { Lay } from './AviaryJS';

/*The Lay function creates a component scaffold from which you can create separate components*/
const GooseHawk = Lay('goose-hawk');

/*If attributes are set to the scaffold, all components that are made from it will get the attributes.
 * This can be used to set a generic behavior that's desirable for many components
 * However, they can all be overwritten.
 */
GooseHawk.text = 'hejsan';

/*You can set a css class to the scaffold and to any hatched component */
GooseHawk.class = 'svejsan';

/*You can also add multiple css classes at the same time with an array */
GooseHawk.class = ['Tjabba', 'Tjena', 'Hallå'];

/*To remove a class, use the removeClass attribute and simply give it the class
 * you'd like to remove
 */
GooseHawk.removeClass = 'Hallå';

/*To add clickevent to the scaffold just use the click attribute and
 * pass a function
 */
GooseHawk.click = () => {
  console.log('KRA');
};

/*A child is set by first creating a scaffold then applying it to the child attribute of its parent
 * This can be done many times to achieve a tree structure.
 */

const LesserWoodpecker = Lay('lesser-woodpecker');
GooseHawk.child = LesserWoodpecker;

/*Children can also be added to a scaffold or hatched scaffold via an array
 */
GooseHawk.child = [Lay('herring-gull'), Lay('corvus-corax')];

/*The hatch attribute is essentially what creates the component
 */
const gooseHawk = GooseHawk.hatch;

/* You can also add a child to a hatched scaffold
 */
gooseHawk.child = Lay('barn-owl');

/*Aviary is the app and is called with the outermost components as props. It is perfectly possible to pass more than
 * one component as props and they will be rendered in the same order as they're passed in the Aviary function
 */
Aviary(gooseHawk);
