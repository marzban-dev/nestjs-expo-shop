import {IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateIngredientDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    title: string;

    @ApiProperty({
        type: 'string',
        format: 'binary',
    })
    photo: any;
}
