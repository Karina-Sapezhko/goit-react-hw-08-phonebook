import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import fadeListStyles from '../../animationStyles/list.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { getFilterContactsSelector } from '../../redux/contacts/contacts-selectors';
import ListItemContact from '../../ui/ListItem';

const ContactList = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const filterContacts = getFilterContactsSelector(state);

  const handleClick = id => dispatch(deleteContact(id));

  return (
    <>
      <TransitionGroup component="ul">
        {filterContacts.map(({ id, name, number }) => (
          <CSSTransition key={id} classNames={fadeListStyles} timeout={250}>
            <ListItemContact
              name={name}
              number={number}
              id={id}
              handleClick={handleClick}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default ContactList;
