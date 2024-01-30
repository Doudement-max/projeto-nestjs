import { Injectable } from '@nestjs/common';
import { IProducts } from '../ditos';

@Injectable()
export class ProdutcsService {
  private products: IProducts[] = [];
  findAll(): IProducts[] {
    return this.products;
  }
}
