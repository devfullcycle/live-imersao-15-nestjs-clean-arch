import { CreateProjectDto } from '../dto/create-project.dto';
import { Project } from '../entities/project.entity';
import { Inject, Injectable } from '@nestjs/common';
import { IProjectRepository } from '../project.repository';

@Injectable()
export class CreateProjectUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepo: IProjectRepository, //Repository em memoria
  ) {}

  async execute(input: CreateProjectDto) {
    const project = new Project(input);
    await this.projectRepo.create(project);
    return project;
  }
}