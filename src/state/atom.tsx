import { atom, selector } from "recoil";

export const searchState = atom({
	key: 'searchState', 
	default: '', 
});

export const getSearchState = selector({
	key: 'getSearchState', 
	get: ({ get }) => {
		const text = get(searchState);

		return text;
	},
});
