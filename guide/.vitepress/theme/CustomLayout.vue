<script setup lang="ts">
import RegisterSW from "./components/RegisterSW.vue";
import DefaultTheme from "vitepress/theme";
import { useSidebar } from "vitepress/theme";

const { Layout } = DefaultTheme;

// it seems like this creates a new ghost sidebar that isn't useful at all.
// need access to the Layout component's sidebar, but that's not exposed.
const {
  isOpen: isSidebarOpen,
  open: openSidebar,
  close: closeSidebar,
  sidebar: sidebar,
  sidebarGroups: sidebarGroups,
} = useSidebar();

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
  <Layout @touchstart="onTouchStart" @touchend="onTouchEnd">
    <template #layout-bottom>
      <RegisterSW />
    </template>
    <template #layout-top>
      <h1>{{ isSidebarOpen ? "OPEN" : "CLOSED" }}</h1>
    </template>
  </Layout>
</template>
