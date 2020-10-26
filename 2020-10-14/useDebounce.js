function useDebounce(cb, delay) {
  const cbRef = useRef(cb)
  useEffect(() => {
    cbRef.current = cb
  })
  return useCallback(debounce((...args) => cbRef.current(...args), delay))
}
