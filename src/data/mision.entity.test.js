// mision.entity.test.js
import { Mision } from './mision.entity';

describe('Mision', () => {
  test('should create a mission with correct properties', () => {
    const misionData = {
      key: 1,
      alturaPropia: "100",
      denominacion: "Target1",
      municion: "Ch0",
      distancia: "1500",
      altura: "200",
      rumbo: "45",
      tiempo: "2.5"
    };

    const mision = new Mision(misionData);

    expect(mision.key).toBe(1);
    expect(mision.alturaPropia).toBe(100);
    expect(mision.azimuth).toBe(0);
    expect(mision.denominacion).toBe("Target1");
    expect(mision.municion).toBe("Ch0");
    expect(mision.distancia).toBe(1500);
    expect(mision.altura).toBe(200);
    expect(mision.resultado).toBe(0);
    expect(mision.rumbo).toBe(45);
    expect(mision.tiempo).toBe(2.5);
  });

  test('should parse numeric values correctly', () => {
    const misionData = {
      key: 1,
      alturaPropia: "100.5",
      denominacion: "Target1",
      municion: "Ch0",
      distancia: "1500.7",
      altura: "200.3",
      rumbo: "45.1",
      tiempo: "2.5"
    };

    const mision = new Mision(misionData);

    expect(mision.alturaPropia).toBe(100);
    expect(mision.distancia).toBe(1500);
    expect(mision.altura).toBe(200);
    expect(mision.rumbo).toBe(45);
    expect(mision.tiempo).toBe(2.5);
  });

  test('should initialize with default values', () => {
    const misionData = {
      key: 1,
      alturaPropia: "",
      denominacion: "",
      municion: "",
      distancia: "",
      altura: "",
      rumbo: "",
      tiempo: ""
    };

    const mision = new Mision(misionData);

    expect(mision.alturaPropia).toBe(0);
    expect(mision.azimuth).toBe(0);
    expect(mision.denominacion).toBe("");
    expect(mision.municion).toBe("");
    expect(mision.distancia).toBe(0);
    expect(mision.altura).toBe(0);
    expect(mision.resultado).toBe(0);
    expect(mision.rumbo).toBe(0);
    expect(mision.tiempo).toBe(0);
  });
});
