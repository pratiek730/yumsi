import './input-field.styles.css'

function InputFeild({Icon, name, type, ...props}) {
    return ( 
        <div className="mb3">
            
            <Icon className="custom-icon"/>
            <input name={name} className="custom-input-field form-control" type="text" {...props}/>
 
        </div>
     );
}

export default InputFeild;