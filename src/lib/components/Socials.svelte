<script>
    import { siteAuthorGitHub, siteAuthorLinkedIn, siteAuthorTwitter } from '$lib/config'

    let className = ''
    export { className as class }
</script>

<div class={`socials${className ? ` ${className}` : ''}`}>
    <a href={`${siteAuthorGitHub}`} target="_blank"><img class="icon" src="/icons/github.svg" alt="GitHub logo"></a>
    <a href={`${siteAuthorTwitter}`} target="_blank"><img class="icon" src="/icons/twitter.svg" alt="Twitter logo"></a>
    <a href={`${siteAuthorLinkedIn}`} target="_blank"><img class="icon" src="/icons/linkedin.svg" alt="LinkedIn logo"></a>
</div>