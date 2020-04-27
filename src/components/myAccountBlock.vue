<template>
    <div class="my_account">
        <div class="my_avatar">
            <a :href="a_profile">
                <img :src="src_avatar" class="my_avatar">
            </a>
        </div>
        <div class="my_name">
            <a :href="a_profile">{{account_name}}</a>
        </div>
    </div>
</template>

<script>
export default {
  name: "myAccountBlock",
  props: {
    account_name: String,
    src_avatar: String,
    a_profile: String
  }
};
</script>

<style scoped lang="scss">

  .my_account{
    font-family: Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    } 

 .my_avatar{
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  }

.my_name{
  padding: 10px;
  font-size: 13px;
  font-weight: 600;
  color: #3f3f3f;
}


a{
	text-decoration: none;
	color: #3f3f3f;
  font-size: 13px;
}

</style>
