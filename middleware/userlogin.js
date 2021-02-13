export default ({ _, redirect }) => {
  let user =  JSON.parse(localStorage.getItem('users'))
  if ( user === [] || !user || user.length === 0 ) {
    return redirect('/login')
  }
  let tokenExpire  = localStorage.getItem('TokenExpired')
  let now = new Date();
   if(tokenExpire < now.getTime()){
     localStorage.removeItem('users')
     localStorage.removeItem('token')
     localStorage.removeItem('TokenExpired')
     return redirect('/login')
   }
}
