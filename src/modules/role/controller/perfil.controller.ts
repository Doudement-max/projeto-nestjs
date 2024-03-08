import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation,ApiResponse, ApiBody } from '@nestjs/swagger';
import { RoleService } from '../service/perfil.service';
import { CreateRoleDto } from 'src/dto/create-perfil';

@ApiTags('role')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {} 

  @Post() 
  
  @ApiOperation({summary: 'Cria um novo perfil'})
  @ApiBody({type: CreateRoleDto})
  @ApiResponse({status: 201, description: 'O perfil foi criado com sucesso.'})
  @ApiResponse({status: 400, description:'Requisição inválida'})
  
  create(@Body() role: any) {
    this.roleService.create(role);
  }

  @Get()
  @ApiOperation({summary: 'Retonra todos os perfis'})
  @ApiResponse({status: 201, description: 'Operação bem-sucedida.'})
  findAll() {
    return this.roleService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() role: any) {
    this.roleService.update(id, role);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.roleService.delete(id);
  }
  
}

