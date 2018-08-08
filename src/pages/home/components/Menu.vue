<template>
    <div class="menu">
        <div class="menu-icon">
            <div class="menu-img">
                <img src="../../../../static/menu-img/f3dd6c383aeb3b02.png" class="img">
            </div>
                <p class="menu-p">景点门票</p>
        </div>
        <div class="menu-icon">
            <div class="menu-img">
                <img src="../../../../static/menu-img/一日游.png" class="img">
            </div>
                <p class="menu-p">一日游</p>
        </div>
        <div class="menu-icon">
            <div class="menu-img">
                <img src="../../../../static/menu-img/郑州必游.png" class="img">
            </div>
                <p class="menu-p">郑州必游</p>
        </div>
        <div class="menu-icon">
            <div class="menu-img">
                <img src="../../../../static/menu-img/夏日玩水.png" class="img">
            </div>
                <p class="menu-p">夏日玩水</p>
        </div>
        <div class="menu-icon">
            <div class="menu-img">
                <img src="../../../../static/menu-img/名胜古迹.png" class="img">
            </div>
                <p class="menu-p">名胜古迹</p>
        </div>
        <div class="menu-icon">
            <div class="menu-img">
                <img src="../../../../static/menu-img/自然风光.png" class="img">
            </div>
                <p class="menu-p">自然风光</p>
        </div>
        <div class="menu-icon">
            <div class="menu-img">
                <img src="../../../../static/menu-img/当地好玩.png" class="img">
            </div>
                <p class="menu-p">当地好玩</p>
        </div>
        <div class="menu-icon">
            <div class="menu-img">
                <img src="../../../../static/menu-img/学生专享.png" class="img">
            </div>
                <p class="menu-p">学生专享</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeMenu'
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varstylus.styl'
    .menu{
        overflow: hidden;
        height: 0;
        padding-bottom: 50%;
        .menu-icon{
            width: 25%;
            padding-bottom: 25%;
            float: left;
            position: relative;
            height: 0;
            .menu-img{
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: .44rem;
                padding .44rem;
                overflow: hidden;
                .img{
                    width: 100%;
                    display:block;
                    margin: 0 auto;
                }
            }
            .menu-p{
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: .44rem;
                line-height: .44rem;
                text-align: center;
                color: $menuTextColor;
            }
        }
    }
</style>
