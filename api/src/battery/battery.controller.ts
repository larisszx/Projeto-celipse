import { Controller, Get, Post, Body } from '@nestjs/common';
import { BatteryService, BatteryTelemetry } from './battery.service';

@Controller('api/battery')
export class BatteryController {
  constructor(private readonly batteryService: BatteryService) {}

  @Get('telemetry')
  getTelemetry(): BatteryTelemetry {
    return this.batteryService.getTelemetry();
  }

  @Post('toggle-cycle')
  toggleCycle(): BatteryTelemetry {
    return this.batteryService.toggleCycle();
  }

  @Post('boost')
  boost(@Body() body: { source: 'solar' | 'kinetic' }): BatteryTelemetry {
    return this.batteryService.simulateEnergyBoost(body.source || 'solar');
  }
}
