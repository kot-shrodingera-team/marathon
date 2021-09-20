import checkAuthGenerator, {
  authStateReadyGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/checkAuth';

export const authStateReady = authStateReadyGenerator({
  noAuthElementSelector: '.auth-form',
  authElementSelector: '.profile__icon',
  // maxDelayAfterNoAuthElementAppeared: 0,
  logging: true,
});

const checkAuth = checkAuthGenerator({
  authElementSelector: '.profile__icon',
});

export default checkAuth;
