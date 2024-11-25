import {HttpStatus, ParseFilePipeBuilder} from "@nestjs/common";

export const imageFileValidation = new ParseFilePipeBuilder()
    // .addFileTypeValidator({
    //     fileType: 'jpeg',
    // })
    .addFileTypeValidator({
        fileType: 'png',
    })
    // .addFileTypeValidator({
    //     fileType: 'jpg',
    // })
    // .addFileTypeValidator({
    //     fileType: 'webp',
    // })
    .addMaxSizeValidator({
        maxSize: 5 * 1024 * 1024
    })
    .build({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
    });