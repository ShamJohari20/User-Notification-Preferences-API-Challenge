import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserPreferenceDocument = UserPreference & Document;

@Schema({ timestamps: true })
export class UserPreference {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({
    type: Object,
    required: true,
  })
  preferences: {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: 'daily' | 'weekly' | 'monthly' | 'never';
    channels: {
      email: boolean;
      sms: boolean;
      push: boolean;
    };
  };

  @Prop()
  timezone: string;
}

export const UserPreferenceSchema = SchemaFactory.createForClass(UserPreference);
