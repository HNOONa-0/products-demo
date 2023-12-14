import React from 'react';
import { Registry } from './Registry';
import BookCard from '../components/functional/BookCard';
import FurnitureCard from '../components/functional/FurnitureCard';
import DVDCard from '../components/functional/DVDCard';

const cardRegistry = new Registry();
cardRegistry.insert("DVD", DVDCard);
cardRegistry.insert("Furniture", FurnitureCard);
cardRegistry.insert("Book", BookCard);

// react memo now working by keeping a reference to
// checkboxes set
const SelectCard = React.memo(
  ({ productType, props, handleChange }) => {
    const SelectedCard = cardRegistry.get(productType) || null;
    if (!SelectedCard) return null;
    // console.log("rerender "+productType);
    return <SelectedCard props={props} handleChange={handleChange} />;
  },
  (prevProps, nextProps) => {
    return (
      prevProps.props === nextProps.props
    );
  }
);
// const SelectCard = ({ productType, props, handleChange }) => {
//   const SelectedCard = cardRegistry.get(productType) || null;
//   if (!SelectedCard) return null;

//   return <SelectedCard props={props} handleChange={handleChange} />;
// };
export default SelectCard;
