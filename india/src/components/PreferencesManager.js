import Cookies from 'js-cookie';

export const savePreference = (key, value) => {
  const prefs = JSON.parse(Cookies.get('preferences') || '{}');
  prefs[key] = value;
  Cookies.set('preferences', JSON.stringify(prefs), { expires: 30 });
};

export const getPreference = (key) => {
  const prefs = JSON.parse(Cookies.get('preferences') || '{}');
  return prefs[key];
};
