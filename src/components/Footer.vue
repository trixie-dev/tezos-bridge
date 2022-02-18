<template>
    <div class="footer fixed-bottom">
        <div class="container">
            <div class="row" id="links_bar">
                
                <div class="col-sm-6 col-xl-8">©2022 SNARKy Builders<br><p style="font-size: 80%; color: #777777;">made for Tezos DeFi Hackathon 2022</p></div>
                <div class="col-sm-6 col-xl-4">
                    <ul>
                        <li>
                            <a href="https://youtube.com" id="youtube" class="nav-item">
                                <img src="../assets/youtube_logo.png">
                                YouTube
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com" id="github" class="nav-item">
                                <img src="../assets/github_logo.png">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
*{
    color: #e3e3e3;
}
.footer{
    background-color: #171717;
    height: 50px;
    width: 100%;
    color: white;
    
}
#youtube, #github{
    position: relative;
    top: 6px;
    margin: 0px 20px 0 20px;
}
#youtube > img, #github > img{
    width: 40px;
}
#youtube > img{
    opacity: 0.6;
}
ul{
    list-style: none;
    margin: 0;
    padding-left: 0;
    display: flex;
    justify-content: center;

}

a{
    text-decoration: none;
}

</style>