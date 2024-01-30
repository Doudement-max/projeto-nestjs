import { Controller, Get } from '@nestjs/common';
import { ProdutcsService } from '../services/products.service';

@Controller()
export class ProdutcsController {
  constructor(private readonly produtsService: ProdutcsService) {}

  @Get()
  findAll(): string {
    return this.produtsService.findAll();
  }
}
