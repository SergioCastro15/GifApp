import { useState, useEffect } from 'react';
import { AddCategories } from './components/AddCategories';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['dragon ball']);

  const onAddCategory = (inputValue) => {
    if(categories.includes(inputValue)) return;
    setCategories([inputValue, ...categories]);
    // setCategories( cat => [...cat, inputValue])
  }

  return (
    <>
      <div data-testid="title">GifExpertApp</div>
      <AddCategories onAddCategory={onAddCategory}/>
      { categories.map( category => (
        <GifGrid key={category} category={category}/>
      ))}
    </>
  )
} 
