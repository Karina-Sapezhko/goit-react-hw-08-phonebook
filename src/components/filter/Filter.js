import React from 'react';
import { CSSTransition } from 'react-transition-group';
import fadeFilterStyles from '../../animationStyles/Filter.module.css';
import '../../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-actions';
import {
  getFilterSelector,
  getItemsSelector,
} from '../../redux/contacts/contacts-selectors';
import FilterTextField from '../../ui/FilterTextField';

const Filter = ({ showFilter }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const items = getItemsSelector(state);
  const filter = getFilterSelector(state);

  const handleFilterChange = event =>
    dispatch(filterContacts(event.currentTarget.value));

  return (
    <CSSTransition
      in={showFilter || items.length > 1}
      appear={showFilter}
      timeout={500}
      classNames={fadeFilterStyles}
      unmountOnExit
    >
      <div className="form-contact">
        <FilterTextField
          type="text"
          label="Find contacts by name"
          value={filter}
          handleFilterChange={handleFilterChange}
        />
      </div>
    </CSSTransition>
  );
};

export default Filter;
