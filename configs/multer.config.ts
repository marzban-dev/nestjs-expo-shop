import {diskStorage} from 'multer';
import {extname} from 'path';
import {UPLOAD_PATH} from "../constants/global.constant";

export const multerConfig = {
    storage: diskStorage({
        destination: "./" + UPLOAD_PATH.relative,
        filename: (req, file, callback) => {
            const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${extname(file.originalname)}`;
            callback(null, uniqueName);
        },
    }),
};