import { Egg } from './Lay';

interface Pulli {
  pulli: HTMLElement;
  name: string;
  text?: string;
  state?: {};
  children?: Egg[];
  child?: Egg;
  click?(): any;
}

const Hatch = (egg: Egg) => {
  const { name, text, click, children, state } = egg;
  const pulli = document.createElement(name);

  if (text) {
    pulli.append(document.createTextNode(text));
  }

  if (click) {
    pulli.addEventListener('click', click);
  }

  if (children && children.length) {
    for (const child of children) {
      pulli.appendChild(child.hatch.pulli);
    }
  }

  const target: Pulli = {
    pulli,
    name,
    text,
    state,
    children,
  };

  const handler = {
    get(target: Pulli, prop: string, reciever: any) {
      switch (prop) {
        case 'pulli':
          return target.pulli;
          break;
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
        default:
          break;
      }
    },
    set(target: Pulli, prop: string, value: any) {
      if (typeof value === 'function') {
        switch (prop) {
          case 'click':
            target.click = value;
            break;
        }
      } else {
        switch (prop) {
          case 'text':
            target.text = value;
            break;
          case 'child':
            target.children!.push(value);
            target.pulli.appendChild(value.pulli);
            break;
        }
      }
      return true;
    },
  };

  return new Proxy(target, handler);
};

export default Hatch;
