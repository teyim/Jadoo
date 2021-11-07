import React from "react";

const useModal = () => {
    let [modal, setModal] = React.useState(false);
    let [modalContent, setModalContent] = React.useState();

    let handleModal = (content = false) => {
        setModal(!modal);
        if (content) {
            setModalContent(content);
        }
    };

    return { modal, handleModal, modalContent };
}

export default useModal
