import { FaUser, FaPhone } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ contact, onDeleteContact }) {
  return (
    <div className={css.contact}>
      <div>
        <h2 className={css.title}>
          <FaUser />
          {contact.name}
        </h2>
        <p className={css.number}>
          <FaPhone /> {contact.number}
        </p>
      </div>

      <button
        className={css.button}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
}
