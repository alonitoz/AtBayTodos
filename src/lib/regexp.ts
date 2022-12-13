const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar = RegExp(reRegExpChar.source);

export const escapeRegExp = (string: string) => {
	return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string || '';
};

export const regexpAny = (str: string, global = false) =>
	new RegExp('(' + escapeRegExp(str) + ')', `i${global ? 'g' : ''}`);

export const replaceMarker = (value: string, term: string) => value.replace(regexpAny(term, true), '<mark>$1</mark>');
