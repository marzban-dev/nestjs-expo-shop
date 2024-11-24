import {INestApplication} from "@nestjs/common";
import {Model} from "mongoose";
import {Category} from "../src/category/schemas/category.schema";
import {Product} from "../src/product/schemas/product.schema";
import {getComponents} from "./components";

const getResources = async (app: INestApplication) => {
    const Components = await getComponents();

    const CategoryModel = app.get<Model<Category>>(`CategoryModel`);
    const ProductModel = app.get<Model<Product>>(`ProductModel`);

    return [
        CategoryModel,
        {
            resource: CategoryModel,
            options: {
                id: "categories",
                navigation: {
                    name: 'Products',
                    icon: 'Play',
                }
            }
        },
        {
            resource: ProductModel,
            options: {
                id: 'products',
                navigation: {
                    name: 'Products',
                    icon: 'User',
                },
                properties: {
                    price: {
                        description: "User's Linkedin/Github/social profiles links",
                    },
                    description: {
                        type : "string",
                        // components: {
                        //     edit: Components.Example, // this is our custom component
                        // },
                        // type: 'richtext',
                    }
                },
            },
        },
    ]
}

export default getResources;