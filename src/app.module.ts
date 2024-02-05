import { Module } from '@nestjs/common';
import { PerfilController } from './modules/perfil/controlador/perfil.controller';
import { PerfilService } from './modules/perfil/servico/perfil.service';
import { UsersController } from './modules/users/controlador/users.controller';
import { UsersService } from './modules/users/servicos/users.service';

@Module({
  imports: [],
  controllers: [PerfilController && UsersController],
  providers: [PerfilService && UsersService],
})
export class ProductsModules {}
