import authorizeGenerator from '@kot-shrodingera-team/germes-generators/initialization/authorize';
// import { updateBalance, balanceReady } from '../stake_info/getBalance';
// import afterSuccesfulLogin from './afterSuccesfulLogin';

// const setLoginType = async (): Promise<boolean> => {
//   return true;
// };

const authorize = authorizeGenerator({
  // openForm: {
  //   selector: '',
  //   openedSelector: '',
  //   loopCount: 10,
  //   triesInterval: 1000,
  //   afterOpenDelay: 0,
  // },
  // setLoginType,
  loginInputSelector: '.credentials__login input',
  passwordInputSelector: '.credentials__password input',
  submitButtonSelector: '.login-form__submit',
  inputType: 'fireEvent',
  // beforeSubmitDelay: 0,
  // captchaSelector: '',
  // loginedWait: {
  //   loginedSelector: '',
  //   balanceReady,
  //   updateBalance,
  // },
  // afterSuccesfulLogin,
});

export default authorize;
