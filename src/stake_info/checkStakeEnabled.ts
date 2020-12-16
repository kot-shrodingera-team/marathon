import checkStakeEnabledGenerator from '@kot-shrodingera-team/germes-generators/stake_info/checkStakeEnabled';
import getStakeCount from './getStakeCount';

// const preCheck = (): boolean => {
//   return true;
// };

const checkStakeEnabled = checkStakeEnabledGenerator({
  // preCheck,
  getStakeCount,
  betCheck: {
    selector: '#single-container tr',
    // errorClasses: [
    //   {
    //     className: '',
    //     message: '',
    //   },
    // ],
  },
  errorsCheck: [
    {
      selector: '[id*="is_not_active"][style="display:  block "]',
      message: 'выбор неактивен',
    },
  ],
});

export default checkStakeEnabled;
