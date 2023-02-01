// eslint-disable-next-line no-unused-vars
import { Component } from '../component/component';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given a Header component', () => {
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Header('slot', 'TODOS MERECEN UNA FAMILIA');
    expect(element).toBeInstanceOf(Component);
    expect(Header).toBe(Header);
  });
});
