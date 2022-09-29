import React from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {

    const [modalIsOpen, setModalIsOpen] = React.useState(false)

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{props.title}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> : null}
            {modalIsOpen ? <Backdrop onCancel={closeModalHandler}/> : null}
        </div>
    );
}

export default Todo;