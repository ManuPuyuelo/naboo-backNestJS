import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Activity } from './activities.schema';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectModel(Activity.name) private activityModel: Model<Activity>,
  ) {}

  async getActivities(): Promise<{ result: string; activities: Activity[] }> {
    try {
      const activities = await this.activityModel.find();
      return { result: 'true', activities };
    } catch (error) {
      throw new Error('Erreur lors de la récupération des activités.');
    }
  }

  async newActivity(
    body: CreateActivity,
  ): Promise<{ result: string; activity: Activity }> {
    try {
      const newActivity = new this.activityModel(body);
      const savedActivity = await newActivity.save();
      return { result: 'true', activity: savedActivity };
    } catch (error) {
      throw new Error("Erreur lors de la création de l'activité.");
    }
  }

  async deleteActivity(
    activityId: string,
  ): Promise<{ result: string; message?: string }> {
    const activity = await this.activityModel.findByIdAndDelete(activityId);
    if (activity) {
      return { result: 'true' };
    } else {
      return { result: 'false', message: 'Activité non trouvée.' };
    }
  }
}
