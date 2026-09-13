import { Currency } from '../types';
import { HOTEL_INFO } from '../data/hotelData';

export function formatPrice(amountNPR: number, currency: Currency): string {
  if (currency === 'USD') {
    const usd = Math.round(amountNPR / HOTEL_INFO.currencyRateUSD);
    return `$${usd}`;
  }
  return `Rs. ${amountNPR.toLocaleString('en-IN')}`;
}

export function getNightsBetween(checkInDate: string, checkOutDate: string): number {
  if (!checkInDate || !checkOutDate) return 1;
  const inD = new Date(checkInDate);
  const outD = new Date(checkOutDate);
  const diffTime = outD.getTime() - inD.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
}

export function getDefaultDates(): { checkIn: string; checkOut: string } {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const format = (d: Date) => d.toISOString().split('T')[0];
  return {
    checkIn: format(today),
    checkOut: format(tomorrow),
  };
}
