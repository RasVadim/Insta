<template>
  <div class="account_block">
    <div class="account_avatar">
      <a :href="account_data.a_profile">
        <img :src="account_data.src_avatar" class="account_avatar" />
      </a>
    </div>
    <div class="account_info">
      <div class="account_name">
        <a class="account_name" :href="account_data.a_profile">
          {{
          account_data.account_name
          }}
        </a>
      </div>
      <div class="account_status">{{ account_data.account_status }}</div>
    </div>
    <button @click="POSTS_CONS" class="subscribe">Subscribe</button>
  </div>
</template>

<script>
export default {
  name: "accountBlock",
  props: {
    account_data: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped lang="scss">
.account_block {
  height: 166px;
  width: 146px;
  padding: 16px;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-color: #dbdbdb;
  border-width: 1px;
  border-radius: 4px;
  background-color: white;
  margin: 14px;
}

.account_avatar {
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.account_info {
  padding: 8px;
}

.name_post {
  padding-left: 16px;
}

.account_name {
  font-size: 16px;
  font-weight: 600;
  color: #3f3f3f;
}

.account_status {
  font-size: 10px;
  color: #c5c5c5;
  text-align: center;
  padding: 8px;
}

a {
  text-decoration: none;
  color: #3f3f3f;
  font-size: 13px;
}

.subscribe {
  display: block;
  height: 30px;
  width: 120px;
  background-color: #3897f0;
  border: none;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  font-size: 13px;
  font-weight: bold;
  border-radius: 4px;
}
</style>
