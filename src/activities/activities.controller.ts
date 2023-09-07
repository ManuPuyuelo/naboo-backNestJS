import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { ActivitiesService } from './activities.service';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Get()
  async getActivities() {
    return await this.activitiesService.getActivities();
  }

  @Post()
  async newActivity(@Body() body: CreateActivity) {
    return await this.activitiesService.newActivity(body);
  }

  @Delete()
  async deleteActivity(@Body() body: { activityId: string }) {
    return await this.activitiesService.deleteActivity(body.activityId);
  }
}
