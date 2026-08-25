import { useId } from "react";

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {Object} [props.input]
 * @param {string} [props.input.type]
 * @param {boolean} [props.input.required]
 * @param {string} [props.input.name]
 * @param {Object} [props.styles]
 * @param {string} [props.styles.label]
 * @param {string} [props.styles.text]
 * @param {string} [props.styles.field]
 * @param {Object} [props.error]
 * @param {string} [props.error.message]
 * @param {string} [props.value]
 * @param {(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void} [props.onChange]
 */
export default function FormField({
  title,
  input = {},
  styles = {},
  error = {},
  onChange,
  value,
}) {
  // IDs
  const id = useId();
  const errorId = `${id}-error`;

  // Input defaults
  const { type = "text", required = false, name } = input;

  // Style defaults
  const {
    label = "text text-4 text-400 text-white",
    text = "text-400 text",
    field = "flex flex-column gap-2",
  } = styles;

  // Error defaults
  const { message = "" } = error;

  // Input
  const Component = type === "textarea" ? "textarea" : "input";

  const domInput = (
    <Component
      data-form
      name={name}
      className={`form__input form__input--${type}`}
      id={id}
      required={required}
      aria-describedby={errorId}
      value={value}
      onChange={onChange}
      {...(type !== "textarea" && { type })}
    />
  );

  return (
    <div className={`form__field ${field}`}>
      <label className={`form__label ${label}`} htmlFor={id}>
        {title}
        {required && (
          <span aria-hidden="true" className="form__unit">
            *
          </span>
        )}
      </label>

      <div className="form__input-wrapper">{domInput}</div>

      <span
        id={errorId}
        aria-live="polite"
        role="alert"
        className={`error__message hidden ${text}`}
        data-error={name}
      >
        {message}
      </span>
    </div>
  );
}
