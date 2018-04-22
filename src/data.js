export function dataPromise() {
	return fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
		   .then((response) => response.json())
		   .then((responseJson) => sanitizeResponse(responseJson))
}

function sanitizeResponse(response) {
	return response.hits.map((item) => ({url: item.url,
										 title: item.title,
										 hits: item.points}))
}
