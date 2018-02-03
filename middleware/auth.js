export default function ({ store, redirect }) {
  // use store.getters.isAuth ...
  if (!store.getters.isAuth) {
    return redirect('/login')
  }
}
