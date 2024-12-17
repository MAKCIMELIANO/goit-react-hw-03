import css from './SearchBox.module.css';

export default function SearchBox({ onFilter, value }) {
  return (
    <div className={css.container}>
      <p className={css.label}>Find contacts by name or number</p>
      <input
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
        className={css.input}
      />
    </div>
  );
}
