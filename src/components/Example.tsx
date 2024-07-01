import './styles.css'
import excel_icon from '../assets/excel_icon.png'

const Example:React.FC = ()=>{
    return (
        <div className='formContainer__example'>
            <div className='formContainer__example__left'>
                <div className='formContainer__example__heading'>
                    <img className='formContainer__example__img' src={excel_icon}/>
                    <p className='formContainer__example_p'>Table Example</p>
                </div>
                <p className='formContainer__example_text'>You can download the attached example and use them as a starting point for your own file.</p>
            </div>
            <button className='formContainer__example_button'>Download</button>
        </div>
    )
}

export default Example;