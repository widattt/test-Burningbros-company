import create from 'zustand';
import { Product } from '../model';



interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  updateProduct: (productId: number, updatedData: Partial<Product>) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  updateProduct: (productId, updatedData) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId ? { ...product, ...updatedData } : product
      ),
    })),
}));