import { Injectable } from '@nestjs/common';

import FilmesEntity from '../entities/filmes.entity';
import FilmesOutput from '../dto/output/filmes.output';
import FilmesInput from '../dto/input/filmes.input';

@Injectable()
export default class FilmesConverter {
  inputToEntity(input: FilmesInput, entity: FilmesEntity) {
    entity.id = input.id;
    entity.title = input.title;
    entity.image = input.image;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();

    return entity;
  }

  entityToOutput(entity: FilmesEntity): FilmesOutput {
    const output = new FilmesOutput();
    output.id = entity.id;
    output.title = entity.title;
    output.image = entity.image;
    output.createdAt = entity.createdAt;
    output.updatedAt = entity.updatedAt;

    return output;
  }
}
