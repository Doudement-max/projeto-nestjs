import { Injectable } from '@nestjs/common';
import { IProduct } from '../ditos';

@Injectable()
export class ProdutcsService {
  private product: IProduct[] = [];
  findAll(): IProduct[] {
    return this.product;
  }
  createProduct(product:IProduct): IProduct[] {
    this.product.push()
    return this.product;
  }
}
