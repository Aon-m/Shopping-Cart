import injectProps from "../../helpers/injectProps";

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.name
 * @param {React.ReactNode} props.children
 * @param {Object} [props.styles]
 * @param {string} [props.styles.fieldset]
 * @param {string} [props.styles.legend]
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} [props.onChange]
 * @param {Object} [props.values]
 * @param {string} [props.values.name]
 * @param {string} [props.values.value]
 */
export default function FormFieldSet({
  title,
  name,
  children,
  styles = {},
  onChange,
  values = {},
}) {
  const {
    fieldset = "text text-white text-center text-5 text-600",
    legend = "",
  } = styles;

  return (
    <fieldset className={`form__fieldset ${fieldset}`}>
      <legend className={`form__legend ${legend}`}>{title}</legend>
      {injectProps(children, (child) => ({
        onChange: (e) => onChange(e, name),
        value: values[child.props.input?.name] ?? "",
      }))}
    </fieldset>
  );
}
