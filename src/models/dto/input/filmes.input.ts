import { ApiProperty } from '@nestjs/swagger';

export default class FilmesInput {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  image: string;
}
