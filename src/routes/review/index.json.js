const fetch = require("node-fetch")

async function getAllPosts() {
    const key = "account-b822f49ae6fb5c314ad1d5d7cfdf38"
    const domain = "https://backend.mednation.org";
    let res = await fetch(domain + "/api/collections/get/reviews?token=" + key, {
        method: 'post',
        body: JSON.stringify({
            filter: {published:true},
            limit: 10,
            fields: { title: 1, _id: 1, rating: 1, main_body: 1, state: 1, main_image: 1, location: 1 }
        })
    }).then(r => r.json()).catch(e=>{ console.log(e) })
    const posts = res.entries;
    return posts || [];
}



export async function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    const posts = await getAllPosts();
    const contents = JSON.stringify(posts.map(post => {
        return {
            title: post.title,
            main_body: post.main_body,
            rating: post.rating,
            state: post.state,
            _id: post._id,
            main_image: post.main_image
        };
    }));
    res.end(contents);
}