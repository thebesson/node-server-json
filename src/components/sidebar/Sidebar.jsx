import React from 'react';
import { AddBook } from './AddBook';
import { NavMenu } from './NavMenu';
import { Categories } from './Categories';

export const Sidebar = ({ openPopup, categories, setCategory }) => (
  <sidebar>
    <AddBook onClick={openPopup} />
    <NavMenu />
    <Categories setCategory={setCategory} categories={categories} />
  </sidebar>
);
