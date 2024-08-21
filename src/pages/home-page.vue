<template>
    <section class="home-page full app-container">
        <section class="home-page-container">
            <div class="hero-title-container">

                <h1 class="hero-title">Empowering Your Financial Journey</h1>
            </div>
            <p class="hero-desc">Your financial future starts here. At Mr.Bitcoin, we're committed to helping you grow
                your wealth and unlock the full potential of your money. Let's turn your financial goals into reality.
            </p>
            <div class="home-page-tiles">
                <div class="tile-rate">
                    <span class="tile-name">Rate</span>
                    <span class="tile-data">$434,329.48</span>
                </div>
                <div class="tile-size">
                    <span class="tile-name">Average size</span>
                    <span class="tile-data">1337.343GB</span>
                </div>
                <div class="tile-chart">

                    <TileChart />
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import TileChart from '../cmps/home-tile-chart.vue'
export default {
    components: {
        TileChart
    }
}
</script>

<style></style>