import { create } from 'zustand';
import { getCatalog } from '../services/catalog';

export const useCatalogStore = create((set, get) => ({
  // Estado
  books: [],
  loading: false,
  error: null,

  // Acciones
  setLoading: (loading) => set({ loading }),
  
  setError: (error) => set({ error }),
  
  setBooks: (books) => set({ books }),
  
  clearError: () => set({ error: null }),

  // Acción principal para cargar el catálogo
  fetchCatalog: async () => {
    try {
      set({ loading: true, error: null });
      const data = await getCatalog();
      
      set({ books: data, loading: false });
      
      return data;
    } catch (error) {
      set({ 
        error: error.message || 'Error al obtener el catálogo', 
        loading: false 
      });
      throw error;
    }
  }
}));

