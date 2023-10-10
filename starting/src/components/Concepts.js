const Concepts = (_props) => {
  return (
    <li className="concept">
      <img src={_props.item.image} alt=" {_props.item.title}" />
      <h2>{_props.item.title}</h2>
      <p>{_props.item.description}</p>
    </li>
  );
};

export default Concepts;
