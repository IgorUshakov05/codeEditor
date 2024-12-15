import React, { useState } from 'react';
import styles from './style/SelectLang.module.css';  // Импортируем стили

const SelectLang = ({ selectValue }) => {
    const [selectedLang, setSelectedLang] = useState('javascript');
    const [langs] = useState(['JavaScript', 'Python', 'Go', 'Ruby'])
    const handleLangChange = (event) => {
        setSelectedLang(event.target.value);
        selectValue(event.target.value)
    };

    return (
        <select
            id="language-select"
            className={styles.select}
            value={selectedLang}
            onChange={handleLangChange}
        >
            {langs.map((item, index) => <option value={item} key={index}>{item}</option>)}
        </select>
    );
};

export default SelectLang;
