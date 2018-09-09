<template>
    <div class="md-layout">
        <div class="md-layout-item md-size-50">
            <i class="cf cf-btc" style="font-size: 32px"></i>
        </div>
        <div class="md-layout-item text-right md-size-50">
            <span style="font-size: 32px; line-height: 32px">0.002</span>
        </div>
        <div class="md-layout-item md-size-50">
            <i class="cf cf-eth" style="font-size: 32px"></i>
        </div>
        <div class="md-layout-item text-right md-size-50">
            <span style="font-size: 32px; line-height: 32px">0.002</span>
        </div>
    </div>
</template>

<style>
    .text-right {
        text-align: right;
    }
</style>

<script>
    export default {
        props: ['remote'],

        data ()
        {
            return {}
        },

        created()
        {

        }
    }
</script>