import {Module} from '@nestjs/common';
import {ProductService} from './product.service';
import {ProductController} from './product.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Product, ProductSchema} from "./schemas/product.schema";
import {CategoryModule} from "../category/category.module";
import {IngredientModule} from "../ingredient/ingredient.module";
import {FeatureModule} from "../feature/feature.module";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}]),
        IngredientModule,
        FeatureModule,
        CategoryModule
    ],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {
}
