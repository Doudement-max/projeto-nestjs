import { Module } from '@nestjs/common';
import { RoleController } from './controller/role.controller';
import { RoleService } from './service/role.service';
import { ApiTags } from '@nestjs/swagger';

@Module({
  providers: [RoleService],
  controllers: [RoleController]
})
export class RoleModule {}

/*import { Module } from '@nestjs/common';

@Module({})
export class UsersModule {}*/
