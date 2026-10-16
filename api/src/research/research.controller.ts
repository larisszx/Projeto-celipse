import { Controller, Get } from '@nestjs/common';
import { ResearchService, ResearchData } from './research.service';

@Controller('api/research')
export class ResearchController {
  constructor(private readonly researchService: ResearchService) {}

  @Get()
  getResearch(): ResearchData {
    return this.researchService.getResearch();
  }
}
