import S from "./queroDoar.module.scss"
import livro from "../../assets/Vector.png"

export default function QueroDoar(){
    return(
        <section  className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form action=""></form>
                <div>
                    <img src={livro} alt="logo do livro da informação" />
                    <h3>Informações do</h3>                </div>
                    <input type="text" placeholder="Titulo" />
                    <input type="text" placeholder="Categoria"/>
                    <input type="text" placeholder="Autor"/>
                    <input type="text" placeholder="Link da Imagem" />
            </section>
        </section>
    )
}