import { Module } from '@nestjs/common';
import { FilmesService } from '../services/filmes.service';
import { FilmesController } from '../controllers/filmes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import FilmesEntity from '../models/entities/filmes.entity';
import FilmConverter from '../models/converters/filmes.converter';

@Module({
  imports: [TypeOrmModule.forFeature([FilmesEntity])],
  controllers: [FilmesController],
  providers: [FilmesService, FilmConverter],
})
export class FilmesModule {}
