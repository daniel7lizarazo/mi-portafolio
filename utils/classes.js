export class parAnchorElemento {
  constructor(anchor, linkedElement) {
    (anchor = this.anchor), (linkedElement = this.linkedElement);
  }
  get anchor() {
    return this.anchor;
  }
  get linkedElement() {
    return this.linkedElement;
  }
}

export class grupoParAnchorElemento {
  constructor(grupoPar) {
    this.grupoPar = grupoPar;
  }

  get grupoPar() {
    return this.grupoPar;
  }

  agregarPar(par) {
    this.grupoPar.push(par);
  }
}
