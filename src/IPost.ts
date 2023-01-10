export interface IPost {
	_id: string,
	_createdAt: string,
	title: string,
	subtitle: string,
	short_text: string,
	author: {
		name: string,
		image: string
	},
	mainImage: {
		asset: {
			url: string
		}
	},
	slug: {
		_type: string,
		current: string
	},
	body: [object]

}
