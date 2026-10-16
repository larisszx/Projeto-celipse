import { Injectable } from '@nestjs/common';

export interface BatteryTelemetry {
  timestamp: string;
  activeBattery: 'A' | 'B';
  batteryA: {
    percentage: number;
    voltage: number;
    temperatureCelsius: number;
    healthPercentage: number;
    status: 'EM_USO' | 'RECARREGANDO';
    ledActive: boolean;
  };
  batteryB: {
    percentage: number;
    voltage: number;
    temperatureCelsius: number;
    healthPercentage: number;
    status: 'EM_USO' | 'RECARREGANDO';
    ledActive: boolean;
  };
  harvesting: {
    solarLux: number;
    solarWattsGenerating: number;
    solarType: 'Luz Solar Direta' | 'Luz Ambiente de Escritório';
    kineticJoulHarvested: number;
    kineticWattsGenerating: number;
    motionIntensity: 'Moderado' | 'Ativo' | 'Em Repouso';
    thermalWattage: number;
    totalCombinedChargeRateWatts: number;
  };
  system: {
    state: 'CICLO_PERFEITO_AUTOSSUSTENTAVEL';
    infiniteLoopActive: boolean;
    daysWithoutGridCharge: number;
    estimatedContinuousRuntimeDays: number;
    co2SavedGrams: number;
    electronicWastePreventedKg: number;
    ledRearBarColor: '#00E5FF';
  };
}

@Injectable()
export class BatteryService {
  private activeBattery: 'A' | 'B' = 'A';
  private batteryALevel = 84.5;
  private batteryBLevel = 96.2;
  private solarLux = 18500;
  private kineticMotion = 14.8;
  private daysWithoutCharge = 412;

  getTelemetry(): BatteryTelemetry {
    // Dynamic slight variations for realism
    const now = new Date().toISOString();
    const solarWatts = +(1.8 + Math.sin(Date.now() / 5000) * 0.4).toFixed(2);
    const kineticWatts = +(2.4 + Math.cos(Date.now() / 4000) * 0.6).toFixed(2);
    const thermalWatts = 0.35;
    const totalHarvest = +(solarWatts + kineticWatts + thermalWatts).toFixed(2);

    return {
      timestamp: now,
      activeBattery: this.activeBattery,
      batteryA: {
        percentage: +this.batteryALevel.toFixed(1),
        voltage: 4.12,
        temperatureCelsius: 29.4,
        healthPercentage: 100,
        status: this.activeBattery === 'A' ? 'EM_USO' : 'RECARREGANDO',
        ledActive: this.activeBattery === 'A'
      },
      batteryB: {
        percentage: +this.batteryBLevel.toFixed(1),
        voltage: 4.18,
        temperatureCelsius: 28.7,
        healthPercentage: 100,
        status: this.activeBattery === 'B' ? 'EM_USO' : 'RECARREGANDO',
        ledActive: this.activeBattery === 'B'
      },
      harvesting: {
        solarLux: this.solarLux,
        solarWattsGenerating: solarWatts,
        solarType: 'Luz Solar Direta',
        kineticJoulHarvested: +(this.kineticMotion * 12.5).toFixed(1),
        kineticWattsGenerating: kineticWatts,
        motionIntensity: 'Ativo',
        thermalWattage: thermalWatts,
        totalCombinedChargeRateWatts: totalHarvest
      },
      system: {
        state: 'CICLO_PERFEITO_AUTOSSUSTENTAVEL',
        infiniteLoopActive: true,
        daysWithoutGridCharge: this.daysWithoutCharge,
        estimatedContinuousRuntimeDays: 9999, // Infinite
        co2SavedGrams: 1420,
        electronicWastePreventedKg: 0.85,
        ledRearBarColor: '#00E5FF'
      }
    };
  }

  toggleCycle(): BatteryTelemetry {
    this.activeBattery = this.activeBattery === 'A' ? 'B' : 'A';
    return this.getTelemetry();
  }

  simulateEnergyBoost(source: 'solar' | 'kinetic'): BatteryTelemetry {
    if (source === 'solar') {
      this.solarLux = Math.min(65000, this.solarLux + 5000);
      if (this.activeBattery === 'A') {
        this.batteryBLevel = Math.min(100, this.batteryBLevel + 2.5);
      } else {
        this.batteryALevel = Math.min(100, this.batteryALevel + 2.5);
      }
    } else {
      this.kineticMotion += 5;
      if (this.activeBattery === 'A') {
        this.batteryBLevel = Math.min(100, this.batteryBLevel + 3.0);
      } else {
        this.batteryALevel = Math.min(100, this.batteryALevel + 3.0);
      }
    }
    return this.getTelemetry();
  }
}
