<template>
  <div class="account_block" >
    <div class="account_avatar">
      <a  :href="account_data.a_profile">
      <img :src="account_data.src_avatar" class="account_avatar">
      </a>
    </div>
    <div class="account_info">
      <div  class="account_name">
      <a class="account_name" :href="account_data.a_profile">{{account_data.account_name}}</a>
        </div>
      <div class="account_status">{{account_data.account_status}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "accBlockPost",
  props: {
    account_data:{
      type: Object,
      default() {
        return {}
      }
    },
  }
};
</script>

<style scoped lang="scss">

  .account_block{
    font-family: Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    } 

 .account_avatar{
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  }

.account_info{
  padding: 8px;
  }

.name_post{
  padding-left: 16px;
  }

.account_name{
  font-size: 13px;
  font-weight: 600;
  color: #3f3f3f;
}

.account_status{
  font-size: 12px; 
  color: #c5c5c5;
}

a{
	text-decoration: none;
	color: #3f3f3f;
  font-size: 13px;
}


</style>
