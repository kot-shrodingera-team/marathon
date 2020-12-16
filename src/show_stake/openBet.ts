import { awaiter, getElement, log } from '@kot-shrodingera-team/germes-utils';
import getStakeCount from '../stake_info/getStakeCount';
import JsFailError from './errors/jsFailError';

const openBet = async (): Promise<void> => {
  const { selectionKey } = JSON.parse(worker.BetId);

  log(`Ищем ставку "${worker.BetName}"`, 'steelblue');
  log(`Selector = span[data-selection-key="${selectionKey}"]`, 'white', true);
  const bet = (await getElement(
    `span[data-selection-key="${selectionKey}"]`
  )) as HTMLElement;

  if (!bet) {
    throw new JsFailError('Ставка не найдена');
  }

  const maxTryCount = 5;
  for (let i = 1; i <= maxTryCount; i += 1) {
    bet.click();
    // eslint-disable-next-line no-await-in-loop
    const betAdded = await awaiter(() => getStakeCount() === 1, 1000, 50);

    if (!betAdded) {
      if (i === maxTryCount) {
        throw new JsFailError('Ставка так и не попала в купон');
      }
      log(`Ставка не попала в купон (попытка ${i})`, 'steelblue');
    } else {
      log('Ставка попала в купон', 'steelblue');
      break;
    }
  }
};

export default openBet;
