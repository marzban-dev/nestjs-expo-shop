import {Injectable} from '@nestjs/common';
import {CreateCategoryDto} from './dto/create-category.dto';
import {UpdateCategoryDto} from './dto/update-category.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Category} from "./schemas/category.schema";
import {Product} from "../product/schemas/product.schema";

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<Category>) {
    }

    create(createCategoryDto: CreateCategoryDto) {
        const createdCategory = new this.categoryModel(createCategoryDto)
        return createdCategory.save();
    }

    findAll() {
        return this.categoryModel.find().exec();
    }

    findOne(id: number) {
        return this.categoryModel.findOne({_id: id});
    }

    update(id: number, updateCategoryDto: UpdateCategoryDto) {
        return `This action updates a #${id} category`;
    }

    remove(id: number) {
        return `This action removes a #${id} category`;
    }
}
