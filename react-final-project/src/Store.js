import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// Make the REST GET call
export const getProducts = async () => {
    try {
        const response = await axios.get('http://localhost:9000/getProducts');
        console.log('API Response:', response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

// Redux thunk to fetch products
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await getProducts();
        const veg = response.filter(item => item.category === 'veg');
        const nonVeg = response.filter(item => item.category === 'non-veg');
        return { veg, nonVeg };
    }
);

// Product slice
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [],
        nonVeg: [],
        status: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.veg = action.payload.veg || [];
                state.nonVeg = action.payload.nonVeg || [];
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Purchase history slice
const purchaseHistorySlice = createSlice({
    name: 'purchaseHistory',
    initialState: [],
    reducers: {
        addPurchase: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addPurchase } = purchaseHistorySlice.actions;

// Cart slice
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const status = state.find(item => item.name === action.payload.name);
            if (status) {
                status.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        increment: (state, action) => {
            const item = state.find(item => item.name === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const item = state.find(item => item.name === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    return state.filter(item => item.name !== action.payload);
                }
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.name !== action.payload);
        },
        clearCart: () => {
            return [];
        }
    }
});

export const { addToCart, increment, decrement, removeFromCart, clearCart } = cartSlice.actions;

// Configure store
const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
        purchaseHistory: purchaseHistorySlice.reducer
    }
});

export default store;
