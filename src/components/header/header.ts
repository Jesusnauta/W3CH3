/* eslint-disable no-new */
/* eslint-disable no-unused-vars */

import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string, public title: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforebegin');
  }

  private createTemplate() {
    return `
    <header class="header">
      <h1>${this.title}</h1>
      <p role="generic" aria-label="info"></p>
      <p class="text"> 'TODOS MERECEN UNA FAMILIA'</p>
    </header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
