import {IsNotEmpty, IsNumber, IsString} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    title: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        type: Number,
    })
    price: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    category: string;

    @IsNotEmpty({
        each : true
    })
    @IsString()
    @ApiProperty()
    ingredients: [string];
}