export function useSettings() {
  const prismic = usePrismic()
  const { data: settings } = useAsyncData('settings', () => prismic.client.getSingle('settings'))
  return settings
}
