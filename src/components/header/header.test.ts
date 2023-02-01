// eslint-disable-next-line no-unused-vars
import { Component } from '../component/component';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { Header } from './header';

describe('Given a Header component', () => {
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const mockTille = 'Test';
    const element = new Header('slot', mockTille);
    expect(element).toBeInstanceOf(Component);
    const h1 = screen.getByRole('heading', { name: mockTille });
    expect(h1).toBeInTheDocument();
    const p = screen.getByRole('note');
    expect(p).toBeInTheDocument();
  });
});
