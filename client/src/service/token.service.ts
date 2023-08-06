import { JwtTokens } from '@/interface';

export const setTokens = (tokens: JwtTokens) => {
  localStorage.setItem('accessToken', tokens.accessToken);
  localStorage.setItem('refreshToken', tokens.refreshToken);
};

export const getTokens = () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (accessToken && refreshToken) {
    const tokens: JwtTokens = {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
    return tokens;
  }

  return undefined;
};

export const removeToken = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};
