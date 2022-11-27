import {
  Controller,
  Get,
  Param,
  Delete,
  Patch,
  Post,
  Query,
  Body,
  Put,
} from '@nestjs/common';
import { FilmesService } from '../services/filmes.service';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import FilmesOutput from '../models/dto/output/filmes.output';
import FilmesInput from '../models/dto/input/filmes.input';

@ApiTags('Filmes')
@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Get()
  @ApiCreatedResponse({ type: FilmesOutput, isArray: true })
  findAll(): Promise<FilmesOutput[]> {
    return this.filmesService.findAll();
  }

  @Post()
  save(@Body() input: FilmesInput) {
    return this.filmesService.save(input);
  }

  @Put(':id')
  @ApiCreatedResponse({ type: FilmesOutput })
  update(
    @Param('id') id: string,
    @Body() input: FilmesInput,
  ): Promise<FilmesOutput> {
    return this.filmesService.update(+id, input);
  }

  @Get(':id')
  @ApiCreatedResponse({ type: FilmesOutput })
  findOne(@Param('id') id: string) {
    return this.filmesService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: FilmesOutput })
  updateTitle(@Param('id') id: string, @Query('title') title: string) {
    return this.filmesService.updateTitle(+id, title);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmesService.remove(+id);
  }
}
