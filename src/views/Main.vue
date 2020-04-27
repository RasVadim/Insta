<template>
  <div class="main">
    <div class="main_grid"> 
     	<article>



     	   <post 
          v-for="(post) in this.$store.state.posts"
          :key="post.id"
          :post_data="post"
         />




     	</article>

    <aside class="aside"> 

      <aside class="aside_block"> 
        <div class="my_account">
        <myAccountBlock 
          account_name="my_name_inst" 
          src_avatar="https://sun9-49.userapi.com/c858236/v858236552/1e5f9b/sSxu8b-y60w.jpg" 
          a_profile="/profile" />

        </div> 

     	<aside class="stor">
     		<div class="stories_header">
	  			<div class="head_aside">Stories</div>
	  			<a href="" class="head_aside_a">view all</a>
	  		</div>
	  		<div class="stories_list">



	      <accountBlock 
          v-for="(account) in this.accountsForStories"
          :key="account.id"
          :account_data="account"
          />



	  		</div>
     	</aside>

     	<aside class="rec">
			<div class="rec_header">
	  			<div class="head_aside">Recommendations</div>
	  			<a href="" class="head_aside_a">All</a>
	  		</div>
	  		<div class="rec_list">


	  			<div v-for="(account) in this.accountsForReccomendations"
              :key="account.id"

              class="account_block" >
            <accountBlock 
             :account_data="account" />
            <button @click="POSTS_CONS" class="subscribe">Subscribe</button>
           </div>


	  		</div>
     	</aside>
     	<footer>
     		Footer
     	</footer>

    </aside> 
   </aside>

     </div>
  </div>
</template>

<script>
// @ is an alias to /src
import post from "@/components/post.vue"
import accountBlock from "@/components/accountBlock.vue"
import myAccountBlock from "@/components/myAccountBlock.vue"
import {mapActions} from 'vuex'

export default {
  name: "Main",
  components: {post, accountBlock, myAccountBlock},
  props: {},
  data(){     
      return{}
  },
  computed:{
     accountsForStories: function () {
       let arrayAccounts = this.$store.state.accounts;
        let accForStories = arrayAccounts.filter(
        arrayAccounts => arrayAccounts.place === "stories"
      );
      return(accForStories);
     },

      accountsForReccomendations: function () {
        let arrayAccounts = this.$store.state.accounts;
        let accForReccomendations = arrayAccounts.filter(
        arrayAccounts => arrayAccounts.place === "reccomendations"
      );
      return(accForReccomendations);
     },

  },
  methods:{
    ...mapActions([
      'GET_ACCOUNTS_FROM_API',
      'GET_POSTS_FROM_API'
    ]),
    POSTS_CONS: function () {
      console.log(this.$store.state.posts)
    }
  },
  mounted() {
    this.GET_ACCOUNTS_FROM_API()
    this.GET_POSTS_FROM_API()
  }
};
</script>

<style scoped lang="scss">

a{
	text-decoration: none;
	color: #3f3f3f;
  font-size: 13px;
}

.main_grid{
  background-color: #fafafa;
  display: grid;
  grid-row-gap: 14px;
  grid-column-gap: 28px;
  grid-template-columns: 1fr 292px 292px 292px 1fr;
  grid-template-rows: 0px 0px auto;
  grid-template-areas: 
    ". . . . ."
    ". . . . ."
    ". article article aside ."
}

aside.aside{
  grid-area: aside;
}

aside.aside_block{  
  position: sticky;
  top: 83px;

  background-color: #fafafa;
  display: grid;
  grid-row-gap: 14px;
  grid-column-gap: 28px;
  grid-template-columns: auto;
  grid-template-rows: 50px 223px 197px 124px;
  grid-template-areas: 
    " my_account "
    " stor "
    " rec "
    " footer "
}

 aside.stor, aside.rec{
    border-style: solid ;
    border-color: #dbdbdb;
    border-width: 1px;
    border-radius: 4px;
    background-color: white;
  }

  article{
    grid-area: article; 
  }

    div.my_account{
    grid-area: my_account;
    height: 100%;
    width: auto;
    display: flex;
  }

  aside.stor{
    grid-area: stor;
    padding: 16px; 
  }

    .stories_header{
      display: flex;
      justify-content: space-between;
      }

    .stories_list{
      display: flex;
      flex-direction: column;
      overflow: auto;
      height: 100%;
      margin-right: -16px;
    } 

      .head_aside{
        font-size: 13px;
        font-weight: bold;
        color: #bbbbbb;
        }

      .account_block{
        display: flex;
        align-items: center;
        } 

  aside.rec{
    grid-area: rec; 
    padding: 16px;
  }

    .rec_header{
      display: flex;
      justify-content: space-between;
      }

      a.head_aside_a{
        font-size: 11px;
        font-weight: 600;
        }

      .subscribe{
        display: block;
        margin-left: auto;
        background-color: white;
        border: none;
        text-align: center;
        cursor: pointer;
        color: #3897f0;
        font-size: 12px;
        font-weight: bold;
        }


  footer{
    grid-area: footer;
    background-color: gray;
  }

@media screen and (max-width: 1000px) and (min-width: 570px) {
  .main_grid{
  display: grid;
  grid-row-gap: 14px;
  grid-column-gap: 0px;
  overflow: hidden;
  grid-template-columns:  1fr minmax(320px, 612px) 1fr ;
  grid-template-rows: 80px minmax(350px, auto) ;
  grid-template-areas: 
    ". aside ."
    ". article ."
}

       aside.stor{
        padding: 8px 0px 0px 0px;

      }

      aside.aside_block{  
        background-color: #fafafa;
        display: grid;
        grid-row-gap: 0px;
        grid-column-gap: 0px;
        overflow: hidden;
        grid-template-columns: auto;
        grid-template-rows: 80px;
        grid-auto-columns: 0px;
        grid-auto-rows: 0px;
        grid-template-areas: 
          " stor "
      }

     .stories_header{
        display: none;
        }

     .stories_list{
        display: flex;
        flex-direction: row;
        overflow: auto;
        height: 100%;
        margin-right: 0px;
    }

    .stories_list::-webkit-scrollbar  {
        height: 3px; 
        background-color: white;
    }

    .stories_list::-webkit-scrollbar-thumb{    
        background-color: #bbbbbb;
        border-radius: 20%;
    }



  }

@media screen and (max-width: 570px) {
  .main_grid{
  display: grid;
  grid-row-gap: 6px;
  grid-column-gap: 0px;
  overflow: hidden;
  grid-template-columns: minmax(115px, 1fr) minmax(115px, 1fr);
  grid-template-rows: 80px minmax(350px, auto);
  grid-auto-columns: 0px;
  grid-template-areas: 
    " aside aside "
    " article article "
}

      aside.stor{
         padding: 8px 0px 0px 0px;
        }

      aside.aside_block{  
        background-color: #fafafa;
        display: grid;
        grid-row-gap: 0px;
        grid-column-gap: 0px;
        overflow: hidden;
        grid-template-columns: auto;
        grid-template-rows: 80px;
        grid-auto-columns: 0px;
        grid-auto-rows: 0px;
        grid-template-areas: 
          " stor "
      }

       .stories_header{
          display: none;
          }

       .stories_list{
          display: flex;
          flex-direction: row;
          overflow: auto;
          height: 100%;
          margin-right: 0px;
      }


    .stories_list::-webkit-scrollbar  {
        height: 3px; 
        background-color: white;
    }

    .stories_list::-webkit-scrollbar-thumb{    
        background-color: #bbbbbb;
        border-radius: 20%;
    }

}




</style>
