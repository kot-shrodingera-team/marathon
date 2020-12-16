import checkCouponLoadingGenerator from '@kot-shrodingera-team/germes-generators/worker_callbacks/checkCouponLoading';
import { log } from '@kot-shrodingera-team/germes-utils';
import { getDoStakeTime } from '../stake_info/doStakeTime';

const check = () => {
  const progressDialog = document.querySelector(
    '#progress_dialog[style="display: block;"]'
  );
  const betResult = document.querySelector(
    '#result-dialog[style="display: block;"] #betresult'
  );

  if (progressDialog) {
    log('Обработка ставки (индикатор)', 'tan');
    return true;
  }
  if (betResult) {
    log('Обработка ставки завершена (есть результат)', 'orange');
    return false;
  }
  log('Обработка ставки (нет индикатора)', 'tan');
  return true;
};

const checkCouponLoading = checkCouponLoadingGenerator({
  getDoStakeTime,
  bookmakerName: 'Marathon',
  timeout: 50000,
  check,
});

export default checkCouponLoading;
