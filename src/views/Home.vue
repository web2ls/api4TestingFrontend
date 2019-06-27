<template>
    <div class="home">
        <div class="header">Available API</div>
        <div class="api-list">
            <div class="api-item">
                <unicon name="cloud-download" fill="white" width="50" height="50" />
                <span>Getting static data in JSON format | <span>"GET /api/data"</span></span>
            </div>
            <div class="api-item">
                <unicon name="cloud-download" fill="white" width="50" height="50" />
                <span>Getting dynamic data in JSON format | <span>"GET /api/custom-data"</span></span>
            </div>
            <div class="api-item">
                <unicon name="cloud-upload" fill="white" width="50" height="50" />
                <span>Upload data in JSON format  | <span>"POST /api/custom-data"</span></span>
            </div>
            <div class="api-item">
                <unicon name="copy" fill="white" width="50" height="50" />
                <span>Upload any files to the server  | <span>"POST /api/upload"</span></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .home {
        width: 50%;
    }

    .home .header {
        margin-bottom: 5%;
        color: limegreen;
        letter-spacing: 1px;
        font-size: 28px;
        text-align: center;
    }
    .api-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: nowrap;
        position: relative;
        width: 100%;
        color: #568afe;

    }

    .api-item {
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 5%;
        font-size: 20px;
        letter-spacing: 1px;
        cursor: pointer;
    }

    .api-item > span {
        margin-left: 3%;
        transition: all .3s;
    }

    .api-item:hover span {
        color: #fff;
    }

    .api-item span span {
        color: limegreen;
    }
</style>
