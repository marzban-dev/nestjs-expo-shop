import {Module} from '@nestjs/common';
import {FeatureService} from './feature.service';
import {FeatureController} from './feature.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Feature, FeatureSchema} from "./schemas/feature.schema";

@Module({
  imports : [MongooseModule.forFeature([{name: Feature.name, schema: FeatureSchema}])],
  controllers: [FeatureController],
  providers: [FeatureService],
})
export class FeatureModule {}
