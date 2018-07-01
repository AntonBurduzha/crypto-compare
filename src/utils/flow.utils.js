// @flow
import type { Currency, Currencies } from '../types/entities';

export function values(objs: Currencies): Array<Currency> {
  return Object.keys(objs).map(key => objs[key]);
}
