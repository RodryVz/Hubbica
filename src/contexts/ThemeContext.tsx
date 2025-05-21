
import React, { createContext, useContext } from 'react';

/**
 * ThemeContextType defines the shape of our theme context
 * Currently we only support light mode for a consistent aesthetic
 */
type ThemeContextType = {
  theme: 'light';
};

/**
 * ThemeContext provides theme configuration throughout the application
 * This implementation maintains a light theme only for consistent branding
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider component
 * Wraps the application to provide theme context to all child components
 * Set to use light theme only as per design requirements
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Always light mode per design specifications
  const theme = 'light';

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * useTheme hook
 * Provides access to theme context throughout the application
 * @returns ThemeContextType containing theme information
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
