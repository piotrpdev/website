<script>
  export let posts = []
</script>


<ul class="posts-list">
  {#each posts as post}
    <li>
      <article>
        <a href="/projects/{post.slug}">
          <img
          src={post.coverImage}
          alt="Post cover"
          width={post.coverWidth}
          height={post.coverHeight}
          style="ratio: {post.coverWidth} / {post.coverHeight}"
          />
          <h2>
            {post.title}
          </h2>
          <p>{post.excerpt}</p>
        </a>
      </article>
    </li>
  {/each}
</ul>