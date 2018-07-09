import { CCC } from '../utils/ccc-streamer-utilities';
import { Object } from 'core-js';

const globals = {
  VOLUME24HOUR: 0,
  VOLUME24HOURTO: 0,
  PRICE: 0,
};

export function dataUnpack(message) {
  const data = CCC.CURRENT.unpack(message);
  const fromSym = CCC.STATIC.CURRENCY.getSymbol(data['FROMSYMBOL']);
  const toSym = CCC.STATIC.CURRENCY.getSymbol(data['TOSYMBOL']);

  Object.keys(globals).forEach(field => {
    if (data[field]) {
      globals[field] = data[field];
    }
  });

  if (data['LASTTRADEID']) {
    data['LASTTRADEID'] = parseInt(data['LASTTRADEID'], 10).toFixed(0);
  }
  if (data['PRICE'] && data['OPEN24HOUR']) {
    data['CHANGE24HOUR'] = CCC.convertValueToDisplay(toSym, data['PRICE'] - data['OPEN24HOUR']);
    data['CHANGE24HOURPCT'] = (((data['PRICE'] - data['OPEN24HOUR']) / data['OPEN24HOUR']) * 100).toFixed(2) + '%';
  }
  return displayData(data, toSym, fromSym);
}

export function decorateWithFullVolume(message) {
  const { VOLUME24HOUR, VOLUME24HOURTO, PRICE } = globals;
  const volData = CCC.FULLVOLUME.unpack(message);
  const fromSym = CCC.STATIC.CURRENCY.getSymbol(volData['SYMBOL']);
  const toSym = CCC.STATIC.CURRENCY.getSymbol('USD');

  volData['FULLVOLUMEFROM'] = parseFloat(volData['FULLVOLUME']);
  volData['FULLVOLUMETO'] =
    (volData['FULLVOLUMEFROM'] - VOLUME24HOUR) * PRICE + VOLUME24HOURTO;
  return displayData(volData, toSym, fromSym);
}

function displayData(data, tsym, fsym) {
  const state = {};
  for (let field in CCC.CURRENT.DISPLAY.FIELDS) {
    if (data[field] && CCC.CURRENT.DISPLAY.FIELDS[field].Show) {
      switch (CCC.CURRENT.DISPLAY.FIELDS[field].Filter) {
        case 'String':
          state[field] = data[field];
          break;
        case 'Number':
          const symbol =
            CCC.CURRENT.DISPLAY.FIELDS[field].Symbol === 'TOSYMBOL'
              ? tsym
              : fsym;
          state[field] = CCC.convertValueToDisplay(symbol, data[field]);
          break;
        default:
          break;
      }
    }
  }
  return state;
}
