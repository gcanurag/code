export const getCookie = (name) => {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
};

// Function to set a cookie with a specific expiration time
export const setCookie = (name, value, days) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  const cookieString = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/; Secure; SameSite=Strict`;
  document.cookie = cookieString;
};



export function clearCookies() {
  // Get all cookies
  var cookies = document.cookie.split(';');

  // Iterate over cookies and set each one's expiration to a past date
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf('=');
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  }
}
