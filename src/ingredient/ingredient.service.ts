import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Ingredient} from "./schemas/ingredient.schema";
import {CrudService} from "../../services/crud.service";

@Injectable()
export class IngredientService extends CrudService<Ingredient> {
    constructor(@InjectModel(Ingredient.name) private ingredientModel: Model<Ingredient>) {
        super(ingredientModel)
    }

    // async create(createIngredientDto: CreateIngredientDto, photo: Express.Multer.File) {
    //     return await this.ingredientModel.create({
    //         ...createIngredientDto,
    //         photo: `${UPLOAD_PATH.absolute}/${photo.filename}`
    //     });
    // }
}
