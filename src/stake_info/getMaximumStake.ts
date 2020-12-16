import getMaximumStakeGenerator, {
  maximumStakeReadyGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/getMaximumStake';

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

const getMaximumStake = getMaximumStakeGenerator({
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

export default getMaximumStake;
