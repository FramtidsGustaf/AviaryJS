export interface AppElement extends HTMLElement {}

//TODO TYPE CHILDREN
const Aviary = (...children: any) => {
  class Application extends HTMLElement {
    constructor() {
      super();
    }
  }

  customElements.define('aviary-app', Application, { extends: 'div' });
  const element: AppElement = document.createElement('aviary-app');

  for (const child of children) {
    element.appendChild(child.pulli);
  }

  const entry: HTMLElement = document.querySelector('#entry')!;

  entry.replaceWith(element);
};

export default Aviary;
