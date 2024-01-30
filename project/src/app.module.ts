import { Module } from '@nestjs/common';
import { ProdutcsController } from './modules/products/controllers/products.controller';
import { ProdutcsService } from './modules/products/services/products.service';

@Module({
  imports: [],
  controllers: [ProdutcsController],
  providers: [ProdutcsService],
})
export class ProductsModules {}
