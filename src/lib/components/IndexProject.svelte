<script>
    export let thumb, link, title, description, school;
</script>

<div class="index-project">
    <div class="media-container"><img class="media" alt="project thumbnail" src={thumb} /></div>
    <div>
        <h3><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h3>
        {#if school}
            <div class="badge">University Project ({school})</div>
        {/if}
        <p>{description}</p>
    </div>
</div>