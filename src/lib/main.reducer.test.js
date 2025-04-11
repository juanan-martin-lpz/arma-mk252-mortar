import { 
  findBaseCharge, 
  getChargeForDistance, 
  calculateMission, 
  getOptimalCharge,
  mainReducer,
  initialState 
} from './main.reducer';
import { CALCULATE_ITEM, GET_ALL_ITEMS } from './main.actions';
import Charge0 from '../data/Charge0';
import Charge1 from '../data/Charge1';
import Charge2 from '../data/Charge2';

describe('findBaseCharge', () => {
  const mockChargeTable = [
    { range: 100, elevation: 800, elevPer100m: 50 },
    { range: 200, elevation: 1000, elevPer100m: 60 },
    { range: 300, elevation: 1200, elevPer100m: 70 }
  ];

  test('returns first entry when no distance provided', () => {
    expect(findBaseCharge(mockChargeTable)).toEqual(mockChargeTable[0]);
  });

  test('returns {range: -Infinity} for empty or null charge table', () => {
    expect(findBaseCharge([])).toEqual({ range: -Infinity });
    expect(findBaseCharge(null)).toEqual({ range: -Infinity });
  });

  test('finds correct charge for given distance', () => {
    expect(findBaseCharge(mockChargeTable, 250)).toEqual(mockChargeTable[1]);
    expect(findBaseCharge(mockChargeTable, 150)).toEqual(mockChargeTable[0]);
  });
});

describe('getChargeForDistance', () => {
  test('returns ch0 for distance <= 400', () => {
    expect(getChargeForDistance('300')).toBe('ch0');
    expect(getChargeForDistance('400')).toBe('ch0');
  });

  test('returns ch1 for distance <= 1500', () => {
    expect(getChargeForDistance('800')).toBe('ch1');
    expect(getChargeForDistance('1500')).toBe('ch1');
  });

  test('returns ch2 for distance > 1500', () => {
    expect(getChargeForDistance('2000')).toBe('ch2');
  });
});

describe('calculateMission', () => {
  const mockChargeTable = [{
    range: 100,
    elevation: 1000,
    elevPer100m: 50,
    timeOfFlightPer100m: 0.5
  }];

  const mockItem = {
    distancia: 100,
    altura: 150,
    alturaPropia: 100
  };

  test('calculates mission correctly with elevation difference', () => {
    const result = calculateMission(mockItem, 0, mockChargeTable, ['ch0', 'ch1', 'ch2']);
    
    expect(result).toEqual({
      ...mockItem,
      municion: 'ch0',
      tiempo: 0.5,
      resultado: 975 // 1000 - (50/100 * 50)
    });
  });
});

describe('mainReducer', () => {
  test('returns initial state', () => {
    expect(mainReducer(undefined, {})).toEqual(initialState);
  });

  test('handles GET_ALL_ITEMS', () => {
    const state = initialState;
    expect(mainReducer(state, { type: GET_ALL_ITEMS })).toEqual(state);
  });

  test('handles CALCULATE_ITEM', () => {
    const mockPayload = {
      distancia: 300,
      altura: 100,
      alturaPropia: 50,
      rumbo: 1,
      municion: 'ch0'
    };

    const action = {
      type: CALCULATE_ITEM,
      payload: mockPayload
    };

    const result = mainReducer(initialState, action);

    expect(result.index).toBe(2);
    expect(result.misiones.length).toBe(1);
    expect(result.misiones[0].azimuth).toBe(17.777778);
    expect(result.misiones[0].key).toBe(1);
  });
});

describe('getOptimalCharge', () => {
  const mockResults = ['Charge1', 'Charge2', 'Charge0'];

  test('returns Charge0 for distance < 500', () => {
    expect(getOptimalCharge(400, mockResults)).toBe('Charge0');
  });

  test('returns Charge1 for distance < 2000', () => {
    expect(getOptimalCharge(1500, mockResults)).toBe('Charge1');
  });

  test('returns Charge2 for distance >= 2000', () => {
    expect(getOptimalCharge(2500, mockResults)).toBe('Charge2');
  });
});
