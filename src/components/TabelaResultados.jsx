import classes from "./TabelaResultados.module.css";

const TabelaResultados = ({ imc, info, infoClasse, setImc }) => {
  return (
    <div className={classes.resultado}>
      <h2>Seu IMC é: {imc}</h2>
      <p className={classes[infoClasse]}>Classificação: {info}</p>
      <button className={classes.btnReset} onClick={() => setImc("")}>Calcular novamente</button>
    </div>
  );
};

export default TabelaResultados;