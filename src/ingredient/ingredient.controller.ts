import {Body, Controller, Delete, Get, Param, Post, UploadedFile} from '@nestjs/common';
import {IngredientService} from './ingredient.service';
import {CreateIngredientDto} from './dto/create-ingredient.dto';
import {ApiTags} from "@nestjs/swagger";
import {FileUpload} from "../../decorators/file-upload.decorator";
import {imageFileValidation} from "../../validations/file.validation";
import {UploadStorage} from "../../utilities/upload-storage.utility";

@ApiTags('Ingredient')
@Controller('ingredient')
export class IngredientController {
    constructor(private readonly ingredientService: IngredientService) {
    }

    @Post()
    @FileUpload("photo", CreateIngredientDto)
    async create(
        @Body() createIngredientDto: CreateIngredientDto,
        @UploadedFile(imageFileValidation) photo: Express.Multer.File
    ) {
        return this.ingredientService.createWithMedia(createIngredientDto, [{
            file: photo, field: "photo"
        }]);
    }

    @Delete(":id")
    async delete(@Param('id') id: string) {
        const deletedItem = await this.ingredientService.delete(id);
        await UploadStorage.delete("." + deletedItem.photo);
        return deletedItem;
    }

    @Get()
    findAll() {
        return this.ingredientService.findAll();
    }

    @Get(":id")
    findOne(@Param('id') id: string) {
        return this.ingredientService.findOne(id);
    }
}
