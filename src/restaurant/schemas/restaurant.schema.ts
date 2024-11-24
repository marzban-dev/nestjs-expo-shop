import {Prop, raw, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';

export type RestaurantDocument = HydratedDocument<Restaurant>;

@Schema()
export class Restaurant {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    photo: string;

    @Prop()
    address: string;

    @Prop()
    location: string;

    @Prop({
        type: [{
            type: Types.ObjectId,
            ref: "Feature"
        }]
    })
    features: Types.Array<Types.ObjectId>;

    @Prop(raw({
        type: Object,
        properties: {
            monday: {type: String, default: null},
            tuesday: {type: String, default: null},
            wednesday: {type: String, default: null},
            thursday: {type: String, default: null},
            friday: {type: String, default: null},
            saturday: {type: String, default: null},
            sunday: {type: String, default: null},
        }
    }))
    working_hours: {
        monday: string | null,
        tuesday: string | null,
        wednesday: string | null,
        thursday: string | null,
        friday: string | null,
        saturday: string | null,
        sunday: string | null,
    };
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);