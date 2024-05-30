
export class Mision {
  constructor({ alturaPropia,  denominacion, municion, distancia, altura, rumbo }) {
    this.alturaPropia = parseInt(alturaPropia);
    this.azimuth = 0;
    this.denominacion = denominacion;
    this.municion = municion;
    this.distancia = parseInt(distancia);
    this.altura = parseInt(altura);
    this.resultado = 0;
    this.rumbo = parseInt(rumbo);
  }
}

