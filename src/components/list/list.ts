/* eslint-disable no-unused-vars */
import { PetStructure } from '../../models/pet';
import { Component } from '../component/component';

import './list.scss';

export class Pets extends Component {
  constructor(public selector: string, public pets: PetStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('beforebegin');
  }

  createTemplate() {
    const items = this.pets
      .map(
        (item) =>
          `<li>
          <img src="./public/OIP (1).jfif" alt="dog" height="5px">
          <div>ID: ${item.id}</div>
          <div>Nombre del perro: ${item.name}</div>
          <div>Raza: ${item.breed}</div>
          <div>¿Adoptado?: ${item.isAdopted}</div>
          <div>Dueño: ${item.owner}</div>

        </li>`
      )
      .join('\n');

    return `
      <section><ul>${items}</ul></section>
    `;
  }
}
