const Auth = {
  USER_KEY: 'dulce_tentacion_user',
  USERS_KEY: 'dulce_tentacion_users',

  getCurrentUser() {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  saveUser(user) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  },

  getUsers() {
    const users = localStorage.getItem(this.USERS_KEY);
    return users ? JSON.parse(users) : MOCK_DATA.users;
  },

  saveUsers(users) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  },

  register(name, email, password, phone) {
    const users = this.getUsers();
    if (users.find(u => u.email === email)) {
      return { success: false, message: 'Este correo ya está registrado' };
    }

    const newUser = {
      id: users.length + 1,
      name,
      email,
      password,
      phone
    };

    users.push(newUser);
    this.saveUsers(users);
    this.saveUser({ id: newUser.id, name: newUser.name, email: newUser.email, phone: newUser.phone });
    return { success: true, message: 'Registro exitoso' };
  },

  login(email, password) {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      this.saveUser({ id: user.id, name: user.name, email: user.email, phone: user.phone });
      return { success: true, message: 'Inicio de sesión exitoso' };
    }
    return { success: false, message: 'Correo o contraseña incorrectos' };
  },

  logout() {
    localStorage.removeItem(this.USER_KEY);
    showToast('Sesión cerrada', 'info');
    setTimeout(() => navigateTo('index.html'), 500);
  },

  recoverPassword(email) {
    const users = this.getUsers();
    const user = users.find(u => u.email === email);
    if (user) {
      return { success: true, message: 'Se ha enviado un enlace de recuperación a tu correo' };
    }
    return { success: false, message: 'No se encontró una cuenta con este correo' };
  },

  requireAuth() {
    if (!this.getCurrentUser()) {
      showToast('Debes iniciar sesión para acceder', 'warning');
      setTimeout(() => navigateTo('login.html'), 1000);
      return false;
    }
    return true;
  }
};
