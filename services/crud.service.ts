import {Model} from 'mongoose';
import {UPLOAD_PATH} from "../constants/global.constant";

export class CrudService<T> {
    constructor(private readonly model: Model<T>) {
    }

    async create(createDto: Partial<T>) {
        const createdDocument = new this.model(createDto);
        return createdDocument.save();
    }

    async createWithMedia(createDto: Partial<T>, files: { field: string, file: Express.Multer.File }[]) {
        const fileFields = {};

        for (const item of files) {
            fileFields[item.field] = `${UPLOAD_PATH.absolute}/${item.file.filename}`;
        }

        const createdDocument = new this.model({
            ...createDto,
            ...fileFields
        });

        return createdDocument.save();
    }

    async findAll() {
        return this.model.find().exec();
    }

    async findOne(id: string) {
        return this.model.findById(id).exec();
    }

    async update(id: string, updateDto: Partial<T>) {
        return this.model.findByIdAndUpdate(id, updateDto, {new: true}).exec();
    }

    async delete(id: string): Promise<T> {
        return this.model.findByIdAndDelete(id).exec();
    }
}
