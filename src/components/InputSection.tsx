import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import './styles.css'
import uploadIcon from '../assets/upload-file.png'

const InputSection: React.FC = ()=>{
    const [acceptedFile, setAcceptedFile] = useState<File>(); 

    const onDrop = useCallback((acceptedFiles,newRejectedFiles) => {
        setAcceptedFile(acceptedFiles[0]);
        console.log(newRejectedFiles);
      }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, 
        accept: {
        'application/pdf':['.pdf'],
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
        },
        maxSize: 1024 * 25000
    });

    return (
        <div className='formContainer_input_div'>
            <img className='formContainer_input_div_img' src={uploadIcon}/>
            <div className='formContainer_input_innerDiv'  {...getRootProps()}>
                <input className='formContainer_input' type="file" {...getInputProps()}/>
                {
                    isDragActive ?
                    <p className='formContainer_input_p'>Drop the files here ...</p> :
                    <p className='formContainer_input_p'>Drag and drop your file here, or click to select files</p>
                }
            {acceptedFile && <p className='formContainer_input_innerDiv_fileName'>{acceptedFile.name}</p>}
            </div>
        </div>        
    )
}

export default InputSection;