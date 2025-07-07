import { useEffect } from 'react';
import { useCatalogStore } from '../stores/catalogStore';

export const useCatalog = () => {
  const {
    books,
    loading,
    error,
    fetchCatalog,
    clearError
  } = useCatalogStore();

  // Cargar el catálogo automáticamente cuando se monta el componente
  useEffect(() => {
    if (books.length === 0 && !loading) {
      fetchCatalog();
    }
  }, [books.length, loading, fetchCatalog]);

  return {
    // Estado
    books,
    loading,
    error,
    
    // Acciones
    fetchCatalog,
    clearError,
    
    // Utilidades
    hasBooks: books.length > 0,
    hasError: !!error
  };
};

