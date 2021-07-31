import { log } from '@kot-shrodingera-team/germes-utils';

const checkStakeStatus = (): boolean => {
  const betResult = document.querySelector(
    '#result-dialog[style="display: block;"] #betresult'
  );

  const betResultDetails = document.querySelector(
    '#result-dialog[style="display: block;"] #detail-result'
  );

  if (betResult) {
    const betResultText = betResult.textContent.trim();
    if (
      /Ваша ставка принята, спасибо|Пари принято, спасибо|Thank you for placing your bet./i.test(
        betResultText
      )
    ) {
      log('Ставка принята', 'green');
      return true;
    }
    log(betResultText, 'tomato');
    if (betResultDetails) {
      const betResultDetailsText = betResultDetails.textContent.trim();
      log(betResultDetailsText, 'tomato');
    }
    return false;
  }

  log('Неизвестный результат ставки. Считаем ставку непринятой', 'red');
  return false;
};

export default checkStakeStatus;
