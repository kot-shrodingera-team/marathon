import { getElement, log } from '@kot-shrodingera-team/germes-utils';
import clearCoupon from './clearCoupon';
import JsFailError from './errors/jsFailError';
import NewUrlError from './errors/newUrlError';

const preCheck = async (): Promise<void> => {
  log(`window.location.href = "${window.location.href}"`, 'white', true);
  log(`worker.EventUrl = "${worker.EventUrl}"`, 'white', true);
  if (window.location.href.endsWith(worker.EventId)) {
    log('Открыто нужное событие', 'steelblue');
  } else {
    if (localStorage.getItem('newUrlError') === '1') {
      throw new JsFailError(
        'Не удалось открыть событие. Возможно его нет на сайте'
      );
    }
    window.location.href = worker.EventUrl;
    throw new NewUrlError('Переходим на страницу события');
  }
  const couponBody = await getElement('#coupon_body');
  if (!couponBody) {
    throw new JsFailError('Не найдено тело купона');
  }

  if (!BetslipStorageFacade.controller.isOpenCoupon()) {
    log('Купон свёрнут. Разворачиваем', 'orange');
    toggleBetslip();
  }

  const couponCleared = await clearCoupon();
  if (!couponCleared) {
    throw new JsFailError('Не удалось очистить купон');
  }
};

export default preCheck;
