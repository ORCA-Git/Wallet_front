export function authHeader(type = 'application/json') {
  // return authorization header with jwt token
  let token = localStorage.getItem('token');
  if (token) {
    return {
      'Authorization': 'Bearer '+token,
      'Content-Type': type
    };
  } else {
    return {};
  }
}
