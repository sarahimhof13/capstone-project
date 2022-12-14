const DefaultButton = ({ number, description, onClick, backgroundColor }) => {
    return (
      <button className="default-button" onClick={onClick} style={backgroundColor}>
        <span id="button-number">{number}</span><span>{description}</span>
      </button>
    );
  };
  
  export default DefaultButton;
  