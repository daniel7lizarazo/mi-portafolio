import { amortiguador } from "./utils";
export function adicionarPerspectivaMarco() {
  const elementoMarco = document.querySelector("#marco-ventana");
  let rotacionXNorm = 0;
  let rotacionYNorm = 0;
  let altoVentana = window.innerHeight;
  let anchoVentana = window.innerWidth;
  const cambioPerspectiva = (e) => {
    rotacionXNorm = ((e.clientY / altoVentana - 0.5) * -5).toFixed(2);
    rotacionYNorm = ((e.clientX / anchoVentana - 0.5) * 5).toFixed(2);
    elementoMarco.style.setProperty("--rotacion-x", `${rotacionXNorm}deg`);
    elementoMarco.style.setProperty("--rotacion-y", `${rotacionYNorm}deg`);
  };
  const cambioPerspectivaAmortiguado = amortiguador(cambioPerspectiva, 400);
  document.addEventListener("mousemove", cambioPerspectivaAmortiguado);
  window.addEventListener("resize", (e) => {
    altoVentana = window.innerHeight;
    anchoVentana = window.innerWidth;
  });
}
