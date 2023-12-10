import React from 'react';
import DVDForm from './DVDForm';
import FurnitureForm from './FurnitureForm';
import BookForm from './BookForm';

const formRegistry = {
  "DVD": DVDForm,
  "Furniture": FurnitureForm,
  "Book": BookForm,
};

const FormRegistry = ({productType}) => {
    const SelectedForm = formRegistry[productType] || null;
    if(!SelectedForm) return null;
    return <SelectedForm />
    
};  
export default FormRegistry;