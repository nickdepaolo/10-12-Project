import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';


const CharacterModal = (props) => {
    const [modalIsOpenAdv, setIsOpenAdv] = useState(false)
    

    const info = props.info;
    const trigger = props.trigger;


    function checkTrigger() {
        trigger? openModalAdv() : closeModalAdv()
    }

    function openModalAdv() {
        setIsOpenAdv(true); 
    }

    function closeModalAdv() {
        setIsOpenAdv(false);
    }

    return(
        <div>

            <Modal
            closeTimeoutMS={500}
            isOpen={modalIsOpenAdv}
            onRequestClose={closeModalAdv}>

                

                <button onClick={closeModalAdv} >Close</button>

            </Modal>

        </div>
    )
}

export default CharacterModal