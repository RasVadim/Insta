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

    div.my_account{
    display: flex;
    height: 100%;
    }

        .my_avatar{
        display: block;
        height: 100%;
        width: auto;
        border-radius: 50%;
        }

        .my_name{
        display: flex;
        padding-left: 10px;
        align-items: center;
        font-weight: 600;
        color: #3f3f3f;
        }

</style>
