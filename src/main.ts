import { Aviary, Lay } from './AviaryJS';

const GooseHawk = Lay('goose-hawk');

GooseHawk.text = 'hejsan';

const gooseHawk = GooseHawk.hatch;

const sparrow = GooseHawk.hatch;

gooseHawk!.child = sparrow;

Aviary(gooseHawk);
