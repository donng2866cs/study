function useThrottle(cb, delay) {
  const options = {
    leading: true,
    trailing: false
  }
  const cbRef = useRef(cb)
  useEffect(() => {
    cbRef.current = cb
  })
  return useCallback((...args) => throttle(() => cbRef.current(...args), delay, options), [delay])
}
