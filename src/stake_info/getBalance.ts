import {
  balanceReadyGenerator,
  getBalanceGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/getBalance';

export const balanceReady = balanceReadyGenerator({
  balanceSelector: '[data-punter-balance-type="main"]',
  // balanceRegex: /(\d+(?:\.\d+)?)/,
  // replaceDataArray: [
  //   {
  //     searchValue: '',
  //     replaceValue: '',
  //   },
  // ],
  // removeRegex: /[\s,']/g,
});

const getBalance = getBalanceGenerator({
  balanceSelector: '[data-punter-balance-type="main"]',
  // balanceRegex: /(\d+(?:\.\d+)?)/,
  // replaceDataArray: [
  //   {
  //     searchValue: '',
  //     replaceValue: '',
  //   },
  // ],
  // removeRegex: /[\s,']/g,
});

export const updateWorkerBalance = (): void => {
  worker.JSBalanceChange(getBalance());
};

export default getBalance;
