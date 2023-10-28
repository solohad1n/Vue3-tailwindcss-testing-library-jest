<template>
  <a class="mb-7 group">
    <VideoItemThumbnail :index="index" />
    <VideoItemInfo :index="index" />
  </a>
</template>

<script>
import VideoItemThumbnail from './VideoItemThumbnail/VideoItemThumbnail.vue'
import VideoItemInfo from './VideoItemInfo/VideoItemInfo.vue'

export default {
  components: {
    VideoItemThumbnail,
    VideoItemInfo
  },

  props: ['index']
}
</script>
