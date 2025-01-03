import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { RandomController } from "./randomproducts.controller";
import { RandomProductService } from "./randomproducts.services";
import { Marketplace } from "src/entities/marketplace.entity";


@Module({
    imports:[TypeOrmModule.forFeature([Marketplace])],
    controllers:[RandomController],
    providers:[RandomProductService]

})
export class randomproductsModule{}


