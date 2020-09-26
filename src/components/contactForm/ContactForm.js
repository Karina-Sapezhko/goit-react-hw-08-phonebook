import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import '../../index.css';
import { notificationAction } from '../../redux/contacts/contacts-actions';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getItemsSelector } from '../../redux/contacts/contacts-selectors';
import TextFields from '../../ui/TextFields';
import MainButton from '../../ui/MainButton';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const items = getItemsSelector(state);

  const handleSubmitForm = event => {
    event.preventDefault();

    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    const findName = items.find(el => el.name === contact.name);

    if (findName) {
      return dispatch(notificationAction('Contact already exists!'));
    } else if (isNaN(contact.number)) {
      return dispatch(
        notificationAction(
          'In the section of numbers you can specify only numbers!',
        ),
      );
    }

    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="form-contact" onSubmit={handleSubmitForm}>
      <TextFields type={'text'} label="name" value={name} setState={setName} />
      <TextFields
        type={'tel'}
        label="number"
        value={number}
        setState={setNumber}
      />
      <MainButton type="submit" text="Add contact" />
    </form>
  );
};

export default ContactForm;
