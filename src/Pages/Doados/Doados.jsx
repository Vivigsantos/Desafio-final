import S from "./doados.module.scss"
import livro from "../../assets/livro.png"


export default function Doados(){
    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxcard}>
                <article>
                    <img src={livro} alt="" />
                    <h3></h3>
                    <p>O Protagonista</p>
                    <p>Suzane Andrade</p>
                    <p>Ficção</p>
                </article>
            </section>
        </section>
    )
}