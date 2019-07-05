<template>
    <div class="blackground">
        <div class="spinner-wrapper">
            <div class="spinner">
                <unicon name="spin" fill="limegreen" width="50" height="50" />
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .blackground {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
    }

    .spinner-wrapper  {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
        transform: translate(-50%, -50%);
        z-index: 1;
    }

    .spinner {
        transform: rotate(360deg);
        animation: 3s infinite linear spin;
    }

    @keyframes spin {
        0% {transform: rotate(0deg)};
        50% {transform: rotate(180deg)};
        100% {transform: rotate(360deg)};
    }
</style>
