import {IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    title: string;
}
