import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
//import UserEntity from './user.entity';
@Entity('filmes')
export default class FilmesEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id?: number;

  @Column({ name: 'titulo', type: 'varchar' })
  title: string;

  @Column({ name: 'imagem', type: 'varchar' })
  image: string;

  @Column({
    name: 'criado_em',
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    name: 'atualizado_em',
    type: 'timestamp',
  })
  updatedAt: Date;
}
// importa a user entity e faz uma ligação manytoone() porém não consegui fazer, da erro no relacionamento... No outro arquivo é o inverso...
// Olhei varios videos mas não consegui...
/*
  @ManyToOne(() => UserEntity, (user) => user.id)
    user: UserEntity
era pra funcionar assjm...
 No outro arquivo faz o inverso... @OneToMany()
    */
