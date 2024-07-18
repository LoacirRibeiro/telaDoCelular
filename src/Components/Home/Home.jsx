import React from "react";
import './Home.css'

function Home(){
    return(
        <div className="container">
            <div className="homeDiv">
                <p>Minha renda</p>
                <span className="valor">R$ 7.500</span>
                <h1>Ontem investi Apenas R$ 10. Hoje recebi R$ 15.000 deste App</h1>
                <div className="secDiv">
                    <span className="primeiro">Investir</span>
                    <span className="barra"></span>
                    <span className="span">R$ 20</span>
                </div>
                <div className="secDiv">
                    <span className="segundo">Após 5 minutos</span>
                </div>
                <div className="secDiv">
                    <span className="terceiro">Lucro</span>
                    <span className="barra"></span>
                    <span className="span1">R$ 12.888</span>
                </div>
                <div className="divButton"> 
                    <button className="btn">Retirar</button>
                </div>
            </div>
        </div>
    );
}

export default Home;