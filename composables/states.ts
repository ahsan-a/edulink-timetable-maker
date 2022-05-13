import { themeInit } from './theme';
import Edulink_API from 'edulink-api';

export const useCurrentTheme = () => useState<string>('currentTheme', () => themeInit());

const Edulink = new Edulink_API();
export const useEdulink = () => Edulink;
