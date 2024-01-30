import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutcsService {
  findAll(): string {
    return 'Hello World!';
  }
}
