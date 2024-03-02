import {Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { PerfilController } from './modules/perfil/controlador/perfil.controller';
import { PerfilService } from './modules/perfil/servico/perfil.service';
import { UsersController } from './modules/users/controlador/users.controller';
import { UsersService } from './modules/users/servicos/users.service';

@Module({
  imports: [ 
    MongooseModule.forRoot('mongo://localhost/nest'),
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [PerfilController, UsersController],
  providers: [PerfilService, UsersService],
})
export class AppModule { 
  constructor(private configService: ConfigService) {
     const dbUser = this.configService.get<string>('DATABASE_USER');
  }
}
