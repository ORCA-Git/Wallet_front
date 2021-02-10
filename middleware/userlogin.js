export default ({ store, redirect }) => {
  if ( store.state.userlogin == [] || !store.state.userlogin || store.state.userlogin.length == 0 ) {
    return redirect('/login')
  }
}
