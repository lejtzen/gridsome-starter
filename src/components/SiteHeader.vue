<template>
    <header>
        <g-link :to="$static.metadata.siteUrl">{{ $static.metadata.siteName }}</g-link>

        <nav>
            <h2 class="sr-only">Menu title</h2>
            <ul>
                <li>
                    <g-link to="/" title="Link">Link</g-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
}
</script>

<static-query>
    query {
        metadata {
            siteName
            siteUrl
        }
    }
</static-query>
