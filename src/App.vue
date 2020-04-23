<template>
  <div id="app">
    <div class="head_grid">
     	<header class="header">
	     	<header class="logo">
	     		<div class="logo_head">
					 <router-link to="/">
							<img class="logo_head" src="https://psv4.userapi.com/c856336/u22601940/docs/d9/198275e85237/logo.png?extra=74D5qsGxw2ooccGlHEhpwRmlHbZuqzWY8arkNih032_UMm_nOm7FP-0yv_Qy0t-xHjf7Tw0qpDD29pEwk5xCrtOcj1EadUW5fNVMfFcfT3PXaeeK8vBxTWeueyRkQ2n20H2iGdjqqoGduvlRitNmZg">
					</router-link>
				</div>
	     	</header>
	     	<header class="search">
	     		<div class="search_head">
					<input type="text" placeholder="Search" class="search_input">
				</div>
	     	</header>
	     	<header class="icons">
	     		<div class="icons_head">
					<div class="interesting">
						<router-link to="/interesting">
							<img class="interesting" src="https://psv4.userapi.com/c856336/u22601940/docs/d11/62d496083ce6/interesting.png?extra=s-Sb5840AmqVIs3y9HkR7TRaJ3f3z5AEEULjojMalr2rvrNMtmffCNknJr-4V3HjMaONuiRPcpUmedCTJWwCWBORKSc1LWBYgj5UdnHtFH8SEYHHN5nCuUHYdaO_i-PJtqbz2t8sYbFdkb2sRVXYaA">
						</router-link>	
					</div>
					<div class="liked">
						<router-link to="/liked">
							<img class="liked" src="https://psv4.userapi.com/c856336/u22601940/docs/d1/499f900b7c4f/liked.png?extra=D8pYPCQG1LCmyhGN4M1pYJqo97_svDqqrBMq-w9Xf9wmY057b7ZEoBbC0Dy6-3w__xNkJZplGxAckIX7F9GwQrTLKqwL8GNzskTtdKdeQwPt1rQGxja5dYprQ62_dXd2fv8OEFi7ka-DG9R6C3EtGg">
						</router-link>	
					</div>
					<div class="profile">
						<router-link to="/profile">
							<img class="profile" src="https://sun9-9.userapi.com/c857632/v857632958/1cf83b/-Ii4b3lnuA8.jpg">
						</router-link>
					</div>
				</div>	
	     	</header>
	     </header>	
     </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
  line-height: 18px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.head_grid{
    position: sticky;
    top: 0;
    background-color: white;
    border-style: none none solid none;
    border-color: #dbdbdb;
    border-width: 1px;
    padding-left: 18px;
    padding-right: 18px;
}

  header{
    display: grid;
    grid-template-columns: 1fr 310px 310px 310px 1fr;
    grid-template-rows: 54px;
    grid-template-areas: 
    ". logo search icons ."
  }

  header.logo{
    grid-area: logo;
    align-items: center;
    display: flex;
  }

  .logo_head{
      width: auto;
      height: 30px;
      display: block;
  }

  header.search{
    grid-area: search;
    display: flex;
    justify-content: center;
    align-items: center;

  }

      .search_head{
        display: inline;
      }

      .search_input{
        width: 208px;
        height: 24px;
        text-align: center;
        border-style: solid ;
        border-color: #dbdbdb;
        border-width: 1px;
        background-color: #fafafa;
        border-radius: 3px;
        color:#dbdbdb;
      }

  header.icons{
    grid-area: icons;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

      .icons_head{
        width: 120px;
        height: 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        }

        .interesting{
            width: 22px;
            height: 22px;
            display: block;
        }

        .liked{
            width: 22px;
            height: 22px;
            display: block;
        }

        .profile{
            width: 22px;
            height: 22px;
            display: block;
            border-radius: 50%;
        }


</style>
