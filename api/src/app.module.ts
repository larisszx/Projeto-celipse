import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { BatteryController } from './battery/battery.controller';
import { BatteryService } from './battery/battery.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { ResearchController } from './research/research.controller';
import { ResearchService } from './research/research.service';

@Module({
  imports: [],
  controllers: [
    ProductsController,
    BatteryController,
    OrdersController,
    ResearchController
  ],
  providers: [
    ProductsService,
    BatteryService,
    OrdersService,
    ResearchService
  ],
})
export class AppModule {}
