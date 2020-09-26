import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ContactForm from '../components/contactForm/ContactForm';
import ContactList from '../components/contactList/ContactList';
import Filter from '../components/filter/Filter';
import '../index.css';
import fadeStartListStales from '../animationStyles/logo.module.css';
import { fetchContacts } from '../redux/contacts/contacts-operations';
import { filterContacts } from '../redux/contacts/contacts-actions';
import { getItemsSelector } from '../redux/contacts/contacts-selectors';

const ContactsPage = () => {
  const [showFilter, setShowFilter] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const items = getItemsSelector(state);

  useEffect(() => {
    dispatch(fetchContacts());
    if (items.length > 1) {
      setShowFilter(true);
    }
  }, []);

  useEffect(() => {
    if (items.length <= 1) {
      setShowFilter(false);
      dispatch(filterContacts(''));
    }
  }, [items]);

  return (
    <>
      <div>
        <ContactForm />
        <h2 className="contact-title">Contacts</h2>
        <Filter showFilter={showFilter} />

        <CSSTransition
          in={true}
          appear={true}
          classNames={fadeStartListStales}
          timeout={250}
          unmountOnExit
        >
          <ContactList />
        </CSSTransition>
      </div>
    </>
  );
};
export default ContactsPage;
