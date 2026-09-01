/**
 * @param {Object} props
 * @param {string|number} props.index
 * @param {string} props.title
 * @param {React.ReactNode} props.children
 * @param {Object} [props.styles]
 * @param {string} [props.styles.container]
 * @param {string} [props.styles.title]
 */
export default function Screen({ index, title, children, styles = {} }) {
  const { container = "text text-5", title: titleStyle = "text-7 gap-3" } =
    styles;

  return (
    <section className={`container container--fullscreen ${container}`}>
      <h2 className={`container__header ${titleStyle}`}>
        <span>{index}</span>
        {title}
      </h2>

      <div className="container__sub-container">
        <div className="container container--primary wide">{children}</div>
      </div>
    </section>
  );
}
