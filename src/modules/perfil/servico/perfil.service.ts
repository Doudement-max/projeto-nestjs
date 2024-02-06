import { Injectable } from '@nestjs/common';

@Injectable()
export class PerfilService {
    private dados: any[] = []; 

    createPerfil(dado: any) {
        this.dados.push(dado);
    }
    findAll() {
        return this.dados;
    } 
    update(id: number, dado: any) {
        this.dados[id] = dado;
    }
    delete(id: number) {
        this.dados = this.dados.filter((_, i) => i !== id);
    }
}

