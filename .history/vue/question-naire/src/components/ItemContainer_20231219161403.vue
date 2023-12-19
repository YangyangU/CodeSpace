<!-- 首页和答题页面的结构相似，用组件可复用 -->
<template>
    <section><!-- h5标签 -->
        <header class="top_tips">
            <span class="num_tip">第一周</span>
        </header>
        <div>
            <div class="home_logo item_container_style">

            </div>
            <router-link to="/item" class="start button_style"></router-link>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>

.top_tips {
    position: absolute;
    height: 7.35rem;
    width: 3.25rem;
    top: -1.3rem;
    right: 1.6rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAEoCAMAAACJnShcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB+UExURUxpcRsUAv39/RwVAxsVAhsTAP39/SEdHBgQABoTARwVAxwUAxsUAhwUAhwUAh4XBW6qgYHqtTxOM37lsVV7WX/ptFiUa2OXcILZq33jr43Oqm/FloDptGy+j2mgeP39/f39/VmVbmy9j/39/XbUo/39/bHw0IPwunS+kXrQoPTfd6UAAAAndFJOUwAfgFgPF0ABBAhDTik6MWP+83/PrIYj0UttJrusPOVm1IZo/Y2lo2Qb/ukAAAaZSURBVHja7dsJb5vcEgbgEHAw8cJqvK9pL/b//4P37AuLY1ww1qd3FLVJIzWP5swME4M/PjqL49fH+8UnUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBVQZ5R//nr7eC+X/Pb1Vxijm63R8u+M7nvy34Rw/jxuKeifTx4Zw/vqfXyfffxMVdRDM8fR5Ovo8hifxGI+PP6fxWH7pD04as9hQFItBWaZotfjfz89ivRmapUj5Oi1I/PyQP+KF6RqKFASLmJIKkilmKxZ5MFC6lGnDJUWxWa0W/LN4H5isl9GEKQj2sTAVu5H+fB0E3OW/0KVMG+UgCdKfFmtPskxa3yZeTl5aNMSeq5Sr3wpTo4n8TG/RZCri3POIa7UgsQr6bEg9vlmavDxuRBWLkZfv5Pd3G6vy+xGxNHneutlEUnUx621dacgObOYFRZpG6R1UUfrmThV+Vy5DFNCeWzFTXrSJtdmP/96SJmm1EBmId38urVBFzhrSdD3fkkYhbXZx8XykJLtezvqRdGRuuJ4uJXJou+LfYi+u3KLIzNpv2Wyq3dbxP5qKtPQ/yJZ8TGX2hyDladFDpHvFajGP5ADY92LiPfmAqgTiM2kfF33FgjfkPZUhWq1Jj2zYmMzTor+gC8Vdlaqhley0eEGurLuiz1jdVanuz01FfLn0aqILRbOqZpusbm+99KAnVU1nVzX1HyuuqkmVNPVa1c0XoNpUSdOdbbK/2DccoDTlA5jIb0K1B8gSRWfSEIkq4tHIC7iqzuTFQ6CKvUpVCcWG934QU3ERqbLOTyZqtBoG9ceppkqd3ujPMKi0FkVbj5iGQzGV1X8qUc5QqKlAjUsomijnMijKPD/eezRRzn441KiKYplyptNh5tR2qouqXOfOdL4bZiTcRw1TVJf5tNx+ovlGFDVLBzDFs3qUzNTse4CqSn9FnV+POteifAP1elX83YASc4qqJucXn+CZoCrdZ0x0lqqJu30lK2WJqkfJ8yOpmrjuebtN0+0yflGiqhPdQIlUEVXI4vCCaT5RJVVC6fNTKsbK4leYalF2qkxVcu3dNLFLqm711CrO6rmqtu7ku76kTBRVsWoXrCTqc0CdXZ6outOrqjRreesvTQkziUR5ld9GBaqkoqUVRv0cYExI1KQrKqj83m6qrGS5Wbe1fktJbLfnMFQmlaiaFxN8ddOFqHRluYcuVXHGByAhcZOdqOrrLvKWmWTN+XgPow5VkSKJPBmmce0LVDxXPFmqDSeTpDvVLVEiniZmUofn37mrL89QjvesK1W8NEjs6KQpaHop1lZ5WkWmVdTJZLgmoUmyTI2vWuv7w8YgpcWeHKJr7WiIry2018wg0TQ9YtI3HLRK7DJhFkXVnx9foxY5vC7NLIk0MVPwy50QzbJVbrKMqEvnK76Rf4iWyeFB1e0QusbBSZL3630Q6wxLqpCxCOx6u12v7FNCIt30WBvcosRVLUdEivSIyXypuLxhJRl3CZEYhKQNfr8UXaXJIj1uslR6MIh1NEkyGkkSqiBt8MsRxiWTRRo/eG/UuBRaKrkml2N5v95v0SHRV7oSafzw/drmDYvCXCvY3lzXnDpNWWiZSiS/xT3t2g1rYmgm+mt6hPXZIqRD4pZMgUny29xpl9fnkViSxYql4pt9SFiYHUozQ46NrLyleE+SqirOoq5KyIU+0zODBpsbhyxsMD31qIRvqxiLuWbfs++ZEQbLnhlkaCR6c5Jbivc8yVDJdZSwqGs+U3/wsFhqZoihodaUytX3ycdcDJVm0ZhPjdCs6shwjQXzsatvC5VmURmxOVNHxtT4PUP2ZqjmxqRrU2mXYS5FGzn6K5M1sUdGm82p/UOmnMVcnvwYSZfOljkzqMgidWOykyVcOpRTseTImPC/Zsbm1KHJeNIkCAxZYH5l9KY9M+ZztRS02gjaPdhVF1ZviiExEyNjqveUbk11z+VYT+jobDnT0tBw2m9zzz5SWXXJHpAzw5Ezo7zMdf34qV8b44aR4YiRIQuwH1MjTBWbp2FicHgGafy659NLvemVI3g9qXZkBKbHfDJ9qLdglMfFgO94+LjTmoO+ZaVuZrzBe3saZsYbvD/r7UD/5fg/mwnN4ObanykAAAAASUVORK5CYII=) no-repeat;
    background-size: 100% 100%;
    z-index: 10;
}
.top_tips .num_tip {
    position: absolute;
    left: .48rem;
    bottom: 1.1rem;
    height: .7rem;
    width: 2.5rem;
    font-size: .6rem;
    font-family: \\9ED1\4F53;
    font-weight: 600;
    color: #a57c50;
    text-align: center;
}
</style>