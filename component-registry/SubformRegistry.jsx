import React from 'react';
import { Registry } from './Registry';

import DVDSubform from '../components/classical/DVDSubform';
import FurnitureSubform from '../components/classical/FurnitureSubform';
import BookSubform from '../components/classical/BookSubform';
const subformRegistry = new Registry();

subformRegistry.insert("DVD", DVDSubform);
subformRegistry.insert("Furniture", FurnitureSubform);
subformRegistry.insert("Book", BookSubform);

const SelectSubform=({productType, argRef=null} )=>{
  const SelectedForm = subformRegistry.get(productType) || null;
  if(!SelectedForm) return null;
  return <SelectedForm ref={argRef}/>
}
export default SelectSubform;