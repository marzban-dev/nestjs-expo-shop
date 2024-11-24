import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Product} from "./schemas/product.schema";
import {Model} from "mongoose";
import {CreateProductDto} from "./dto/create-product.dto";

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) {
    }

    async create(createProductDto: CreateProductDto) {
        const createdProduct = new this.productModel(createProductDto)
        return createdProduct.save();
    }

    async findAll() {
        return await this.productModel.find().exec();
    }
}
