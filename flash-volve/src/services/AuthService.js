class AuthService {
  static isAuthenticated() {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken;
  }

  static logout() {
    localStorage.removeItem('accessToken');
  }
}

export default AuthService;
