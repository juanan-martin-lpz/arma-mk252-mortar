import { GET_ALL_ITEMS, CALCULATE_ITEM} from './main.actions';
import { Mision } from '../data/mision.entity';

import Charge0 from '../data/Charge0';
import Charge1 from '../data/Charge1';
import Charge2 from '../data/Charge2';

// Define the initial state
export const initialState = {
    misiones: [],
    alturaPropiaActual: 0,
    resultadoActual: 0,
    azimuthActual: 0,
};

// Create the reducer function
export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_ALL_ITEMS:
            return {
                ...state,
            };

        case CALCULATE_ITEM:
          
            const item =  new Mision(action.payload)
   
            item.azimuth = item.rumbo * 17.777778;

            const diferenciaAltura = Math.abs(item.altura - item.alturaPropia);

            let base = null;

            if (item.municion === "ch0") {
                base = Charge0.filter(it => it.range < item.distancia).reduce((prev, curr) => prev.range > curr.range ? prev : curr);
            }
            else if (item.municion === "ch1") {
                base = Charge1.filter(it => it.range < item.distancia).reduce((prev, curr) => prev.range > curr.range ? prev : curr);
            }
            else if (item.municion === "ch2") {
                base = Charge2.filter(it => it.range < item.distancia).reduce((prev, curr) => prev.range > curr.range ? prev : curr);
            }

            const correccion = (diferenciaAltura / 100) * base.elevPer100m;
            const elevacion = base.elevation;

            if (item.altura > item.alturaPropia) {
                item.resultado = elevacion - correccion;
            }
            else {
                item.resultado = elevacion + correccion;
            }

            return {
                ...state,
                resultadoActual: item.resultado,
                azimuthActual: item.azimuth,
                misiones: [...state.misiones, item],

            };

        default:
            return state;
    }
};
