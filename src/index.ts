import { Header } from './components/header/header';
import { PET } from './mocks/pets';
import { Pets } from './components/list/list';

import './index.scss';

// eslint-disable-next-line no-unused-vars
const headerApp = new Header('#root', 'ADOPTA');
// eslint-disable-next-line no-unused-vars
const petsApp = new Pets('#root', PET);
