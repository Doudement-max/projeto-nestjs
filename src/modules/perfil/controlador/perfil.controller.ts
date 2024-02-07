import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PerfilService } from '../servico';

@Controller('perfil')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Post()
  create(@Body() perfil: any) {
    this.perfilService.create(perfil);
  }

  @Get()
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