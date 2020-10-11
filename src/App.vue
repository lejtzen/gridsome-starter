<template>
  <div>
    <SiteHeader />
    <main>
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter,
  },

  metaInfo() {
    const metaInfo = { meta: [] }
    const { siteName, siteDescription } = this.$static.metadata

    if (siteName) {
      metaInfo.title = siteName
    }

    if (siteDescription) {
      metaInfo.meta.push({
        key: 'description',
        name: 'description',
        content: siteDescription,
      })
    }

    return metaInfo
  },
}
</script>

<static-query>
    query {
        metadata {
            siteName
            siteDescription
        }
    }
</static-query>
