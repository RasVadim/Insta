<template>
    <div class="body_post">
    <div class="head_post">
        <accountBlock 
      account_name="ivan_urgant" 
      account_status="Russia, Moscow" 
      src_avatar="https://sun9-35.userapi.com/c857632/v857632958/1cf842/w7KQWygceQE.jpg" 
      a_profile="https://www.google.ru/" />
    </div>
    <div class="img_post">
        <img class="img_post" :src="img_post">
    </div>
    <div class="icons_post">
        <div class="like_i_post">
            <a class="like_i_post" href="">
                <img class="like_i_post" src="https://psv4.userapi.com/c856336/u22601940/docs/d1/499f900b7c4f/liked.png?extra=D8pYPCQG1LCmyhGN4M1pYJqo97_svDqqrBMq-w9Xf9wmY057b7ZEoBbC0Dy6-3w__xNkJZplGxAckIX7F9GwQrTLKqwL8GNzskTtdKdeQwPt1rQGxja5dYprQ62_dXd2fv8OEFi7ka-DG9R6C3EtGg">
            </a>
        </div>
        <div class="com_i_post">
            <a class="com_i_post" href="">
                <img class="com_i_post" src="https://psv4.userapi.com/c856336/u22601940/docs/d6/2c4455d28f47/icon_com.png?extra=3IkJx47NeBFb6ZFfi4L96xG5w0OAdvm3fc29dhCsHdvtc4Ac03ePPbsqjEUVdSSI2Pu_5f0n5_eJndre6Bw8eKBF6DyrawENGQRCTi8CvPYmlkc4O_hxmA1tE9Z_YpZ95284S8s_ZP9kr2p6Gguoug">
            </a>
        </div>
        <div class="dir_i_post">
            <a class="dir_i_post" href="">
                <img class="dir_i_post" src="https://psv4.userapi.com/c856336/u22601940/docs/d16/c992238a2db6/icon_dir.png?extra=FQYoRZ09Ni-tV6M7gIWDHGCWD9fwQ-UnUpFmsHa8KGIL598rQGMu0dJkkDD_Tq-Eg4kSPB9V01sIKu0G6DpkUsziCZ4efYF5Zv58zFVJ3mbZOYsRWisHnxo9Ag1sa1WbkqxwZVGicLrV8ZbPWHvNaA">
            </a>
        </div>
        <div class="fav_i_post">
            <a class="fav_i_post" href="">
                <img class="fav_i_post" src="https://psv4.userapi.com/c856336/u22601940/docs/d10/30288228a956/icon_fav.png?extra=TGeGtdahRYClPnLG5owWClATxu4DtTIJbsj8KutYQevJPqJQrhM7RgfQDx3ge0EqMf_s_paeaDut_4B4Zpax0lcBk_3Z8_V8FtABd9FUbqocM3yAkOb5egjVkrDhoQMo8uScv6WILLRsXNgrauycXQ">
            </a>
        </div>
    </div>
    <div class="liked_people">
    Liked by <a class="liked_people" href="">{{liked_people}}</a> and <a class="liked_people" href="">others</a>
    </div>
    <div class="text_post">
        {{text_post}}
    </div>
    <div class="time_post">
        {{time_post}}
    </div>
    <div class="comment_post">
        <input type="text" placeholder="Add comment..." class="comment_input">
    </div>
    </div>
</template>

<script>

import accountBlock from "@/components/accountBlock.vue";

export default {
  components: {accountBlock},
  name: "post",
  props: {
    img_post: String,
    liked_people: String,
    text_post: String,
    time_post: String
  }
};
</script>

<style scoped lang="scss">

    .body_post{
    max-width: 100%;
    min-height: 400px;
    margin-bottom: 50px;
    border-style: solid ;
    border-color: #dbdbdb;
    border-width: 1px;
    border-radius: 4px;
    background-color: white;
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 5px;
    grid-template-rows: 56px minmax(250px ,auto) 40px minmax(18px, auto) minmax(70px, auto) 18px 56px;
    grid-template-areas: 
            "head_post"
            "img_post"
            "icons_post"
            "liked_people"
            "text_post"
            "time_post"
            "comment_post"
    }

    .head_post{
        grid-area: head_post;
        display: flex;
        align-items: center;
        padding: 12px;
        }

    .img_post{
    grid-area: img_post;
    width: 100%;
    height: auto;
    }

    .icons_post{
    grid-area: icons_post;
    padding-left: 16px;
    padding-right: 16px;
    display: grid;
    grid-template-columns: 22px 22px 22px 1fr;
    grid-column-gap: 8px;
    grid-template-areas: 
        "like_i_post com_i_post dir_i_post fav_i_post"
    }

    .like_i_post{
        grid-area: like_i_post;
        display: block;
        justify-self:end;
        }

    .com_i_post{
        grid-area: com_i_post;
        display: block;
        }

    .dir_i_post{
        grid-area: dir_i_post;
        display: block;
        }

    .fav_i_post{
        grid-area: fav_i_post;
        display: block;
        justify-self:end;
        }

    .liked_people{
    grid-area: liked_people;
    padding-left: 16px;
    padding-right: 16px;
    }

    a.liked_people{
    font-weight: 600;
    padding:0px;  
    }

    .text_post{
    grid-area: text_post;
    padding-left: 16px;
    padding-right: 16px;
    }

    .time_post{
    grid-area: time_post;
    padding-left: 16px;
    padding-right: 16px;
    color: #bbbbbb;
    font-size: 10px;
    }

    .comment_post{
    grid-area: comment_post;
    display: flex;
    align-items: center;
    padding: 16px;
    border-style: solid none none none;
    border-width: 1px;
    border-color: #efefef;
    }

        .comment_input{
        width: 208px;
        height: 24px;
        border-style: none;
        background-color: #fafafa;
        border-radius: 3px;
        color: #a2a2a2;
        }     

</style>
