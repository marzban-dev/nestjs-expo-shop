import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {ProductModule} from './product/product.module';
import {CategoryModule} from './category/category.module';
import {IngredientModule} from './ingredient/ingredient.module';
import {RestaurantModule} from './restaurant/restaurant.module';
import {AddressModule} from './address/address.module';
import {FeatureModule} from './feature/feature.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest'),
        ProductModule,
        CategoryModule,
        IngredientModule,
        RestaurantModule,
        AddressModule,
        FeatureModule,
    ],
})
export class AppModule {
}