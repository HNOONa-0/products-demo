import React from 'react';
import DVDForm from './DVDForm';
import FurnitureForm from './FurnitureForm';
import BookForm from './BookForm';
import NewDVDForm from './NewDVDForm';
import NewFurnitureForm from './NewFurnitureForm';
import NewBookForm from './NewBookForm';
import FormHOC from './FormHOC';

const formRegistry = {
  "DVD": NewDVDForm,
  "Furniture": NewFurnitureForm,
  "Book": NewBookForm,
};

const NewFormRegistry = ({productType, argRef}) => {
    const SelectedForm = formRegistry[productType] || null;
    if(!SelectedForm) return null;
    const EnhancedNewForm=FormHOC(SelectedForm,argRef);
    return <EnhancedNewForm />
    
};  
export default NewFormRegistry;