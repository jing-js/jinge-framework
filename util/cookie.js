function parseCookieStr(name, val, optStr) {
  let str = `${name}=${encodeURIComponent(val)}`;
  return optStr ? str + optStr : str;
}

function parseCookieOption(options) {
  let str = '';
  typeof options.maxAge === 'number' && (str += '; Max-Age=' + options.maxAge);
  options.domain && (str += '; Domain=' + options.domain);
  options.path && (str += '; Path=' + options.path);
  options.httpOnly !== false && (str += '; HttpOnly');
  options.secure && (str += '; Secure');
  options.sameSite && (str += '; SameSite=Strict');
  return str;
}

module.exports = {
  parseCookieStr,
  parseCookieOption
};
