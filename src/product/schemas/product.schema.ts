import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument, Types} from 'mongoose';
import {Category} from "../../category/schemas/category.schema";
import {Feature} from "../../feature/schemas/feature.schema";
import {Ingredient} from "../../ingredient/schemas/ingredient.schema";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    title: string;

    @Prop()
    time: string;

    @Prop()
    description: string;

    @Prop()
    price: number;

    @Prop()
    photo: string;

    @Prop()
    out_of_stuck: boolean;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    })
    category: Category;

    @Prop({
        type: [Types.ObjectId],
        ref: Ingredient.name
    })
    ingredients: Ingredient[];

    @Prop({
        type: [Types.ObjectId],
        ref: Feature.name
    })
    features: Feature[];

    // @Prop({
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Category'
    // })
    // restaurant: Category;

    // @Prop({
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Category'
    // })
    // discount: Category;
}

export const ProductSchema = SchemaFactory.createForClass(Product);