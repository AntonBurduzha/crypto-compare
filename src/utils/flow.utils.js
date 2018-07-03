// @flow
import type { Currency, Currencies, CurrencySocketState } from '../types/entities';

export function values(objs: Currencies): Array<Currency> {
  return Object.keys(objs).map(key => objs[key]);
}

export function parsePrice(field: string='0'): number {
  return parseFloat(field.slice(2).replace(',', ''));
}
