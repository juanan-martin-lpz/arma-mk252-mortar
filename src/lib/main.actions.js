
// Define action types
const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
const CALCULATE_ITEM = 'CALCULATE_ITEM';
// Define action creators

const getAllItems = () => {
    return {
        type: GET_ALL_ITEMS
    };
};


const calculateItem = (item) => {
    return {
        type: CALCULATE_ITEM,
        payload: item
    };
};

export { GET_ALL_ITEMS, CALCULATE_ITEM, getAllItems, calculateItem };
