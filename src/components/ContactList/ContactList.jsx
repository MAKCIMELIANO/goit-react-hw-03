import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
}
