
export const getAuth = () => JSON.parse(localStorage.getItem('auth'));
export const setAuth = (data) => localStorage.setItem('auth', JSON.stringify(data));
export const logout = () => localStorage.removeItem('auth');
