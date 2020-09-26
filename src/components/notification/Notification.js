import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../index.css';
import fadeNotificationStyles from '../../animationStyles/fadeNotification.module.css';
import { CSSTransition } from 'react-transition-group';
import { notificationAction } from '../../redux/contacts/contacts-actions';
import { getErrorsSelector } from '../../redux/contacts/contacts-selectors';
import { getErrorsAuthSelector } from '../../redux/auth/auth-selectors';
import { notificationAuthAction } from '../../redux/auth/auth-actions';

const Notification = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const errorsContact = getErrorsSelector(state);
  const errorsAuth = getErrorsAuthSelector(state);

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      dispatch(notificationAction(''));
      dispatch(notificationAuthAction(''));
      setShow(false);
    }, 2000);
  }, [errorsContact || errorsAuth]);

  return (
    <>
      {(errorsContact || errorsAuth) && (
        <CSSTransition
          in={show}
          classNames={fadeNotificationStyles}
          timeout={250}
          unmountOnExit
        >
          <div className="notification">{errorsContact || errorsAuth}</div>
        </CSSTransition>
      )}
    </>
  );
};

export default Notification;
