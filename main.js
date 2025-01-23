import { incluirReloj } from "./reloj/reloj.component.js";
import { incluirNombrePrincipal } from "./nombre-principal/nombre-principal.component.js";
import { incluirBarraNavegacion } from "./barra-navegacion/barra-navegacion.component.js";
import { incluirExperiencia } from "./experiencia/experiencia.component.js";
import { incluirProyectos } from "./proyectos/proyectos.component.js";
import { adicionarPerspectivaMarco } from "./utils/ui.js";
import { incluirContacto } from "./contacto/contacto.component.js";

// Incluir elementos a la página principal
incluirReloj();
incluirNombrePrincipal();
incluirBarraNavegacion();
incluirExperiencia();
incluirProyectos();
incluirContacto();

// Efectos UI
adicionarPerspectivaMarco();
