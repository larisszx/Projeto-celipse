import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ProductsService, Product } from './products.service';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(): Product[] {
    return this.productsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Product {
    const product = this.productsService.getById(id);
    if (!product) {
      throw new NotFoundException(`Produto com ID '${id}' não encontrado.`);
    }
    return product;
  }
}
