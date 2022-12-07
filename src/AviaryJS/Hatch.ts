import { Egg } from './Lay';

interface Pulli {
  pulli: HTMLElement;
  name: string;
  text?: string;
  state?: {};
  children?: Egg[];
  child?: Egg;
  click?(): any;
  classes?: string[];
  class?: any;
  removeClass?: any;
}

const Hatch = (egg: Egg) => {
  const { name, text, click, children, state, classes } = egg;
  const pulli = document.createElement(name);

  if (classes) {
    for (const c of classes) {
      pulli.classList.add(c);
    }
  }

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
          return false;
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
            if (!target.children) target.children = [];

            if (Array.isArray(value)) {
              for (const child of value) {
                target.children.push(child);
                if (child.hasAttribute('pulli')) {
                  target.pulli.appendChild(child.pulli);
                } else {
                  target.pulli.appendChild(child.hatch.pulli);
                }
              }
            }
            break;
          case 'class':
            if (!target.classes) target.classes = [];

            if (Array.isArray(value)) {
              for (const c of value) {
                target.classes.push(c);
                target.pulli.classList.add(c);
              }
            } else {
              target.classes.push(value);
              target.pulli.classList.add(value);
            }
            break;
          case 'removeClass':
            if (!target.classes) return false;
            target.classes = target.classes.filter((c) => c !== value);
            target.pulli.classList.remove(value);
        }
      }
      return true;
    },
  };

  return new Proxy(target, handler);
};

export default Hatch;
