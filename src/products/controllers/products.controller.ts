import { Body, Controller, Get, Post, } from '@nestjs/common';
import { IProduct } from '../ditos/index';
import { ProdutcsService } from '../services/products.service';

@Controller()
export class ProdutcsController {
  constructor(private readonly produtcsService: ProdutcsService) {}

  @Get()
  findAll(): IProduct[] {
    return this.produtcsService.findAll();
  }  
  @Post() 
  createProduct(@Body() product: IProduct): IProduct[]{
    return this.produtcsService.createProduct(product)
  }
}
