import style from './style/Head.module.css'

const Head = () => {

    return (
        <div className={style.mainDiv}>
            <header className={style.header}>
                <h1 className={style.headText}>Online Code Editor</h1>
            </header>
            <article className={style.article}>
                <h2 className={style.articleText}>Задача: <code style={style.code}>Напишите функцию filterEvenNumbers, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа из исходного массива.</code></h2>
            </article>
        </div>
    );
};
export default Head;