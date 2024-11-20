import { incluirReloj } from "./reloj/reloj.component.js";
import { incluirNombrePrincipal } from "./nombre-principal/nombre-principal.component.js";
import { incluirBarraNavegacion } from "./barra-navegacion/barra-navegacion.component.js";
import { incluirBlob } from "./blob/blob.component.js";
import { incluirExperiencia } from "./experiencia/experiencia.component.js";
import { adicionarPerspectivaMarco } from "./utils/ui.js";

// Incluir elementos a la página principal
incluirReloj();
incluirNombrePrincipal();
incluirBarraNavegacion();
incluirBlob();
incluirExperiencia();

// Efectos UI
adicionarPerspectivaMarco();
