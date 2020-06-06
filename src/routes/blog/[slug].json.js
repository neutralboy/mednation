const fetch = require('node-fetch');

const getPosts = async () => {
    const key = "account-b822f49ae6fb5c314ad1d5d7cfdf38"
    const domain = "https://backend.mednation.org";
    let res = await fetch(domain + "/api/collections/get/article?token=" + key, {
        method: 'post',
        body: JSON.stringify({
            limit: 10
        })
    }).then(r => r.json())
    const posts = res.entries;
    let lookup = new Map();
    posts.forEach(post => {
        lookup.set(post._id, JSON.stringify(post));
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