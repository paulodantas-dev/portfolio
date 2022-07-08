import { renderHook, act } from '@testing-library/react';

import { ThemeProvider, useTheme } from '../useTheme';

describe('useTheme', () => {
  it('should return the theme light', () => {
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe('light');
  });

  it('should return the theme dark', () => {
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });

    act(() => {
      result.current.toggleTheme();
    });

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe('dark');
  });
});
