declare global {
  const BetslipStorageFacade: {
    controller: {
      isOpenCoupon: () => boolean;
    };
  };
  const toggleBetslip: () => void;
  const getBetslip: () => {
    removeAll: () => void;
  };

  interface Window {
    germesData: {
      manualMax: number;
      manualCoef: number;
      updateMaximumIntervalId: number;
      updateCoefIntervalId: number;
    };
  }
}

export const clearGermesData = (): void => {
  if (window.germesData && window.germesData.updateMaximumIntervalId) {
    clearInterval(window.germesData.updateMaximumIntervalId);
  }
  if (window.germesData && window.germesData.updateCoefIntervalId) {
    clearInterval(window.germesData.updateCoefIntervalId);
  }
  window.germesData = {
    updateMaximumIntervalId: undefined,
    updateCoefIntervalId: undefined,
    manualMax: undefined,
    manualCoef: undefined,
  };
};

export default {};
