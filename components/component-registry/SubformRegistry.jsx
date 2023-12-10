import React from 'react';
// import DVDForm from './DVDForm';
// import FurnitureForm from './FurnitureForm';
// import BookForm from './BookForm';
import DVDSubform from '../class-based/DVDSubform';
import FurnitureSubform from '../class-based/FurnitureSubform';
import BookSubform from '../class-based/BookSubform';
import { Registry } from '../../classes/Registry';

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