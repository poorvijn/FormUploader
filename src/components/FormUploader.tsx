import './styles.css'
import Header from './Header'
import InputSection from './InputSection'
import Comments from './Comments'
import Example from './Example'

const FormUploader: React.FC = ()=>{
    return (
        <div className='formContainer'>
            <Header/>   
            <InputSection/>
            <Comments/>
            <Example/>
            <a  className='attribute' href="https://www.flaticon.com/free-icons/upload-file" title="upload file icons">Upload file icons created by Dewi Sari - Flaticon</a>
        </div>
    )
}

export default FormUploader;