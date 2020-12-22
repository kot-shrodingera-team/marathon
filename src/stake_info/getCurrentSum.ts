import getCurrentSumGenerator from '@kot-shrodingera-team/germes-generators/stake_info/getCurrentSum';

const getCurrentSum = getCurrentSumGenerator({
  sumInput: '[id^="stake"]',
  zeroValues: ['Сумма:', 'Stake:'],
  // currentSumRegex: /(\d+(?:\.\d+)?)/,
});

export default getCurrentSum;
