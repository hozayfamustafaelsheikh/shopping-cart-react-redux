function Message(props) {
    return (
        <>
            {/* start popup message */}
            <div className={'popup-message popup-message-success ' + ((props.showMessage) ? "op-1" : "op-0")}>
                {props.message}
            </div>
            {/* end start popup message */}
        </>
    );
}

export default Message;