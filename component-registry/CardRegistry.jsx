import React from 'react';
import { Registry } from './Registry';
import BookCard from '../components/functional/BookCard';
import FurnitureCard from '../components/functional/FurnitureCard';
import DVDCard from '../components/functional/DVDCard';
// import BookCard from '../BookCard';
// import FurnitureCard from '../FurnitureCard';
// import DVDCard from '../DVDCard';
const cardRegistry = new Registry();

cardRegistry.insert("DVD", DVDCard);
cardRegistry.insert("Furniture", FurnitureCard);
cardRegistry.insert("Book", BookCard);

const SelectCard=({productType, props, handleChange} )=>{
  // console.log(productType)
  const SelectedCard = cardRegistry.get(productType) || null;
  if(!SelectedCard) return null;
  return <SelectedCard props={props} handleChange={handleChange} />
}
export default SelectCard;