const fetch = require('node-fetch');

const getPosts = async () => {
	const key = "account-b822f49ae6fb5c314ad1d5d7cfdf38"
	const domain = "https://backend.mednation.org";
	let res = await fetch(domain + "/api/collections/get/reviews?token=" + key, {
		method: 'post',
		body: JSON.stringify({
			filter: {published:true},
			limit: 10
		})
	}).then(r=>r.json())
	const posts = res.entries;
	posts.forEach(post => {
		post.college_specifics = post.college_specifics.replace(/^\t{3}/gm, '');
	});
	let lookup = new Map();
	posts.forEach(post => {
		lookup.set(post._id, JSON.stringify(post));
	});
	return lookup;
}

export default getPosts;