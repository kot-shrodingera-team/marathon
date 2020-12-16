import { log } from '@kot-shrodingera-team/germes-utils';

const getParameter = (): number => {
  const selectionNameElement = document.querySelector('[id^="selection.name"]');
  if (!selectionNameElement) {
    log('Не найдена роспись ставки', 'crimson');
    return -9999;
  }
  const marketElement = selectionNameElement.previousSibling;
  if (!marketElement) {
    log('Не найден маркет ставки', 'crimson');
    return -9999;
  }

  const outcome = selectionNameElement.textContent.trim();
  // const market = marketElement.textContent.trim();
  const parameterRegex = /([+-]?\d+(?:\.\d+)?)\)?/;
  const parameterMatch = outcome.match(parameterRegex);
  if (parameterMatch) {
    return Number(parameterMatch[1]);
  }
  return -6666;
};

export default getParameter;
