import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PerfilController } from './modules/perfil/controlador/perfil.controller';
import { PerfilService } from './modules/perfil/servico';
import { UsersModule } from './modules/users/users.module';

@Module({
  controllers: [PerfilController],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI') || 'mongodb://localhost:27017/nestdb',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
  ],
  providers: [PerfilService],
})
export class AppModule {}

