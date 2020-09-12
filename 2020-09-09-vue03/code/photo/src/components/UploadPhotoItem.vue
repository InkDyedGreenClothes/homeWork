<template>
  <div class="uploadPhotoItem">
    <span class="myProgress" v-show="showProgress">
      <span class="plan" :style="{ width: plan + '%' }"></span>
      {{ plan }}%
    </span>
    <img :src="imgUrl" />
    <span class="pictureName">
      {{ file.name }}
    </span>
  </div>
</template>

<script>
export default {
  props: ["plan", "file"],
  data() {
    return {
      imgUrl: "",
    };
  },
  created() {
    // 如何写好代码
    // 1. 表达代码的意图
    // 2. 没有重复
    // 3. 写测试
    this.setImgUrl();
  },
  computed: {
    showProgress() {
      return this.plan !== 0 && this.plan !== 100;
    },
  },

  methods: {
    setImgUrl() {
      const fileRender = new FileReader();

      fileRender.readAsDataURL(this.file);
      fileRender.onload = () => {
        this.imgUrl = fileRender.result;
      };
    },
  },
};
</script>

<style scoped></style>
