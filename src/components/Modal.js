// we try our portal just for this modal
import ReactDOM from 'react-dom';

// typed "rfc" and pressed "TAB"
// if it was "_rfc" then the react was not imported

// Remember, component specific style sheets are also global
import './Modal.css';

// defined "children", then set its place, then written the content on the main (app.js) page
export default function Modal({children, modalKapama}) {
  return ReactDOM.createPortal((
    <div className='modal-backdrop' style={{
        border: "4px solid",
        borderColor: "#ff4500",
        textAlign: "center"
        }}>
        <div className='modal'>
            {children}
            <button onClick={modalKapama}>close</button>
        </div>
    </div>
    ), document.body)
    // document.body path kicks the section to the end of the body
}
