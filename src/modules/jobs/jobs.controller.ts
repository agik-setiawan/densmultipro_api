import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { JobsService } from './jobs.service';

@ApiTags('Jobs')
@Controller('jobs')
export class JobsController {

    constructor(private jobService: JobsService) { }

    /**
     * Get Job list from service
     * @param query 
     * @returns 
     */
    @UseGuards(JwtAuthGuard)
    @Get()
    async getJobList(@Query() query) {
        return await this.jobService.jobList(query);
    }

    /**
     * Get job detail from service
     * @param id 
     * @returns 
     */
    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    async getJobDetail(@Param('id') id) {
        return await this.jobService.jobDetail(id);
    }

}
