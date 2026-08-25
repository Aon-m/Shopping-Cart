import "./Form.scss";
import { useState } from "react";
import injectProps from "@/shared/helpers/injectProps";

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {React.ReactNode} props.children
 * @param {React.ReactNode} props.buttons
 * @param {Object} [props.styles]
 * @param {string} [props.styles.form]
 * @param {string} [props.styles.header]
 * @param {string} [props.styles.content]
 * @param {string} [props.styles.title]
 * @param {string} [props.styles.buttons]
 * @param {string} [props.styles.body]
 * @param {Object} [props.data]
 * @param {(formData: Object, event: React.FormEvent<HTMLFormElement>)  => void} [props.onSubmit]
 */
export default function Form({
  title,
  children,
  buttons,
  styles = {},
  onSubmit,
  data,
}) {
  // Style defaults
  const {
    form = "card",
    header = "card__header",
    content = "card__content",
    body = "card__body",
    title: titleStyle = "card__title text text-white text-center text-6",
    buttons: buttonsStyle = "card__buttons flex flex-768-column",
  } = styles;

  // Submit
  const [formData, setFormData] = useState(() => data ?? {});

  function updateData(data) {
    onSubmit?.(data);
  }

  function handleChange(e, section) {
    const { name, value } = e.target;

    setFormData((prev) => {
      const next = {
        ...prev,
        [section]: {
          ...prev[section],
          [name]: value,
        },
      };

      updateData(next);
      return next;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateData(formData);
  }

  return (
    <form className={`form ${form}`} onSubmit={handleSubmit}>
      <div className={`form__content ${content}`}>
        <div className={`form__header ${header}`}>
          <h2 className={`form__title ${titleStyle}`}>{title}</h2>
        </div>

        <div className={`form__body ${body}`}>
          {injectProps(children, (child) => ({
            onChange: handleChange,
            values: formData[child.props.name] ?? "",
          }))}

          {buttons && (
            <div className={`form__buttons ${buttonsStyle}`}>{buttons}</div>
          )}
        </div>
      </div>
    </form>
  );
}
