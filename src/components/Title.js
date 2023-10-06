// Remember, component specific style sheets are also global
import './Title.css';


export default function Title (propLar) {
    // instead of "(propLar)"", we may use "({başlık, altbaşlık})"
    return (
        // We've once removed the string, "div". And we've packed our component as a "fragment"
        // Later on we wanted to give the section a className and reversed it
        <div className='title-block'>
            <h1 className="title">{propLar.başlık}</h1>
            {/* if we use "({başlık, altbaşlık}), just type "başlık" here */}
            <br></br>
            <h2 className="subtitle">{propLar.altbaşlık}</h2>
        </div>
    )
}
