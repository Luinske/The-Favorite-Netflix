import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import FilmesEntity from '../models/entities/filmes.entity';
import { InjectRepository } from '@nestjs/typeorm';

import FilmesOutput from '../models/dto/output/filmes.output';
import FilmesConverter from '../models/converters/filmes.converter';
import FilmesInput from '../models/dto/input/filmes.input';

@Injectable()
export class FilmesService {
  constructor(
    @InjectRepository(FilmesEntity)
    private readonly filmesRepo: Repository<FilmesEntity>,
    private readonly filmesConverter: FilmesConverter,
  ) {}

  async findAll(): Promise<FilmesOutput[]> {
    const filmesEntities = await this.filmesRepo.find();

    const outputList = filmesEntities.map((entity) => {
      return this.filmesConverter.entityToOutput(entity);
    });

    return outputList;
  }

  async save(input: FilmesInput) {
    const entity = new FilmesEntity();

    const convertedEntity = this.filmesConverter.inputToEntity(input, entity);

    const savedEntity = await this.filmesRepo.save(convertedEntity);

    const output = this.filmesConverter.entityToOutput(savedEntity);

    return output;
  }

  async update(id: number, input: FilmesInput): Promise<FilmesOutput> {
    const filmesEntity = await this.filmesRepo.findOne({ where: { id: id } });

    const convertedEntity = this.filmesConverter.inputToEntity(
      input,
      filmesEntity,
    );

    const savedEntity = await this.filmesRepo.save(convertedEntity);

    const output = this.filmesConverter.entityToOutput(savedEntity);

    return output;
  }

  async findOne(id: number) {
    const filmesEntity = await this.filmesRepo.findOne({ where: { id: id } });

    const output = this.filmesConverter.entityToOutput(filmesEntity);

    return output;
  }

  async updateTitle(id: number, title: string) {
    const filmesEntity = await this.filmesRepo.findOne({ where: { id } });

    filmesEntity.title = title;

    const filmesSaved = await this.filmesRepo.save(filmesEntity);

    const output = this.filmesConverter.entityToOutput(filmesSaved);

    return output;
  }

  remove(id: number) {
    const remove = this.filmesRepo.delete(id);
  }
}
