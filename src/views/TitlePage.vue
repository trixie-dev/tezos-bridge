<template>
    <div class="nav"></div>
    <div class="container" >
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8" id="logo">
                <div class="row">
                    <div class="col-xl-1">img</div>
                    <div class="col-xl-11"><h1>Name of the Bridge</h1></div>
                </div>
                
                <h4 style="opacity: 0.6;">Some words about the bridge</h4>

            </div>
            <div class="col-12 col-sm-10 col-md-8 offset-md-2 offset-lg-2 offset-xl-0 col-lg-8 col-xl-4 " id="walletsBar">
                <p id="title-wallets-bar">Connect wallets</p>
                
                <div class="net_container">
                    <hr>
                    <img src="../assets/tezos_logo.png" :class="{smallScreenElements: isSmallScreen, largeScreenElements: !isSmallScreen}">
                    <p class="name_net" :class="{smallScreenElements: isSmallScreen, largeScreenElements: !isSmallScreen}">Tezos</p>
                    <button :class="{ConnectingBtn: TezosConnect, NConnectingBtn: !TezosConnect}" @click="TezosConnect = !TezosConnect">connect</button>
                    
                </div>
                <div class="net_container">
                    <hr>
                    <img src="../assets/avalanche_logo.png" :class="{smallScreenElements: isSmallScreen, largeScreenElements: !isSmallScreen}">
                    <p class="name_net" :class="{smallScreenElements: isSmallScreen, largeScreenElements: !isSmallScreen}">Avalanche</p>
                    <button :class="{ConnectingBtn: AvalancheConnect, NConnectingBtn: !AvalancheConnect}" @click="AvalancheConnect = !AvalancheConnect">connect</button>
                    
                </div>
                <div class="confirm">
                    <a href="/transfer" class="btn" :class="{disabled: !WalletsConectedConfirm}"><button id="ConfirmButton">CONFIRM</button></a>
                </div>
            </div>
            
        </div>
    </div>
    
</template>

<script>

export default {
  name: 'startForm',
  data(){
      return{
          TezosConnect: TezosWallet,
          AvalancheConnect: AvalancheWallet,
          WalletsConectedConfirm: WalletsConected,
          isSmallScreen: isSmallScreen,

      }
      
  }
}
let TezosWallet = true;
let AvalancheWallet = true;

function ConfirmConnecting(TezosWallet, AvalancheWallet){
    if(TezosWallet == true && AvalancheWallet == true){
        return true;
    }
    else{
        return false;
    }
}
let WalletsConected = ConfirmConnecting(TezosWallet, AvalancheWallet);

let DisplayeWidth = window.innerWidth;
let isSmallScreen = false;
if (DisplayeWidth < 768){
    isSmallScreen = true;
} 
else{
    isSmallScreen = false;
}

</script>

<style scoped>
*{
    color: #e3e3e3;
}
.smallScreenElements{
    font-size: 24px;
    width: 40px;
}
.largeScreenElements{
    font-size: 30px;
    width: 45px;
}
.nav{
    background-color: #171717;
    height: 50px;
    width: 100%;
    color: #e3e3e3;
}
#logo{
    white-space: nowrap;
    margin-top: 26%;
}
#walletsBar{
    background-color: #353535;
    margin-top: 18%;
    border-radius: 10px;
    margin-bottom: 200px;

}
#title-wallets-bar{
    color: #e3e3e3;
    font-size: 32px;
    margin-top: 16px;
    text-align: center;
}
#walletsBar > hr{
    background-color: #171717;
    margin: auto;
    width: 80%;
    height: 2px;
}
.net_container{
    margin: 20px 20px 0 20px;
    width: auto;
}
.net_container > img{
    float: left;
    margin-right: 20px;
    
}
.net_container > button{
    background: none;
    
    border-radius: 6px;
    float: right;
    margin: 4px 0 0 0;
}
.NConnectingBtn{
    color: white;
    border: 2px solid #e3e3e3;
}
.ConnectingBtn{
    color: #58e458;
    border: 2px solid #58e458;
}
.net_container > hr{
    margin-bottom: 20px;
    height: 4px;
    background-color: #171717;
}
.name_net{
    color: #e3e3e3;
    display: inline;
}

.confirm > a{
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 30px 0 30px 0;
}
#ConfirmButton{
    background-color: #171717;
    border: none;
    height: 60px;
    width: 60%;
    border-radius: 10px;
}



</style>
