import './styles.css'

const Comments:React.FC = ()=>{
    return (
        <div className='formContainer__comments'>
            <p>Supported formats: .docx ,.pdf</p>
            <p>Maximum size: 25MB</p>
        </div>
    )
}

export default Comments;