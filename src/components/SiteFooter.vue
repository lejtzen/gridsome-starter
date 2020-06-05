<template>
    <footer>
        Copyright © {{ (new Date).getFullYear() }} <g-link :to="$static.metadata.siteUrl" :title="$static.metadata.siteName">{{ $static.metadata.siteName }}</g-link>
    </footer>
</template>

<script>
export default {
}
</script>

<static-query>
    query {
        metadata {
            siteName,
            siteUrl,
        }
    }
</static-query>
