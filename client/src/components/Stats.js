const Stats = (props) => {
    return (
      <section>
        <div className="stats-container">
          <p className="sub-heading">{props.heading}</p>
          <p className="medium-heading">{props.body}</p>
        </div>
      </section>
  
    );
  };
  
  export default Stats;
  