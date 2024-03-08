import { Module } from '@nestjs/common';
import { RoleController } from './controller/perfil.controller';
import { RoleService } from './service';
import { ApiTags } from '@nestjs/swagger';

@Module({
  providers: [RoleService],
  controllers: [RoleController]
})
export class RoleModule {}

/*import { Module } from '@nestjs/common';

@Module({})
export class UsersModule {}*/
