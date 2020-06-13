const fetch = require("node-fetch")

async function getAllBlogs() {
    const key = "account-b822f49ae6fb5c314ad1d5d7cfdf38"
    const domain = "https://backend.mednation.org";
    let res = await fetch(domain + "/api/collections/get/article?token=" + key, {
        method: 'post',
        body: JSON.stringify({
            filter: {published:true},
            limit: 10,
            fields: { title: 1, _id: 1, summary: 1, type: 1, author: 1, _created: 1, image: 1, published: 1}
        })
    }).then(r => r.json()).catch(e => { console.log(e) })
    const posts = res.entries;
    return posts || [];
}



export async function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    const posts = await getAllBlogs();
    const contents = JSON.stringify(posts.map(post => {
        return {
            title: post.title,
            summary: post.summary,
            type: post.type,
            author: post.author,
            _created: post._created,
            _id: post._id,
            image: post.image
        };
    }));
    res.end(contents);
}