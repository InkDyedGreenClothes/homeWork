<template>
  <div>
    <div class="container">
      <div class="photoHeader">
        <div class="imgContainer">
          <img class="photoName" src="public/img/1.jpg" />
        </div>
        <div class="btnContainer">
          <span class="photoTitle">相册名称</span>
          <button class="mybtn" @click="showUploadView = true">上传照片</button>
        </div>
      </div>

      <div class="photoContainer">
        <template v-for="item in photos">
          <PhotoItem
            :imgName="item.name"
            :imgUrl="item.imgUrl"
            :key="item.id"
          ></PhotoItem>
        </template>
      </div>
    </div>
    <!-- 上传相关 -->
    <el-dialog
      :visible.sync="showUploadView"
      width="85%"
      title="上传照片-普通上传(H5)"
    >
      <UploadView @uploadComplete="handleUploadComplete"></UploadView>
    </el-dialog>
  </div>
</template>

<script>
import { getPhotos } from "../api";
import PhotoItem from "../components/PhotoItem";
import UploadView from "../components/UploadView";
export default {
  components: {
    PhotoItem,
    UploadView,
  },
  data() {
    return {
      showUploadView: false,
      photos: [],
    };
  },
  created() {
    this.updatePhotos();
  },
  methods: {
    handleUploadComplete() {
      this.updatePhotos();
    },

    async updatePhotos() {
      const { data: responseData } = await getPhotos();
      this.photos = responseData.data;
    },
  },
};
</script>

<style scoped></style>
