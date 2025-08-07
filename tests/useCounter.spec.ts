import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should have initial state: count should be 0, val should be 1', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it('should increment count by val when increment function is called', () => {
    const { result } = renderHook(() => useCounter());

    // Initial state
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);

    // Increment once
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);

    // Increment again
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(2);
  });

  it('should update increment behavior when val is changed', () => {
    const { result } = renderHook(() => useCounter());

    // Initial state
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);

    // Change val to 5
    act(() => {
      result.current.setVal(5);
    });

    expect(result.current.val).toBe(5);

    // Increment should now add 5
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(5);

    // Increment again should add another 5
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(10);

    // Change val to 3
    act(() => {
      result.current.setVal(3);
    });

    expect(result.current.val).toBe(3);

    // Increment should now add 3
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(13);
  });
});