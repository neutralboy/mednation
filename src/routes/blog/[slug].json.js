const fetch = require('node-fetch');

async function getToken(){
    let res = await fetch("https://cloud.squidex.io/identity-server/connect/token",{
        method: "post",
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "grant_type=client_credentials&client_id=mednation-review:ssg-reader&client_secret=a6akmje51jkhc4j5vsply6zppmxu4zwh9wcspcyjat4x&scope=squidex-api"
    }).then(r=>r.json()).catch(e=>{ console.log(e) })
    const token = res.access_token;
    return token;
}

const getPosts = async () => {
	let token = await getToken();
	let res = await fetch("https://cloud.squidex.io/api/content/mednation-review/blog/", {
		method: 'get',
		headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
	}).then(r=>r.json())
	const posts = res.items;
	let lookup = new Map();
	posts.forEach(post => {
		lookup.set(post.data.slug.iv, JSON.stringify(post.data));
	});
	return lookup;
}

export async function get(req, res, next) {
    const { slug } = req.params;
    const lookup = await getPosts();

    if (lookup.has(slug)) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(lookup.get(slug));
    } else {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: `Not found`
        }));
    }
}