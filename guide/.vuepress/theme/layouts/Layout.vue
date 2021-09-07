<template>
  <Layout>
    <template #page-bottom>
      <div id="license_footer">
        <a target="_blank" rel="license noopener noreferrer" href="http://creativecommons.org/licenses/by-sa/4.0/">
          <img
              alt="Creative Commons License"
              style="border-width: 0"
              src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
        </a>
        <br />
          Diese Webseite und deren Inhalt sind lizenziert unter 
        <a target="_blank" rel="license noopener noreferrer" href="http://creativecommons.org/licenses/by-sa/4.0/"><abbr title="Creative Commons Attribution-ShareAlike 4.0 International License">CC BY-SA 4.0</abbr><OutboundLink/></a>.
        <br />
          Das Wolf-Icon gehört 
        <a target="_blank" rel="noopener noreferrer" href="https://www.mcicon.com/product/wolf-icon-15/">MCICON<OutboundLink/></a>.
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';

export default {
  components: {
    Layout,
  },
};
</script>

<style lang="css">
#license_footer {
  text-align: center;
}
</style>