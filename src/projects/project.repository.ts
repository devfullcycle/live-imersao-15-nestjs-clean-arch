import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

export interface IProjectRepository {
  create(project: Project): Promise<void>;
  update(project: Project): Promise<void>;
  findAll(): Promise<Project[]>;
  findById(id: string): Promise<Project>;
}

@Injectable()
export class ProjectTypeOrmRepository implements IProjectRepository {
  constructor(
    @InjectRepository(Project)
    private typeOrmRepo: Repository<Project>,
  ) {}

  async create(project: Project): Promise<void> {
    await this.typeOrmRepo.save(project);
  }

  async update(project: Project): Promise<void> {
    await this.typeOrmRepo.update(project.id, project);
  }

  findAll(): Promise<Project[]> {
    return this.typeOrmRepo.find();
  }

  findById(id: string): Promise<Project> {
    return this.typeOrmRepo.findOneOrFail({ where: { id } });
  }
}
