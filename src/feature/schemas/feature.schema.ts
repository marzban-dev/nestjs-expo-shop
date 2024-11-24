import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FeatureDocument = HydratedDocument<Feature>;

@Schema()
export class Feature {
    @Prop()
    title: string;
}

export const FeatureSchema = SchemaFactory.createForClass(Feature);