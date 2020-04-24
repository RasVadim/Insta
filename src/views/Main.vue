<template>
  <div class="main">
    <div class="main_grid"> 
     	<article>
     	   <post 
    img_post= "https://tekno10.cubecdn.net/wp-content/uploads/2019/08/instagram-takip-engeli-kaldirma-1-1024x683.jpg"
    liked_people= "name_user"
    text_post= "Lorem ipsum dolor sit amet, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?

Ut enim ad minima veniam, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus!"
    time_post= "1 HOURS AGO" />
         <post 
    img_post= "https://www.brokenheadholidaypark.com.au/wp-content/uploads/2018/10/iphone-2203712_1280-e1540251427416.jpg"
    liked_people= "name_user"
    text_post= "At vero eos et accusamus et iusto odio dignissimos ducimus, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, ut et voluptates repudiandae sint et molestiae non recusandae!

Nemo enim ipsam voluptatem, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, ut et voluptates repudiandae sint et molestiae non recusandae."
    time_post= "2 HOURS AGO" />
         <post 
    img_post= "https://atlassteak.com/wp-content/uploads/27.jpeg"
    liked_people= "name_user"
    text_post= "Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, ut et voluptates repudiandae sint et molestiae non recusandae!"
    time_post= "3 HOURS AGO" />
         <post 
    img_post= "https://tekno10.cubecdn.net/wp-content/uploads/2020/02/instagram-kronolojik-siralama-nasil-1024x683.jpg"
    liked_people= "name_user"
    text_post= "Nemo enim ipsam voluptatem, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, ut et voluptates repudiandae sint et molestiae non recusandae."
    time_post= "3 HOURS AGO" />
         <post 
    img_post= "https://cdn.fw-daily.com/2017/05/How-To-Instagram-Pics-Travel-1500x1000-1140x760.jpg"
    liked_people= "name_user"
    text_post= "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, consectetur adipiscing elit, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo! Sed ut perspiciatis, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, qui dolorem eum fugiat, quo voluptas nulla pariatur! At vero eos et accusamus..."
    time_post= "4 HOURS AGO" />
     	</article>

    <aside class="aside"> 

      <aside class="aside_block"> 
        <div class="my_account">
        <myAccountBlock 
          account_name="will_smith" 
          src_avatar="https://sun9-9.userapi.com/c857632/v857632958/1cf83b/-Ii4b3lnuA8.jpg" 
          a_profile="https://www.google.ru/" />

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

          
        <!-- <div class="rec_list_acc" > 

            <accountBlock 
              v-for="(account) in this.accountsForReccomendations"
              :key="account.id"
              :account_data="account" 
              />
             
        </div>   

        <div class="rec_list_btn" >  


              <button v-for="(account) in this.accountsForReccomendations"
              :key="account.id" 
              class="subscribe"
              >Subscribe</button>


          </div> -->
          <Div v-for="(account) in this.accountsForReccomendations"
              :key="account.id"
              :account_data="account" class="account_blok" >
             <accountBlock />
             <button class="subscribe"></button>
          </Div>




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
      let arrayAccounts = this.$store.state.accounts;
      let accountsForStories = arrayAccounts.filter(
        arrayAccounts => arrayAccounts.place === "stories"
      );
      let accountsForReccomendations = arrayAccounts.filter(
        arrayAccounts => arrayAccounts.place === "reccomendations"
      );
      let accountsForPost = arrayAccounts.filter(
        arrayAccounts => arrayAccounts.place === "post"
      );
      
      return{accountsForStories, accountsForReccomendations, accountsForPost}
  },
  methods:{
    ...mapActions([
      'GET_ACCOUNTS_FROM_API',
    ]),
    FILTER_ACCOUNTS_FOR_STOREIS: function() {
      let arrayAccounts = this.$store.state.accounts;
      let accountsForStories = arrayAccounts.filter(
        arrayAccounts => arrayAccounts.place === "stories"
      );
        console.log(accountsForStories);
    }
  },
  mounted() {
    this.GET_ACCOUNTS_FROM_API()
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

    .rec_list{
      display: flex;
      overflow: auto;
      height: 100%;
      margin-right: -16px;
      justify-content: space-between;
    } 

    //  .rec_list_acc{
    //   display: inline-block;
    //  }
     
    .rec_list_btn{
       justify-self: end;
     }

      a.head_aside_a{
        font-size: 11px;
        font-weight: 600;
        }

      .subscribe{
        padding: 18px;
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


</style>
