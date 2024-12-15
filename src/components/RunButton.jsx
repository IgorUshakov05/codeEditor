import { useState } from 'react';
import style from './style/RunButton.module.css'
import { observer } from 'mobx-react'
import store from '../store/store'
const Run = observer(() => {
    function executeCodeWithLogs(code) {
        let logs = [];

        const originalConsoleLog = console.log;
        console.log = (...args) => {
            logs.push(args.join(' '))
        };

        try {
            new Function(code)();
        } catch (e) {
            logs.push(`Ошибка выполнения: ${e.message}`);
        } finally {
            console.log = originalConsoleLog;
        }

        return logs;
    }

    let [start, setStart] = useState(false);

    function compileJS() {
        setStart(true);
        setTimeout(() => {
            try {
                setStart(false);

                if ((store.lang).toLowerCase() !== 'javascript') {
                    store.setError(true);
                    store.setMessage('Возможно выполнить только JavaScript');
                    return;
                }

                const logs = executeCodeWithLogs(store.code);

                if (logs.length === 0 || logs.some(log => log.includes('Ошибка'))) {
                    store.setError(true);
                    store.setMessage(logs.join('\n'));
                    return;
                }

                store.setError(false);
                store.setMessage(logs.join('\n'));

            } catch (e) {
                store.setError(true);
                store.setMessage(`Ошибка: ${e.message}`);
            }
        }, 1000);
    }

    return (
        <>
            <button onClick={compileJS} className={`${style.button} ${start ? style.presed : ''}`}>
                Run
                {!start ?
                    <svg style={{ marginLeft: "10px", width: "20px", height: "20px" }} xmlns="http://www.w3.org/2000/svg">
                        <polygon points="5,3 5,17 15,10" fill="white" opacity="1" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "10px", width: "20px", height: "20px" }} viewBox="0 0 50 50">
                        <circle cx="25" cy="25" r="20" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray="126.92" strokeDashoffset="0">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 25 25"
                                to="360 25 25"
                                dur="1s"
                                repeatCount="indefinite" />
                        </circle>
                    </svg>
                }
            </button>

        </>
    );
})
export default Run;