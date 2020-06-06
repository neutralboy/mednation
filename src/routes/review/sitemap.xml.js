const fetch = require("node-fetch")

async function getAllPosts() {
    const key = "account-b822f49ae6fb5c314ad1d5d7cfdf38"
    const domain = "https://backend.mednation.org";
    let res = await fetch(domain + "/api/collections/get/reviews?token=" + key, {
        method: 'post',
        body: JSON.stringify({
            limit: 10,
            fields: { title: 1, _id: 1, rating: 1, main_body: 1, state: 1, main_image: 1, location: 1, _created: 1 }
        })
    }).then(r => r.json()).catch(e => { console.log(e) })
    const posts = res.entries;
    return posts || [];
}



export async function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/rss+xml'
    });
    const posts = await getAllPosts();
    let exp = `<xml version="1.0" encoding="UTF-8"><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
    let body = ``;
    posts.forEach(elem => {
        body = body +`<url>
            <loc>https://www.mednation.org/review/${elem._id}</loc>
            <lastmod>${elem._created}</lastmod>
            <priority>0.8</priority>
        </url>`
    });

    let end = `</urlset></xml>`;
    res.end(exp+body+end);
}
