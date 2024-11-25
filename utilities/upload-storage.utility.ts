import {join, extname} from "path";
import {UPLOAD_PATH} from "../constants/global.constant";
import {createWriteStream} from 'fs';
import fsPromises from 'fs/promises';

export class UploadStorage {
    private readonly fileName: string;
    private readonly filePath: string;
    private file: Express.Multer.File;

    constructor(file: Express.Multer.File) {
        this.file = file;
        this.fileName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${extname(file.originalname)}`
        this.filePath = join(process.cwd(), UPLOAD_PATH.relative, this.fileName);
    }

    save() {
        const writeStream = createWriteStream(this.filePath);
        writeStream.write(this.file.buffer);
        writeStream.end();
        return {
            filePath: this.filePath,
            fileName: this.fileName
        }
    }

    static async delete(filePath: string) {
        await fsPromises.unlink(filePath);
    }

}