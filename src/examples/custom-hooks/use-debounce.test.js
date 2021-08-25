import { useDebounce } from "./use-debounce";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useDebounce hook", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", () => {
    expect(useDebounce).toBeDefined();
  });

  it("should return string value", () => {
    const { result } = renderHook(() => useDebounce("test", 500));
    // result.current is the debouncedValue
    expect(result.current).toBe("test");
  });

  test("should call setTimeout function", async () => {
    await act(async () => renderHook(() => useDebounce("test", 500)));

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
  });

  test("should return same value if delay > timeout", async () => {
    let searchValue = "test";
    const { result, rerender } = renderHook(() => useDebounce(searchValue, 500));

    expect(result.current).toBe("test");

    searchValue = "test2";
    rerender();

    act(() => jest.advanceTimersByTime(300));
    expect(result.current).toBe("test");
  });

  test("should return new value when it is updated after timeout", async () => {
    /**
     * Another way to pass the props is by using initialProps.
     * The below achieve the same thing as the above, but we don't need to declare a variable.
     */
    const { result, rerender } = renderHook((value) => useDebounce(value, 500), {
      initialProps: "test",
    });
    
    expect(result.current).toEqual("test");
    
    rerender("test2");

    act(() => jest.advanceTimersByTime(200));
    expect(result.current).toEqual("test");
    act(() => jest.advanceTimersByTime(300));
    expect(result.current).toEqual("test2");
  });
});
