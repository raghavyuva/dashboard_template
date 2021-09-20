export  function PostRequest(url, requestbody) {
	const x =  fetch(`${url}`, {
		method: "POST",
		body: JSON.stringify(requestbody),
		headers: {
			"Content-Type": "application/json",
		},
	}).then((response) => response.json());
	return x;
}

export function GetRequest(url) {
	const x = fetch(`${url}`).then((response) => response.json());
	return x;
}
