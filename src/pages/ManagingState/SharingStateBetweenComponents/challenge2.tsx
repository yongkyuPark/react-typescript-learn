import React, { useState, ChangeEvent } from 'react';
import { foods, filterItems } from './data.js';

interface Food {
    id: number;
    name: string;
    description: string;
}
  
interface SearchBarProps {
    query: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
  
interface ListProps {
    items: Food[];
}

const FilterableList = () => {
    const [query, setQuery] = useState('');
    const results = filterItems(foods, query);

    function handleChange(e : ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);
    }

    return (
        <>
        <SearchBar
            query={query}
            onChange={handleChange}
        />
        <hr />
        <List items={results} />
        </>
    );
}

const SearchBar = ({ query, onChange } : SearchBarProps) => {
    return (
        <label>
          Search:{' '}
          <input
            value={query}
            onChange={onChange}
          />
        </label>
    );
}

const List = ({ items } : ListProps) =>{
    return (
        <table>
          <tbody> 
            {items.map(food => (
              <tr key={food.id}>
                <td>{food.name}</td>
                <td>{food.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
    );
}

export default FilterableList;
