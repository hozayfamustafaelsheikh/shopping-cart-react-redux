function Message(props) {
    return ( 
        <div className={'popup-message popup-message-success ' + ((props.showMessage) ? "op-1" : "op-0")}>
            {props.message}
        </div>
     );
}

export default Message;