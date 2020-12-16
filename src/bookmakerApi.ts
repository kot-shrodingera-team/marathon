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
}

export default {};
