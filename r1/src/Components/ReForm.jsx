import {useState} from 'react';
function ReForm() {

    const [text, setText] = useState('');
    const [textarea, setTextarea] = useState('');
    const [select, setSelect] = useState('1');
    const [checkbox, setCheckbox] = useState(0);
    const [radio, setRadio] = useState('3');


    const textChange = e => {
        setText(e.target.value);
    }

    const textareaChange = e => {
        setTextarea(e.target.value);
    }

    const selectChange = e => {
        setSelect(e.target.value);
    }

    const checkboxChange = () => {
        setCheckbox(c => c ? 0 : 1);
    }

    const radioChange = e => {
        setRadio(e.target.value);
    }

    return (
        <>
        <fieldset>
            <legend>TEXT</legend>
            <input type="text" onChange={textChange} value={text}></input>
        </fieldset>

        <fieldset>
        <legend>TEXTAREA</legend>
        <textarea onChange={textareaChange} value={textarea}></textarea>
        </fieldset>

        <fieldset>
        <legend>SELECT</legend>
        <select value={select} onChange={selectChange}>
            <option value="1">a1</option>
            <option value="2">b2</option>
            <option value="3">c3</option>
        </select>
        </fieldset>

        <fieldset>
        <legend>CHECKBOX</legend>
        <input type="checkbox" onChange={checkboxChange} checked={checkbox}></input>
        </fieldset>

        <fieldset>
        <legend>RADIO</legend>
            A1<input onChange={radioChange} type="radio" name="r" value="1" checked={radio === '1'} />
            B2<input onChange={radioChange} type="radio" name="r" value="2" checked={radio === '2'} />
            C3<input onChange={radioChange} type="radio" name="r" value="3" checked={radio === '3'} />
        </fieldset>

        </>

        
     
    )
}

export default ReForm;