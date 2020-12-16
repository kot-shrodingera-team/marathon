import getMinimumStakeGenerator, {
  minimumStakeReadyGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/getMinimumStake';

export const minimumStakeReady = minimumStakeReadyGenerator({
  minimumStakeElementSelector: '[id^="min-stake-"]',
  // minimumStakeRegex: /(\d+(?:\.\d+)?)/,
  // replaceDataArray: [
  //   {
  //     searchValue: '',
  //     replaceValue: '',
  //   },
  // ],
  // removeRegex: /[\s,']/g,
});

const getMinimumStake = getMinimumStakeGenerator({
  minimumStakeElementSelector: '[id^="min-stake-"]',
  // minimumStakeRegex: /(\d+(?:\.\d+)?)/,
  // replaceDataArray: [
  //   {
  //     searchValue: '',
  //     replaceValue: '',
  //   },
  // ],
  // removeRegex: /[\s,']/g,
});

export default getMinimumStake;
