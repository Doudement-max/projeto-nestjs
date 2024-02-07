// perfil.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class PerfilService {
  private perfis = [];

  create(perfil) {
    this.perfis.push(perfil);
  }

  findAll() {
    return this.perfis;
  }

  update(id: number, perfil: any) {
    this.perfis[id] = perfil;
  }

  delete(id: number) {
    this.perfis = this.perfis.filter((_, i) => i !== id);
  }
}
