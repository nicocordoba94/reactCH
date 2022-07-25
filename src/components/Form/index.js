import React from 'react';
//import './Form.css'


const Input = (props) => {
    return(
        <input type="text" placeholder={props.placeholder}></input>
    )
}

const TextArea = () => {
    return(
        <textarea styles={{width: 500, height: 400}}></textarea>
    )
}

const Submit = (props) => {
   // return(
        //<button type=
   // )
}

function Form (props){
    return(
        <form>
            <Input></Input>
            <Input></Input>
            <TextArea></TextArea>
            <Submit></Submit>
        </form>
    );
}

export default Form;