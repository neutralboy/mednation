const fetch = require("node-fetch")

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

async function getAllBlogs() {
    let token = await getToken();
    let res = await fetch("https://cloud.squidex.io/api/content/mednation-review/blog/",{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(r =>r.json()).catch(e=>{ console.log(e) })
    const blogs = res.items;
    return blogs || [];
}


export async function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    const posts = await getAllBlogs();
    const contents = JSON.stringify(posts.map(post => {
        return {
            id: post.id,
            title: post.data.title.iv,
            content: post.data.content.iv,
            author: post.data.author.iv,
            slug: post.data.slug.iv,
            tags: post.data.tags.iv,
            summary: post.data.summary.iv,
            created: post.created
        };
    }));
    res.end(contents);
}