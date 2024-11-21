import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference, UserPreferenceDocument } from './schemas/user-preference.schema';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';
import { UpdateUserPreferenceDto } from './dto/update-user-preference.dto';

@Injectable()
export class PreferencesService {
  constructor(
    @InjectModel(UserPreference.name) private model: Model<UserPreferenceDocument>,
  ) {}

  create(dto: CreateUserPreferenceDto) {
    return this.model.create(dto);
  }

  findByUserId(userId: string) {
    return this.model.findOne({ userId }).exec();
  }

  update(userId: string, dto: UpdateUserPreferenceDto) {
    return this.model.findOneAndUpdate({ userId }, dto, { new: true }).exec();
  }

  delete(userId: string) {
    return this.model.findOneAndDelete({ userId }).exec();
  }
}
