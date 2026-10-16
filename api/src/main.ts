import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const PORT = process.env.PORT || 3001;
  await app.listen(PORT);
  console.log(`=========================================`);
  console.log(`🚀 CELIPSE API running on http://localhost:${PORT}`);
  console.log(`📱 Products:   http://localhost:${PORT}/api/products`);
  console.log(`🔋 Telemetry:  http://localhost:${PORT}/api/battery/telemetry`);
  console.log(`📊 Research:   http://localhost:${PORT}/api/research`);
  console.log(`🛍️ Pre-orders: http://localhost:${PORT}/api/orders`);
  console.log(`=========================================`);
}
bootstrap();
