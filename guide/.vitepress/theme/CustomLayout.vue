<!-- Copied and adapted from https://github.com/vuejs/vitepress/blob/2b3cd95ab112ffce3a168b41c8cca1446d3fb920/src/client/theme-default/Layout.vue -->
<!-- because calling useSidebar seems to create another sidebar control and the default-theme Layout -->
<!-- does not expose the openSidebar, closeSidebar and isSidebarOpen. -->
<script setup lang="ts">
import { useRoute } from "vitepress";
import RegisterSW from "./components/RegisterSW.vue";
import {
  computed,
  provide,
  useSlots,
  watch,
  watchEffect,
  onMounted,
  onUnmounted,
} from "vue";
import VPBackdrop from "vitepress/theme";
import VPContent from "vitepress/theme";
import VPFooter from "vitepress/theme";
import VPLocalNav from "vitepress/theme";
import VPNav from "vitepress/theme";
import VPSidebar from "vitepress/theme";
import VPSkipLink from "vitepress/theme";
import { useData } from "vitepress";
import { useSidebar } from "vitepress/theme";

// copied from https://github.com/vuejs/vitepress/blob/2b3cd95ab112ffce3a168b41c8cca1446d3fb920/src/client/theme-default/composables/sidebar.ts#L109
// because it's not exported alongside useSidebar
const useCloseSidebarOnEscape = (isOpen: Ref<boolean>, close: () => void) => {
  let triggerElement: HTMLButtonElement | undefined;

  watchEffect(() => {
    triggerElement = isOpen.value
      ? (document.activeElement as HTMLButtonElement)
      : undefined;
  });

  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });

  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });

  function onEscape(e: KeyboardEvent) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement?.focus();
    }
  }
};

const {
  isOpen: isSidebarOpen,
  open: openSidebar,
  close: closeSidebar,
} = useSidebar();

const route = useRoute();
watch(() => route.path, closeSidebar);

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);

const { frontmatter } = useData();

const slots = useSlots();
const heroImageSlotExists = computed(() => !!slots["home-hero-image"]);

provide("hero-image-slot-exists", heroImageSlotExists);

const touchStart = { x: 0, y: 0 };

const onTouchStart = (e: TouchEvent): void => {
  console.log("touch started");
  touchStart.x = e.changedTouches[0].clientX;
  touchStart.y = e.changedTouches[0].clientY;
};

const onTouchEnd = (e: TouchEvent): void => {
  console.log("touch ended");
  const dx = e.changedTouches[0].clientX - touchStart.x;
  const dy = e.changedTouches[0].clientY - touchStart.y;
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx > 0 && touchStart.x <= 80) {
      console.log("opening sidebar");
      openSidebar();
    } else {
      console.log("closing sidebar");
      closeSidebar();
    }
  }
};
</script>

<template>
  <div
    v-if="frontmatter.layout !== false"
    class="layout"
    :class="frontmatter.pageClass"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <slot name="layout-top" />
    <VPSkipLink />
    <VPBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" />
    <VPNav>
      <template #nav-bar-title-before>
        <slot name="nav-bar-title-before" />
      </template>
      <template #nav-bar-title-after>
        <slot name="nav-bar-title-after" />
      </template>
      <template #nav-bar-content-before>
        <slot name="nav-bar-content-before" />
      </template>
      <template #nav-bar-content-after>
        <slot name="nav-bar-content-after" />
      </template>
      <template #nav-screen-content-before>
        <slot name="nav-screen-content-before" />
      </template>
      <template #nav-screen-content-after>
        <slot name="nav-screen-content-after" />
      </template>
    </VPNav>
    <VPLocalNav :open="isSidebarOpen" @open-menu="openSidebar" />

    <VPSidebar :open="isSidebarOpen">
      <template #sidebar-nav-before>
        <slot name="sidebar-nav-before" />
      </template>
      <template #sidebar-nav-after><slot name="sidebar-nav-after" /></template>
    </VPSidebar>

    <VPContent>
      <template #page-top><slot name="page-top" /></template>
      <template #page-bottom><slot name="page-bottom" /></template>
      <template #not-found><slot name="not-found" /></template>
      <template #home-hero-before><slot name="home-hero-before" /></template>
      <template #home-hero-info-before>
        <slot name="home-hero-info-before" />
      </template>
      <template #home-hero-info><slot name="home-hero-info" /></template>
      <template #home-hero-info-after>
        <slot name="home-hero-info-after" />
      </template>
      <template #home-hero-actions-after>
        <slot name="home-hero-actions-after" />
      </template>
      <template #home-hero-image><slot name="home-hero-image" /></template>
      <template #home-hero-after><slot name="home-hero-after" /></template>
      <template #home-features-before>
        <slot name="home-features-before" />
      </template>
      <template #home-features-after>
        <slot name="home-features-after" />
      </template>
      <template #doc-footer-before><slot name="doc-footer-before" /></template>
      <template #doc-before><slot name="doc-before" /></template>
      <template #doc-after><slot name="doc-after" /></template>
      <template #doc-top><slot name="doc-top" /></template>
      <template #doc-bottom><slot name="doc-bottom" /></template>
      <template #aside-top><slot name="aside-top" /></template>
      <template #aside-bottom><slot name="aside-bottom" /></template>
      <template #aside-outline-before>
        <slot name="aside-outline-before" />
      </template>
      <template #aside-outline-after>
        <slot name="aside-outline-after" />
      </template>
      <template #aside-ads-before><slot name="aside-ads-before" /></template>
      <template #aside-ads-after><slot name="aside-ads-after" /></template>
    </VPContent>
    <VPFooter />
    <slot name="layout-bottom" />
    <RegisterSW />
  </div>
  <Content v-else />
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
