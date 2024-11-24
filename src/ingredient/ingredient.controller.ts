import {Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile} from '@nestjs/common';
import {IngredientService} from './ingredient.service';
import {CreateIngredientDto} from './dto/create-ingredient.dto';
import {UpdateIngredientDto} from './dto/update-ingredient.dto';
import {ApiBody, ApiConsumes, ApiTags} from "@nestjs/swagger";
import {FileInterceptor} from "@nestjs/platform-express";
import {multerConfig} from "../../configs/multer.config";
import {FileUpload} from "../../decorators/file-upload.decorator";

@ApiTags('Ingredient')
@Controller('ingredient')
export class IngredientController {
    constructor(private readonly ingredientService: IngredientService) {
    }

    @Post()
    @FileUpload("photo", CreateIngredientDto)
    create(
        @Body() createIngredientDto: CreateIngredientDto,
        @UploadedFile() photo: Express.Multer.File
    ) {
        return this.ingredientService.createWithMedia(createIngredientDto, [{
            file: photo, field: "photo"
        }]);
    }

    @Get()
    findAll() {
        return this.ingredientService.findAll();
    }
}
