import React from 'react';
import { v4 as uuidv4 } from 'uuid';


import './Toolbar.css'

export default function Toolbar(props) {
    const {filters, selected, onSelectFilter} = props
  return (
    <li className='toolbar'>
        {
            filters.map(filter => {
                const className = filter === selected ? 'filter-selected filter' : 'filter';
                return <ul className = {className} onClick={() => onSelectFilter(filter) } key = {uuidv4()}>
                    {filter}
                </ul>
            })
        }
    </li>
  );
}
