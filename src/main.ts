import { Aviary, Lay } from './AviaryJS';

const GooseHawk = Lay('goose-hawk');
const LesserWoodpecker = Lay('lesser-woodpecker');

GooseHawk.text = 'hejsan';

//Does work. Just haven't got the time to type Lay return value
GooseHawk.child = LesserWoodpecker;
//This also works
GooseHawk.click = () => {
  console.log('KRA');
};

const gooseHawk = GooseHawk.hatch;

Aviary(gooseHawk);
