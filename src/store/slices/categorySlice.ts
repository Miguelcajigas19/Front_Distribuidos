import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Category } from '../../types';
import api from '../../lib/axios';

interface CategoryState {
  items: Category[];
  loading: boolean;
  error: string | null;
}

// Sample categories data
const sampleCategories: Category[] = [
  {
    id: 1,
    name: "Computers & Tablets",
    description: "Laptops, desktops, and tablets from top brands"
  },
  {
    id: 2,
    name: "Audio",
    description: "Headphones, speakers, and audio accessories"
  },
  {
    id: 3,
    name: "Monitors",
    description: "Gaming and professional displays"
  },
  {
    id: 4,
    name: "Gaming",
    description: "Consoles, games, and gaming accessories"
  }
];

const initialState: CategoryState = {
  items: sampleCategories, // Initialize with sample categories
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    try {
      const { data } = await api.get('/categories');
      return data;
    } catch (error) {
      // If API fails, return sample categories
      return sampleCategories;
    }
  }
);

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      });
  },
});

export default categorySlice.reducer;