import {Body, Controller, Get, Post} from '@nestjs/common';
import {ProductService} from './product.service';
import {CreateProductDto} from "./dto/create-product.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }
}
