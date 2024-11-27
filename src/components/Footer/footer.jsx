import S from "./footer.module.scss"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"
import linkedin from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"

export default function footer(){
    return(
        <footer>
            <section className={S.boxSocial}>
                <h3>4002-8922</h3>
                <nav>
                    <a href=""> <img src={facebook} alt="logo face" /></a>
                    <a href=""> <img src={twitter} alt="logo twitter" /></a>
                    <a href=""> <img src={youtube} alt="logo youtube" /></a>
                    <a href=""> <img src={linkedin} alt="logo linkedin" /></a>
                    <a href=""> <img src={instagram} alt="logo instagram" /></a>
                </nav>
            </section>
            <section className={S.boxEnd}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}