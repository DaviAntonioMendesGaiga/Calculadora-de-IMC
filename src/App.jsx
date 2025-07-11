import { useState } from "react";
import Calculadora from "./components/Calculadora";
import TabelaResultados from "./components/TabelaResultados";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClasse, setInfoClasse] = useState("");

  return (
    <div>
      <AnimatePresence mode="wait">
        {!imc ? (
          <motion.div
            key="calculadora"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <Calculadora
              setImc={setImc}
              setInfo={setInfo}
              setInfoClasse={setInfoClasse}
            />
          </motion.div>
        ) : (
          <motion.div
            key="resultado"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <TabelaResultados
              imc={imc}
              info={info}
              infoClasse={infoClasse}
              setImc={setImc}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;