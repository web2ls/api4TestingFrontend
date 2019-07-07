<template>
    <div class="home">
        <div class="header">Available API</div>
        <div class="api-list">
            <div class="api-item get-method">
                <div class="icon"><unicon name="cloud-download" fill="white" width="50" height="50" /></div>
                <div class="method">GET</div>
                <div class="description">Getting static data in JSON format</div>
                <div class="example">/api/static-data</div>
                <div class="link">link not available</div>
            </div>
            <div class="api-item get-method">
                <div class="icon"><unicon name="cloud-download" fill="white" width="50" height="50" /></div>
                <div class="method">GET</div>
                <div class="description">Getting dynamic data in JSON format</div>
                <div class="example">/api/dynamic-data</div>
                <div class="link">link not available</div>
            </div>
            <div class="api-item post-method">
                <div class="icon"><unicon name="cloud-upload" fill="white" width="50" height="50" /></div>
                <div class="method">POST</div>
                <div class="description">Upload data in JSON format</div>
                <div class="example">/api/custom-data</div>
                <div class="link">
                    <router-link to="/upload-file">link to page</router-link>
                </div>
            </div>
            <div class="api-item post-method">
                <div class="icon"><unicon name="copy" fill="white" width="50" height="50" /></div>
                <div class="method">POST</div>
                <div class="description">Upload any files to the server</div>
                <div class="example">/api/upload</div>
                <div class="link">
                    <router-link to="/upload-files">link to page</router-link>
                </div>
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
        color: #fff;
        letter-spacing: 5px;
        font-size: 28px;
        font-weight: 700;
        text-align: center;
    }
    .api-list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        position: relative;
        width: 100%;
        color: #fff;

    }

    .api-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-basis: 30%;
        align-items: center;
        margin-bottom: 5%;
        padding: 3% 5%;
        font-size: 20px;
        letter-spacing: 1px;
        cursor: pointer;
        border-radius: 3%;
    }

    .icon {
        margin-bottom: 5%;
    }

    .method {
        margin-bottom: 5%;
        font-weight: 700;
        text-transform: uppercase;
    }

    .description {
        margin-bottom: 5%;
        font-size: 14px;
    }

    .example {
        margin-bottom: 5%;
        font-style: italic;
        font-size: 18px;
    }

    .link {
        margin-bottom: 5%;
        font-weight: 300;
        font-size: 12px;
    }

    .api-item a {
        color: #fff;
        text-decoration: underline;
    }

    .get-method {
        background: linear-gradient(#F3B631, #E8371A);
    }

    .post-method {
        background: linear-gradient(#82DAB5, #3BC4D6);
    }

    @media screen and (max-width: 1024px) {
        .home {
            width: 70%;
        }

        .home .api-item {
            flex-basis: 35%;
        }
    }

    @media screen and (max-width: 768px) {
        .home {
            width: 90%;
        }

        .home .api-item {
            flex-basis: 35%;
        }
    }

    @media screen and (max-width: 480px) {
        .home {
            width: 90%;
        }

        .home .api-item {
            flex-basis: 100%;
        }
    }
</style>
