/**
 * Inject $config in client side (to avoid using store getter in each component)
 * @param store
 * @param inject
 */
export default ({ store }, inject) => {
  inject('config', store.getters['config/getConfig'])
}
