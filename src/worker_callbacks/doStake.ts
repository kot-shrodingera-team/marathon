import doStakeGenerator from '@kot-shrodingera-team/germes-generators/worker_callbacks/doStake';
import { log } from '@kot-shrodingera-team/germes-utils';
import getCoefficient from '../stake_info/getCoefficient';
import { clearDoStakeTime } from '../stake_info/doStakeTime';

const preCheck = (): boolean => {
  const applyChangesButton = document.querySelector(
    '#betslip_apply_choices_block:not([style="display: none;"]) #betslip_apply_choices'
  );
  if (applyChangesButton) {
    log('Принимаем изменения. Ставку не делаем', 'crimson');
    return false;
  }
  return true;
};

// const postCheck = (): boolean => {
//   return true;
// };

const doStake = doStakeGenerator({
  preCheck,
  doStakeButtonSelector: '#betslip_placebet_btn_id',
  getCoefficient,
  disabledCheck: true,
  errorClasses: [
    {
      className: 'btn-place-bet-disabled',
      message: 'кнопка ставки недоступна',
    },
  ],
  // postCheck,
  clearDoStakeTime,
});

export default doStake;
