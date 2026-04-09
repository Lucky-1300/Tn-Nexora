import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export function useTheme() {
  const { isDark } = useContext(ThemeContext);
  
  return {
    isDark,
    // Color mappings with improved contrast
    bgColor: isDark ? 'bg-[#0a0f1c]' : 'bg-white',
    textColor: isDark ? 'text-white' : 'text-gray-900',
    textColorAccent: isDark ? 'text-gray-300' : 'text-[#FF8C00]',
    headingColor: isDark ? 'text-white' : 'text-orange-600',
    borderColor: isDark ? 'border-gray-700' : 'border-orange-300',
    cardBg: isDark ? 'bg-gray-900' : 'bg-orange-50',
    inputBg: isDark ? 'bg-gray-800' : 'bg-white',
    hoverBg: isDark ? 'hover:bg-gray-800' : 'hover:bg-orange-100',
  };
}
