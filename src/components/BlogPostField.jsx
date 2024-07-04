import styles from '../styles/BlogPostField.module.scss';

export default function BlogPostField({
  name,
  type,
  value,
  onChange,
  labelText,
  className,
  required,
}) {
  return (
    <label htmlFor={name} className="font-bold">
      {labelText}
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={onChange}
          className={`${styles.textarea} ${className}`}
          name={name}
          id={name}
          rows={10}
          required={required}
        />
      ) : (
        <input
          value={value}
          onChange={onChange}
          className={`${styles.textarea} ${className}`}
          type={type}
          name={name}
          id={name}
          required={required}
        />
      )}
    </label>
  );
}
