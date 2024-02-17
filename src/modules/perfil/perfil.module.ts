import { Module } from '@nestjs/common';
import { PerfilController } from './controlador/perfil.controller';
import { PerfilService } from './servico';


@Module({
  providers: [PerfilService],
  controllers: [PerfilController]
})
export class PerfilModule {}
