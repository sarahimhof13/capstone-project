const ModifyButton = ({backgroundColor, onClick, name}) => {
    return (
        <button className="modify-button" onClick={onClick} style={backgroundColor} >{name}</button>
    )
}

export default ModifyButton;