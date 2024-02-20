import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation,ApiResponse, ApiBody } from '@nestjs/swagger';
import { PerfilService } from '../servico/perfil.service';
import { CreatePerfilDto } from 'src/dto/create-perfil';

@ApiTags('perfil')
@Controller('perfil')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {} 

  @Post() 
  
  @ApiOperation({summary: 'Cria um novo perfil'})
  @ApiBody({type: CreatePerfilDto})
  @ApiResponse({status: 201, description: 'O perfil foi criado com sucesso.'})
  @ApiResponse({status: 400, description:'Requisição inválida'})
  
  create(@Body() perfil: any) {
    this.perfilService.create(perfil);
  }

  @Get()
  @ApiOperation({summary: 'Retonra todos os perfis'})
  @ApiResponse({status: 200, description: 'Operação bem-sucedida.'})
  findAll() {
    return this.perfilService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() perfil: any) {
    this.perfilService.update(id, perfil);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.perfilService.delete(id);
  }
  
}

@ApiTags('tag1')
@Controller('rota1')
export class RptalController {
  @Get()
  getHello(): string {
    return 'Olá mundo do Rota2Controller!';
  }
}