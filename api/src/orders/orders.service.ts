import { Injectable } from '@nestjs/common';

export interface PreOrderDto {
  fullName: string;
  email: string;
  phone: string;
  cityState: string;
  productId: string;
  productName: string;
  colorName: string;
  storage: string;
  notes?: string;
}

export interface PreOrderRecord extends PreOrderDto {
  id: string;
  reservationCode: string;
  status: 'CONFIRMADO' | 'FILA_DE_ESPERA_PRIORITARIA';
  createdAt: string;
  estimatedDeliveryWindow: string;
}

@Injectable()
export class OrdersService {
  private orders: PreOrderRecord[] = [
    {
      id: 'pre-001',
      reservationCode: 'CELIPSE-VIP-74921',
      fullName: 'Nicolas Teixeira',
      email: 'nicolas@exemplo.com.br',
      phone: '(12) 99876-5432',
      cityState: 'Caraguatatuba/SP',
      productId: 'celipse-pro',
      productName: 'Celipse Pro',
      colorName: 'Titânio Escuro',
      storage: '512 GB',
      status: 'CONFIRMADO',
      createdAt: '2026-10-15T10:00:00.000Z',
      estimatedDeliveryWindow: 'Novembro / 2026'
    }
  ];

  private subscribers: { email: string; subscribedAt: string }[] = [];

  createPreOrder(dto: PreOrderDto): PreOrderRecord {
    const randomCode = Math.floor(10000 + Math.random() * 90000);
    const reservationCode = `CELIPSE-ALPHA-${randomCode}`;
    const newRecord: PreOrderRecord = {
      ...dto,
      id: `ord-${Date.now()}`,
      reservationCode,
      status: 'CONFIRMADO',
      createdAt: new Date().toISOString(),
      estimatedDeliveryWindow: 'Lote Alpha - Dezembro / 2026'
    };

    this.orders.unshift(newRecord);
    return newRecord;
  }

  getAllPreOrders(): PreOrderRecord[] {
    return this.orders;
  }

  subscribeNewsletter(email: string) {
    if (!this.subscribers.some((s) => s.email.toLowerCase() === email.toLowerCase())) {
      this.subscribers.push({ email, subscribedAt: new Date().toISOString() });
    }
    return {
      success: true,
      message: 'Inscrição confirmada na lista VIP Celipse! Você receberá atualizações sobre o lançamento em primeira mão.',
      totalSubscribers: this.subscribers.length + 12480
    };
  }
}
