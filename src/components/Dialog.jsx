import style from './style/Dialog.module.css';
import { observer } from 'mobx-react';
import store from '../store/store.js';

function Error({ message }) {
    return (
        <div className={style.code}>
            <h3>Error: </h3>
            <span>{message}</span>
        </div>
    );
}

function Success({ message }) {
    return (
        <div className={style.code}>
            <h3>Result: </h3>
            <span>{message}</span>
        </div>
    );
}

const Dialog = observer(() => {
    if (store.message) {
        return (
            <div className={`${style.dialog} ${store.error ? style.error : style.success}`}>
                {store.error ? <Error message={store.message} /> : <Success message={store.message} />}
            </div>
        );
    }
    return null; 
});

export default Dialog;
