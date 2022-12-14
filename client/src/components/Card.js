const Card = (props) => {

    return (
      <section className="card">
        <h1 className="main-heading"> {props.name}</h1>
        <p className="body-text">{props.body}</p>
        <p className="source-link">Source: <a href={props.link} target="_blank" rel="noopener noreferrer">Wikipedia</a> </p>
      </section>
    );
  };
  
  export default Card;
  