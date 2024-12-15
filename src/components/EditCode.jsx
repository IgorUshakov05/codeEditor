import React, { useState } from 'react';
import style from './style/Editor.module.css';
import Editor from '@monaco-editor/react';
import Run from './RunButton'
import SelectLang from './SelectLang';

const EditCode = () => {
    const [lang, setLang] = useState('javascript');
    const [code, setCode] = useState(`/* 
filterEvenNumbers([1, 2, 3, 4, 5, 6]) 
Возвращает: [2, 4, 6]

filterEvenNumbers([11, 13, 15]) 
Возвращает: []

filterEvenNumbers([0, -2, -4, 7, 8]) 
Возвращает: [0, -2, -4, 8]
*/

function filterEvenNumbers() {
    /* Your code */ 
}
`);

    function handleChange(value) {
        setLang(value); // Просто обновляем язык
    }

    function handleEditorChange(value) {
        setCode(value); // Обновляем код в редакторе
    }

    return (
        <>
            <div className={style.panel}>
                <SelectLang selectValue={handleChange} />
                <Run />
            </div>
            <div className={style.EditorPlace}>
                <Editor
                    r defaultLanguage={lang}
                    value={code}
                    onChange={handleEditorChange}
                />
            </div>
        </>
    );
};

export default EditCode;
