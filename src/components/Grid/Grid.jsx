export default function Grid({ children, classes = [] }) {
  let classNames = classes.join(" ");

  return <div className={`grid ${classNames ? classNames : ""}`}>{children}</div>;
}
