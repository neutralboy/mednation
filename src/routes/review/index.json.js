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

async function getAllPosts() {
    let token = await getToken();
    let res = await fetch("https://cloud.squidex.io/api/content/mednation-review/review/",{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(r =>r.json()).catch(e=>{ console.log(e) })
    const posts = res.items;
    return posts || [];
}



export async function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    const posts = await getAllPosts();
    const contents = JSON.stringify(posts.map(post => {
        return {
            id: post.id,
            title: post.data.title.iv,
            summary: post.data.summary.iv,
            rating: post.data.rating.iv,
            state: post.data.state.iv,
            slug: post.data.slug.iv,
            image: "https://cloud.squidex.io/api/assets/mednation-review/"+post.data.image.iv[0]
        };
    }));
    res.end(contents);
}