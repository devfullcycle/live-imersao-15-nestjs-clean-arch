import { Inject, Injectable } from '@nestjs/common';
import { IProjectRepository } from '../project.repository';

@Injectable()
export class FindAllProjectsUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepo: IProjectRepository, //Repository em memoria
  ) {}

  execute() {
    return this.projectRepo.findAll();
  }
}
