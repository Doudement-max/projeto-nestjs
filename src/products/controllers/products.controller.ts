import { Controller, Get, } from '@nestjs/common';
import { IProducts } from '../ditos/index';
import { ProdutcsService } from '../services/products.service';

@Controller()
export class ProdutcsController {
  constructor(private readonly produtcsService: ProdutcsService) {}

  @Get()
  findAll(): IProducts[] {
    return this.produtcsService.findAll();
  } 
}
