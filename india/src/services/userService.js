import Cookies from 'js-cookie';
import { savePreference, getPreference } from '../components/PreferencesManager';

export const setUsername = (name) => {
  savePreference('username', name);
  Cookies.set('lastUpdated', new Date().toISOString(), { expires: 30 });
};

export const getUsername = () => getPreference('username') || 'Explorer of Indian Culture';
