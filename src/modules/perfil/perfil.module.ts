import { Module } from '@nestjs/common';
import { ControladorController } from './controlador/perfil.controller';
import { ServicoService } from './servico/perfil.service';

@Module({
  controllers: [ControladorController],
  providers: [ServicoService]
})
export class PerfilModule {}
