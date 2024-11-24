import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type IngredientDocument = HydratedDocument<Ingredient>;

@Schema()
export class Ingredient {
    @Prop()
    title: string;

    @Prop()
    photo: string;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);