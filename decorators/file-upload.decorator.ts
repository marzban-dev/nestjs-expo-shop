import {applyDecorators, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {multerConfig} from "../configs/multer.config";
import {ApiBody, ApiConsumes} from "@nestjs/swagger";

export function FileUpload(fileName: string, DtoClass: new (...args: any[]) => any) {
    return applyDecorators(
        UseInterceptors(FileInterceptor(fileName, multerConfig)),
        ApiConsumes('multipart/form-data'),
        ApiBody({type: DtoClass})
    );
}