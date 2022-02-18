<template>
    <Navbar />
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3" id="TransferBar">
                <div class="container">
                    <p id="title">From <span class="badge badge-pill badge-secondary">{{from}}</span>  to <span class="badge badge-pill badge-secondary">{{to}}</span></p>
                </div>
                <div class="container token-bar">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle token-list" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="@/assets/avalanche_logo.png" class="token-logo" v-if="isAVAX">
                                    <img src="@/assets/usdc_logo.png" class="token-logo" v-if="!isAVAX">
                                    <p>{{current_token}}</p>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">
                                        <img src="@/assets/usdc_logo.png" class="token-logo" v-if="isAVAX">
                                        <img src="@/assets/avalanche_logo.png" class="token-logo" v-if="!isAVAX">
                                        <span>USDC</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-7 offset-md-1">
                            <div class="input-field">
                                <button class="max-btn">max</button>
                                <input type="text" placeholder="0.00">
                            </div>
                        </div>
                    </div>
                
                </div>
                <div class="container balance">
                    <p>Available Balance on {{from}}<br>{{balance1}} {{current_token}}</p>
                </div>
                <hr id="swap-hr">
                <div class="d-flex justify-content-center">
                    
                    <button class="swap">
                    
                        <img src="@/assets/swap_arrow.png" alt="#">
                    </button>
                </div>
                <div class="container transfer-count">
                    <div class="d-flex justify-content-center">
                    <p>Transfer {{input}} {{current_token}} to <span class="token-style">{{to}}</span></p>
                    
                    
                    </div>
                    <div class="d-flex justify-content-center">
                        <p>Balance on {{to}}: {{balance2}} {{current_token}}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="confirm-btn">Transfer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  data(){
      return{
          isAVAX: true,
          current_token: tokens[0],
          second_token: tokens[1], 
          from: "Tezos",
          to: "Avalanche",
          input: "0.00",
          balance1: "21.14",
          balance2: "16.47",
      }
  },
  components:{
    Navbar,
  }
}
let isAVAX = true;
let tokens = ["AVAX", "USDC"];
if(isAVAX == false){
    tokens.reverse();
    isAVAX = true;
}
</script>

<style>
*{
    color: white;
}
input{
    background: none;
    height: 52px;
    text-align: end;
    border: none;
    outline: none;
    width: 78%;

}

.input-field{
    background: none;
    border: 2px solid #e3e3e3;
    border-radius: 10px;
    height: 52px;

}
.input-field > button{
    position: relative;
    top: -5px;
    margin-left: 4%;
    background: none;
    border: 2px solid #e3e3e3;
    border-radius: 7px;
    font-size: 14px;

}
#TransferBar{
    margin-top: 10%;
    height: 540px;
    background-color: #353535;
    border-radius: 10px;
}
#TransferBar{
    font-size: 20px;
}
#title{
    margin-top: 20px
}

.token-bar{
    margin-top: 60px;
}
.token-logo{
    height: 40px;
    margin-right: 10px;
}
.token-list{
    background-color: #484848;
    border: none;
    width: 120%;
}
.token-list > p{
    display: inline;
    margin: 0 40% 0 10px;

    
}
.dropdown-menu{
    width: 216px;
    background-color: transparent;
    border: none;
}
.dropdown-item{
    background-color: #484848;
    border-radius: 6px;
}
.dropdown-item:hover{
    background-color: #5f5f5f;
}
.badge{
    background-color: #5f5f5f;
}
.balance{
    text-align: end;
}
.balance > p{
    font-size: 14px;
    margin-top: 12px;
}
.swap{
    height: 60px;
    width: 60px;
    border-radius: 30px;
    background-color: #c4c4c4;
    z-index: 2;
    border: none;
}
.swap > img{
    width: 100%;
    z-index: 2;
    
}
#swap-hr{
    width: 90%;
    margin: auto;
    height: 2px;
    position: relative;
    top: 30px;
    z-index: 1;
}
.transfer-count{
    margin-top: 30px;
}
.token-style{
    background-color: #5f5f5f;
    border-radius: 5px;
    padding: 6px 6px 6px 6px;
    font-size: 16px;
}
.confirm-btn{
    background-color: #171717;
    border: 2px;
    height: 80px;
    width: 40%;
    border-radius: 10px;
    margin-top: 10px;
}
</style>
