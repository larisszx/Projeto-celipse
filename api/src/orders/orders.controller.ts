import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { OrdersService, PreOrderDto, PreOrderRecord } from './orders.service';

@Controller('api/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getAll(): PreOrderRecord[] {
    return this.ordersService.getAllPreOrders();
  }

  @Post('pre-order')
  createPreOrder(@Body() dto: PreOrderDto): PreOrderRecord {
    if (!dto.fullName || !dto.email || !dto.productId) {
      throw new BadRequestException('Nome, email e produto são obrigatórios.');
    }
    return this.ordersService.createPreOrder(dto);
  }

  @Post('newsletter')
  newsletter(@Body() body: { email: string }) {
    if (!body?.email || !body.email.includes('@')) {
      throw new BadRequestException('E-mail válido é obrigatório.');
    }
    return this.ordersService.subscribeNewsletter(body.email);
  }
}
