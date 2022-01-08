import React,{useContext} from "react";
import ReactDOM from 'react-dom'
import { ModalContext } from "Context/context";

const Modal=()=>{
    let { modal, handleModal, modalContent }=useContext(ModalContext)
  if(modal){
    return ReactDOM.createPortal(
        <>
                    <div
                className="justify-center font-rubik items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-md bg-blue-400" >
                        <div className="relative w-11/12 md:w-2/5 my-6 mx-auto max-w-3xl bg-gray-600 ">
                            {/*content*/}
                            <div className=" rounded-sm shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex justify-end">
                                    <button
                                className="bg-red-400  px-3 font-semibold outline-none focus:outline-none"
                                        onClick={() => handleModal()}
                                    >
                                        <span className=" opacity-60 block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative py-2 flex-auto">
                                       {modalContent}
                                </div>
                            </div>
                        </div>
                    </div>
            <div className="opacity-40 fixed  inset-0 z-40 bg-black" onClick={() => handleModal()}></div>
        </>,
        document.querySelector('#modal-root')
    );
    }
    else{
        return null
    }
}
export default Modal;
