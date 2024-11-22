import logo from "../../assets/logo1.png";
import busca from "../../assets/busca.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../../Pages/Inicio/Inicio";
import Doados from "../../Pages/Doados/Doados";
import QueroDoar from "../../Pages/QueroDoar/QueroDoar";
import S from "./header.module.scss"

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <section className={S.boxLogo}>
          <img src={logo} alt="Logo" />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={S.boxMenu}>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/livros-doados">Livros Doados</Link></li>
            <li><Link to="/quero-doar">Quero Doar</Link></li>
          </ul>
        </nav>
        <div className={S.boxInput}>
          <input  type="text" placeholder="O que você procura?"/>
          <img src={busca} alt="Ícone de busca" />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/livros-doados" element={<Doados />} />
        <Route path="/quero-doar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}