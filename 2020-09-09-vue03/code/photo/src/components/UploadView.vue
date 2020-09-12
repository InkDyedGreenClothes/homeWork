<template>
  <div class="upload-view">
    <div class="photoTitles">
      <span class="uploadTo">上传到</span>
      <div class="photoSelect">
        <img class="showPhoto" src="../assets/img/1.jpg" />
        相册名称
      </div>
    </div>

    <!-- 上传按钮 -->
    <div class="showContainer" v-show="showAddContainer">
      <div class="uploadContainer">
        <span class="fileinput-button">
          <span>上传图片</span>
          <input
            class="imgFile"
            type="file"
            name=""
            multiple="multiple"
            @change="handleAppPhoto"
          />
        </span>
        <span class="hint">
          按住Ctrl可多选
        </span>
      </div>
    </div>

    <!-- 显示待上传图片  -->
    <div class="loadContainer" v-show="showWantUploadContainer">
      <div class="wantUpload">
        <template v-for="(item, index) in toUploadPhotos">
          <UploadPhotoItem
            :plan="item.plan"
            :file="item.file"
            :key="index"
          ></UploadPhotoItem>
        </template>
      </div>
      <!-- <div class="addStyle">
        <span class="fileinput-add">
          <span></span>
          <input class="imgFile-add" type="file" multiple="multiple" />
        </span>
      </div> -->
      <!-- 开始上传按钮 -->
      <div class="bottomStyle">
        <span class="uploadBtn" @click="handleUpload">开始上传</span>
      </div>
    </div>
  </div>
</template>

<script>
import { uploadPhoto } from "../api";
import UploadPhotoItem from "../components/UploadPhotoItem";
export default {
  components: {
    UploadPhotoItem,
  },
  data() {
    return {
      toUploadPhotos: [],
    };
  },
  computed: {
    showAddContainer() {
      return this.toUploadPhotos.length === 0;
    },
    showWantUploadContainer() {
      return this.toUploadPhotos.length !== 0;
    },
  },
  methods: {
    async handleUpload() {
      for (const item of this.toUploadPhotos) {
        await uploadPhoto(item.file, (e) => {
          const precent = Math.ceil((e.loaded / e.total) * 100);
          item.plan = precent;
        });
      }

      // 上传完成
      this.$message({
        message: "上传图片成功",
        type: "success",
      });

      this.reset();
      this.$emit("uploadComplete");
    },

    reset() {
      this.toUploadPhotos = [];
    },
    handleAppPhoto(e) {
      // 处理数据结构
      const photoItems = Array.from(e.target.files).map((file) => {
        return {
          plan: 0,
          file,
        };
      });

      this.toUploadPhotos.push(...photoItems);
    },
  },
};
</script>

<style scoped>
.upload-view {
  widows: 800px;
  height: 550px;
}
</style>
