<script>
    export let title = "";
    export let url = "";
    export let image = "https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_100/v1590305977/undraw_medical_research_qg4d.png";
    export let description = "Mednation is a community of medical students.";
</script>
<svelte:head>
    <title>{title} | Mednation | A community of Medical Students</title>
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:site_name" content="Mednation" />
    <meta property="og:title" content={`${title} | Mednation | A community of Medical Students`} />
    <meta property="og:url" content={"https://www.mednation.org/" + url} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:image:type" content="image/png" />
</svelte:head>