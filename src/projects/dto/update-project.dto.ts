import { PartialType } from '@nestjs/mapped-types';

class _UpdateProjectDto {
  name: string;

  description: string;

  started_at: Date | null;

  cancelled_at: Date | null;

  finished_at: Date | null;

  forecasted_at: Date | null;
}

export class UpdateProjectDto extends PartialType(_UpdateProjectDto) {}
