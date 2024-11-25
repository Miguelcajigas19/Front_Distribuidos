import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../types';
import api from '../../lib/axios';

interface ProductState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

// Sample products data
const sampleProducts: Product[] = [
  {
    id: 1,
    name: "MacBook Pro 16\"",
    description: "Apple M2 Pro chip, 16GB RAM, 512GB SSD, Space Gray",
    price: 2499.99,
    stock: 10,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    categoryId: 1
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    description: "256GB, Titanium, Pro Camera System",
    price: 1199.99,
    stock: 15,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    categoryId: 1
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    description: "Wireless Noise Cancelling Headphones, Black",
    price: 399.99,
    stock: 20,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    categoryId: 2
  },
  {
    id: 4,
    name: "Samsung 49\" Odyssey G9",
    description: "Curved Gaming Monitor, 240Hz, QLED",
    price: 1299.99,
    stock: 5,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    categoryId: 3
  },
  {
    id: 5,
    name: "PlayStation 5",
    description: "Digital Edition, White, 1TB SSD",
    price: 499.99,
    stock: 8,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    categoryId: 4
  },
  {
    id: 6,
    name: "iPad Air",
    description: "10.9-inch, M1 chip, 256GB, Wi-Fi, Space Gray",
    price: 749.99,
    stock: 12,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    categoryId: 1
  }
];

const initialState: ProductState = {
  items: sampleProducts, // Initialize with sample products
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const { data } = await api.get('/products');
      return data;
    } catch (error) {
      // If API fails, return sample products
      return sampleProducts;
    }
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchProductsByCategory',
  async (categoryId: number) => {
    try {
      const { data } = await api.get(`/products/category/${categoryId}`);
      return data;
    } catch (error) {
      // If API fails, filter sample products by category
      return sampleProducts.filter(product => product.categoryId === categoryId);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export default productSlice.reducer;