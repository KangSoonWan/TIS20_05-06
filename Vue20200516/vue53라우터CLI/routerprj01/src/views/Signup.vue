<template>
  <div class="about">
    <h1>This is an Signup page</h1>
    <user-register></user-register>
    <div>언제 반영됨</div>
    <!--//user-register 우리가 만든 컴포넌트임-->
  </div>
</template>
<script>
//@는 src폴더를 가리킴(절대경로를 의미함)
import UserRegister from "@/components/user/UserRegister.vue";
export default {
  //npdtmc^2
  name: "",
  props: {},
  data() {
    return {};
  },
  //template:null
  //template안씀 위에있는게 템플릿임 그래서 안씀
  components: {
    "user-register": UserRegister
  }
};
</script>
<style lang="stylus" scoped></style>