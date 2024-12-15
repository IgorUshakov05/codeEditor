import React from 'react';
import style from './style/Editor.module.css';
import Editor from '@monaco-editor/react';
import store from '../store/store.js'
import { observer } from 'mobx-react'
import Run from './RunButton'
import SelectLang from './SelectLang';

const EditCode = observer(() => {

    function handleChange(value) {
        store.setLang(value);
    }

    function handleEditorChange(value) {
        store.setCode(value)
    }

    return (
        <>
            <div className={style.panel}>
                <SelectLang selectValue={handleChange} />
                <Run />
            </div>
            <div className={style.EditorPlace}>
                <Editor
                    defaultLanguage={store.lang}
                    value={store.code}
                    disabled={true}
                    onChange={handleEditorChange}
                />
            </div>
        </>
    );
})
export default EditCode;
