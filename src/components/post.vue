<template>
  <div class="body_post">
    <div class="head_post">
      <accBlockPost
        v-for="account in this.accountsForPost"
        :key="account.id"
        :account_data="account"
      />
    </div>
    <div class="img_post">
      <img class="img_post" :src="post_data.img_post" />
    </div>
    <div class="icons_post">
      <div class="like_i_post">
        <a class="like_i_post" href="">
          <img
            class="like_i_post"
            src="https://psv4.userapi.com/c856336/u22601940/docs/d1/499f900b7c4f/liked.png?extra=D8pYPCQG1LCmyhGN4M1pYJqo97_svDqqrBMq-w9Xf9wmY057b7ZEoBbC0Dy6-3w__xNkJZplGxAckIX7F9GwQrTLKqwL8GNzskTtdKdeQwPt1rQGxja5dYprQ62_dXd2fv8OEFi7ka-DG9R6C3EtGg"
          />
        </a>
      </div>
      <div class="com_i_post">
        <a class="com_i_post" href="">
          <img
            class="com_i_post"
            src="https://psv4.userapi.com/c856336/u22601940/docs/d6/2c4455d28f47/icon_com.png?extra=3IkJx47NeBFb6ZFfi4L96xG5w0OAdvm3fc29dhCsHdvtc4Ac03ePPbsqjEUVdSSI2Pu_5f0n5_eJndre6Bw8eKBF6DyrawENGQRCTi8CvPYmlkc4O_hxmA1tE9Z_YpZ95284S8s_ZP9kr2p6Gguoug"
          />
        </a>
      </div>
      <div class="dir_i_post">
        <a class="dir_i_post" href="">
          <img
            class="dir_i_post"
            src="https://psv4.userapi.com/c856336/u22601940/docs/d16/c992238a2db6/icon_dir.png?extra=FQYoRZ09Ni-tV6M7gIWDHGCWD9fwQ-UnUpFmsHa8KGIL598rQGMu0dJkkDD_Tq-Eg4kSPB9V01sIKu0G6DpkUsziCZ4efYF5Zv58zFVJ3mbZOYsRWisHnxo9Ag1sa1WbkqxwZVGicLrV8ZbPWHvNaA"
          />
        </a>
      </div>
      <div class="fav_i_post">
        <a class="fav_i_post" href="">
          <img
            class="fav_i_post"
            src="https://psv4.userapi.com/c856336/u22601940/docs/d10/30288228a956/icon_fav.png?extra=TGeGtdahRYClPnLG5owWClATxu4DtTIJbsj8KutYQevJPqJQrhM7RgfQDx3ge0EqMf_s_paeaDut_4B4Zpax0lcBk_3Z8_V8FtABd9FUbqocM3yAkOb5egjVkrDhoQMo8uScv6WILLRsXNgrauycXQ"
          />
        </a>
      </div>
    </div>
    <div class="liked_people">
      Liked by
      <a class="liked_people" href="">{{ post_data.liked_people }}</a> and
      <a class="liked_people" href="">others</a>
    </div>
    <div class="text_post">
      {{ post_data.text_post }}
    </div>
    <div class="time_post">
      {{ post_data.time_post }}
    </div>
    <div class="comment_post">
      <input type="text" placeholder="Add comment..." class="comment_input" />
    </div>
  </div>
</template>

<script>
import accBlockPost from "@/components/accBlockPost.vue";
import { mapActions } from "vuex";

export default {
  components: { accBlockPost },
  name: "post",
  props: {
    post_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    accountsForPost: function() {
      let arrayAccounts = this.$store.state.accounts;
      let accs_ForPost = arrayAccounts.filter(
        (arrayAccounts) => arrayAccounts.place === "post"
      );
      let accForPost = accs_ForPost.filter(
        (accs_ForPost) => accs_ForPost.id === this.post_data.user_id
      );
      return accForPost;
    },
  },

  methods: {
    ...mapActions(["GET_ACCOUNTS_FROM_API"]),
  },

  mounted() {
    this.GET_ACCOUNTS_FROM_API();
  },
};
</script>

<style scoped lang="scss">
.body_post {
  max-width: 100%;
  min-height: 400px;
  margin-bottom: 50px;
  border-style: solid;
  border-color: #dbdbdb;
  border-width: 1px;
  border-radius: 4px;
  background-color: white;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 5px;
  grid-template-rows:
    56px minmax(250px, auto) 40px minmax(18px, auto) minmax(70px, auto)
    18px 56px;
  grid-template-areas:
    "head_post"
    "img_post"
    "icons_post"
    "liked_people"
    "text_post"
    "time_post"
    "comment_post";
}

.head_post {
  grid-area: head_post;
  display: flex;
  align-items: center;
  padding: 12px;
}

.img_post {
  grid-area: img_post;
  width: 100%;
  height: auto;
}

.icons_post {
  grid-area: icons_post;
  padding-left: 16px;
  padding-right: 16px;
  display: grid;
  grid-template-columns: 22px 22px 22px 1fr;
  grid-column-gap: 8px;
  grid-template-areas: "like_i_post com_i_post dir_i_post fav_i_post";
}

.like_i_post {
  grid-area: like_i_post;
  display: block;
  justify-self: end;
}

.com_i_post {
  grid-area: com_i_post;
  display: block;
}

.dir_i_post {
  grid-area: dir_i_post;
  display: block;
}

.fav_i_post {
  grid-area: fav_i_post;
  display: block;
  justify-self: end;
}

.liked_people {
  grid-area: liked_people;
  padding-left: 16px;
  padding-right: 16px;
}

a.liked_people {
  font-weight: 600;
  padding: 0px;
}

.text_post {
  grid-area: text_post;
  padding-left: 16px;
  padding-right: 16px;
}

.time_post {
  grid-area: time_post;
  padding-left: 16px;
  padding-right: 16px;
  color: #bbbbbb;
  font-size: 10px;
}

.comment_post {
  grid-area: comment_post;
  display: flex;
  align-items: center;
  padding: 16px;
  border-style: solid none none none;
  border-width: 1px;
  border-color: #efefef;
}

.comment_input {
  width: 208px;
  height: 24px;
  border-style: none;
  background-color: #fafafa;
  border-radius: 3px;
  color: #a2a2a2;
}

@media screen and (max-width: 1000px) and (min-width: 570px) {
  .body_post {
    margin-bottom: 14px;
  }
}

@media screen and (max-width: 570px) {
  .body_post {
    margin-bottom: 6px;
  }
}
</style>
