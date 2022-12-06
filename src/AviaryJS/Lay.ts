import Hatch from './Hatch';

export interface Egg {
  name: string;
  text?: string;
  state?: {};
  children: Egg[];
  click?(): void;
  hatch?: any;
  child?: Egg;
  classes?: string[];
  class?: any;
  removeClass?: any;
}

const Lay = (name: string) => {
  class Lay extends HTMLElement {
    constructor() {
      super();
    }
  }

  customElements.define(name, Lay, { extends: 'div' });

  const target: Egg = {
    name,
    text: '',
    state: {},
    children: [],
  };

  const handler = {
    get(target: Egg, prop: string, reciever: any) {
      switch (prop) {
        case 'name':
          return target.name;
          break;
        case 'text':
          return target.text;
          break;
        case 'state':
          return target.state;
          break;
        case 'children':
          return target.children;
          break;
        case 'hatch':
          const pulli = Hatch(target);
          return pulli;
        default:
          break;
      }
    },
    set(target: Egg, prop: string, value: any) {
      if (typeof value === 'function') {
        switch (prop) {
          case 'click':
            target.click = value;
            break;
          default:
            break;
        }
      } else {
        switch (prop) {
          case 'text':
            target.text = value;
            break;
          case 'child':
            target.children.push(value);
            break;
          case 'class':
            if (!target.classes) target.classes = [];

            if (Array.isArray(value)) {
              target.classes.push(...value);
            } else {
              target.classes.push(value);
            }
            break;
          case 'removeClass':
            if (!target.classes) return false;
            target.classes = target.classes.filter((c) => c !== value);
        }
      }
      return true;
    },
  };
  return new Proxy(target, handler);
};

export default Lay;
