// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  blog_posts: defineAsyncComponent(() => import("./Articles/index.vue")),
  featured_projects: defineAsyncComponent(
    () => import("./FeaturedProjects/index.vue"),
  ),
  intro: defineAsyncComponent(() => import("./Intro/index.vue")),
  newsletter: defineAsyncComponent(() => import("./Newsletter/index.vue")),
  social_links: defineAsyncComponent(() => import("./SocialLinks/index.vue")),
});
