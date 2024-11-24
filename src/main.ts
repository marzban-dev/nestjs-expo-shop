import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";
import getResources from "../admin/resources";
import {NestExpressApplication} from "@nestjs/platform-express";
import {join} from "path";
import * as express from 'express';
import {UPLOAD_PATH} from "../constants/global.constant";

async function bootstrap() {
    const {default: AdminJS} = await import("adminjs");
    const {default: AdminJSExpress} = await import('@adminjs/express');
    const AdminJSMongoose = await import('@adminjs/mongoose');
    const {dark, light, noSidebar} = await import("@adminjs/themes");


    const app = await NestFactory.create<NestExpressApplication>(AppModule);


    // Static path

    app.use(UPLOAD_PATH.absolute, express.static(join(process.cwd(), UPLOAD_PATH.relative)));


    // Validation pipeline configuration

    app.useGlobalPipes(new ValidationPipe());


    // Swagger module configuration

    const config = new DocumentBuilder()
        .setTitle('Shop endpoints')
        .setDescription('The shop api description')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document, {});


    // Admin js configuration

    AdminJS.registerAdapter({
        Resource: AdminJSMongoose.Resource,
        Database: AdminJSMongoose.Database,
    })

    const resources = await getResources(app);

    const admin = new AdminJS({
        defaultTheme: light.id,
        availableThemes: [dark, light, noSidebar],
        resources
    });

    admin.watch();

    const adminRouter = AdminJSExpress.buildRouter(admin)
    app.use(admin.options.rootPath, adminRouter)

    await app.listen(8000);
}

bootstrap();
