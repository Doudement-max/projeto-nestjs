import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation,ApiResponse, ApiBody } from '@nestjs/swagger';
import { UsersService } from '../service/users.service';
@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {} 

    @Post()
    create(@Body() users: any) {
        this.usersService.create(users);
    }
    @Get()
    findAll() {
        return this.usersService.findAll();
    }
    @Put(':id') 
    update(@Param('id') id: number, @Body() users: any) {
        this.usersService.update(id, users);
    }
    @Delete('id')

    delete(@Param('id') id: number){
        this.usersService.delete(id);
    }
}

