const keys = ['xs', 'sm', 'md', 'lg', 'xl'];
const values = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 };

const up = key => {
	return `@media (min-width: ${values[key]}px)`;
};

const down = key => {
	const endIndex = keys.indexOf(key) + 1;
	const upperbound = values[keys[endIndex]];

	if (endIndex === keys.length) {
		return up('xs');
	}

	return `@media (max-width: ${upperbound - 0.05}px)`;
};

const between = (start, end) => {
	const endIndex = keys.indexOf(end) + 1;

	if (endIndex === keys.length) {
		return up(start);
	}

	return `@media (min-width: ${values[start]}px and max-width: ${values[keys[endIndex]] - 0.05}px)`;
};

const only = key => {
  	return between(key, key);
};

const width = key => {
  	return values[key];
};

const breakpoints = {
	up,
	down,
	keys,
	only,
	width,
	values,
	between
};

export default breakpoints;
