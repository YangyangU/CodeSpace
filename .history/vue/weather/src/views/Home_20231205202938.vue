<template>
    <div class="container">
        <div class="nav">
            <div class="time">
                12-5
            </div>
            <div class="city">
                切换城市
            </div>
        </div>
        <div class="city-info">
            <div class="city-name">南昌</div>
            <p class="weather">大雪</p>
            <h2 class="temp">
                <em>-10℃</em>
            </h2>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
.container {
    min-height: 100vh;
    background-color: #000;
    opacity: 0.6;
    color:#fff
}
.nav{
    overflow: auto;
    padding: 10px;
}

</style>