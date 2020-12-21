import getMaximumStakeGenerator, {
  maximumStakeReadyGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/getMaximumStake';
import getBalance from './getBalance';

let maximumStake: number;

export const setMaximumStake = (newMaximumStake: number): void => {
  maximumStake = newMaximumStake;
};

export const maximumStakeReady = maximumStakeReadyGenerator({
  maximumStakeElementSelector: '[id^="max-stake-"]',
  // maximumStakeRegex: /(\d+(?:\.\d+)?)/,
  // replaceDataArray: [
  //   {
  //     searchValue: '',
  //     replaceValue: '',
  //   },
  // ],
  // removeRegex: /[\s,']/g,
});

const getMaximumStakeBase = getMaximumStakeGenerator({
  maximumStakeElementSelector: '[id^="max-stake-"]',
  // maximumStakeRegex: /(\d+(?:\.\d+)?)/,
  // replaceDataArray: [
  //   {
  //     searchValue: '',
  //     replaceValue: '',
  //   },
  // ],
  // removeRegex: /[\s,']/g,
});

const getMaximumStake = (): number => {
  if (/^(www\.)?marathonbet\.by$/.test(window.location.hostname)) {
    if (maximumStake) {
      return maximumStake;
    }
    return getBalance();
  }
  return getMaximumStakeBase();
}

export default getMaximumStake;
