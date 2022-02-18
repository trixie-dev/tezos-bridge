<template>
    <div class="nav">
        <div class="container" style="margin-top: 6px;"> 
            <div class="row">
                <div class="col-md-9">
                    <a href="/">
                        <h1 class="navbar-brand">
                            Name of the Bridge<br>
                            <p style="font-size: 66%; opacity: 60%;">some words</p>
                        </h1>
                    </a>
                </div>
                <div class="col-md-3">
                    <div class="wallets">
                        <strong>Wallets:</strong>
                        <span class="point"></span> <p>Avalanche</p> 
                        <span class="point"></span> <p>Tezos</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
a{
    text-decoration: none;
}
.nav{
    background-color: #171717;
    height: 50px;
    width: 100%;
    color: #e3e3e3;
}
.wallets{
    margin-top: 12px;
    text-align: end;
}
.wallets > p{
    display: inline;
    font-size: 15px;
}
.wallets > strong{
    margin-right: 10px;
}
.point{
    display: inline-table;
    font-size: 30px;
    background-color: #58e458;
    height: 8px;
    width: 8px;
    border-radius: 4px;
    margin: 0 4px 2px 4px;
}

</style>