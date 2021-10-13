export function PostRequest(url, requestbody) {
	const x = fetch(`${url}`, {
		method: "POST",
		body: JSON.stringify(requestbody),
		headers: {
			"Content-Type": "application/json",
		},
	}).then((response) => response.json());
	return x;
}

export function GetRequest(url,token) {
	const x = fetch(`${url}`,{
		headers:{
			Authorization:`Bearer ${token}`
		}
	}).then((response) => response.json());
	return x;
}

export function PutRequest(url, requestbody, authtoken) {
	const x = fetch(`${url}`, {
		method: "PUT",
		body: JSON.stringify(requestbody),
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${authtoken}`,
		},
	}).then((response) => response.json());
	return x;
}
