export interface Product {
  productId: number,
  productName: string,
  productDescription: string;
  productPrice: number;
  stockQuantity: number;
  rating: number;
  categoryId: number;
  categoryName: string;
  categoryDescription: string;
  mainImgPath: string;
  producerId: number;
  producerName: string | null;
}
