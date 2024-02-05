import { Module } from '@nestjs/common';
import { ProdutcsController } from './products/controllers/products.controller';
import { ProdutcsService } from './products/services/products.service';

@Module({
  imports: [],
  controllers: [ProdutcsController],
  providers: [ProdutcsService],
})
export class ProductsModules {}
