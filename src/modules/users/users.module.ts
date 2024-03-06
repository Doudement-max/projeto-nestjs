
import { Module } from '@nestjs/common';
import { UsersController } from './controlador/users.controller';
import { UsersService } from './servicos/users.service';

@Module({
 providers:[UsersService], 
 controllers:[UsersController]
})
export class UsersModule {}
