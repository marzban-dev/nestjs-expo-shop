import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument, Types} from 'mongoose';
import {Category} from "../../category/schemas/category.schema";

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
        type: [{
            type: Types.ObjectId,
            ref: "Ingredient"
        }]
    })
    ingredients: Types.Array<Types.ObjectId>;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feature'
    })
    features: Types.Array<Types.ObjectId>;

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