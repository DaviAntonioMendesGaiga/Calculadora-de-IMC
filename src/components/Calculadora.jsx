import classes from "./Calculadora.module.css";
import { useState } from "react";
import { infos } from "../data/infos";

const Calculadora = ({ setImc, setInfo, setInfoClasse }) => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const limparFormulario = (event) => {
    event.preventDefault();
    setPeso("");
    setAltura("");
  };

  const calcularImc = (event) => {
    event.preventDefault();

    // Conversão de altura para metros e peso para quilogramas
    const alturaEmMetros = parseFloat(altura.replace(",", "."));
    const pesoEmKg = parseFloat(peso.replace(",", "."));

    if (!alturaEmMetros || !pesoEmKg) {
      alert("Preencha altura e peso corretamente.");
      return;
    }

    const resultado = pesoEmKg / (alturaEmMetros * alturaEmMetros);
    const imcFormatado = resultado.toFixed(2);

    // Busca a classificação
    const classificacao = infos.find(
      (item) => resultado >= item.min && resultado <= item.max
    );

    if (classificacao) {
      setImc(imcFormatado);
      setInfo(classificacao.info);
      setInfoClasse(classificacao.infoClass);
    } else {
      alert("Erro na classificação do IMC.");
    }
  };

  return (
    <div className={classes.calculadora}>
      <h1>Calculadora de IMC</h1>
      <form className={classes.form} onSubmit={calcularImc}>
        <div className={classes.formContainer}>
          <div className={classes.inputDiv}>
            <div className={classes.alturaLabel}><label htmlFor="altura">Altura</label></div>
            <input
              type="text"
              id="altura"
              placeholder="Ex: 1,70"
              name="altura"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </div>
          <div className={classes.inputDiv}>
            <div className={classes.pesoLabel}><label htmlFor="peso">Peso</label></div>
            <input
              type="text"
              id="peso"
              placeholder="Ex: 72,5"
              name="peso"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.btnDiv}>
          <button type="submit" className={classes.btnEnviar}>
            Enviar
          </button>
          <button type="button" className={classes.btnLimpar} onClick={limparFormulario}>
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Calculadora;