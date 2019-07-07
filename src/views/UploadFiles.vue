<template>
    <div class="upload-file">
        <div class="fallback-to-home">
            <router-link to="/">
                <unicon name="enter" fill="limegreen" width="50" height="50" />
            </router-link>
        </div>

        <div class="header">Make multiple select files for upload</div>

        <div class="upload-section">
            <label for="file">Any files you want...</label>
            <input type="file" id="file" v-on:change="uploadFiles" multiple>
        </div>

        <div class="description">Maximum number of files: 12</div>

        <div class="upload-information" v-if="files">
            <div class="file-info-item" v-for="file of files" :key="file.name">
                <div class="file-name">{{file.name}}</div>
                <div class="file-size">{{file.size / 1000}}KB</div>
            </div>
        </div>

        <Spinner v-if="isLoading" />

        <div class="upload-error" v-if="error">
            <span>Error on upload file to the server. Let's try again later...</span>
        </div>
        <div class="upload-success" v-if="successUpload">
            <span>File has been uploaded...</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import {ENV} from '../core/env';
import Spinner from '@/views/Spinner.vue'

export default {
    components: {
        Spinner
    },
    data() {
        return {
            files: null,
            isLoading: false,
            error: false,
            successUpload: false,
        }
    },
    methods: {
        uploadFiles(event) {
            this.error = false;
            this.successUpload = false;
            this.isLoading = true;
            this.files = Array.from(event.target.files);

            console.log(event.target.files);
            const url = `${ENV.BACKEND_URL}/api/upload`;
            const formData = new FormData();
            this.files.forEach(item => {
                formData.append('files', item);
            });

            axios.post(url, formData)
            .then(res => {
                this.successUpload = true;
                this.isLoading = false;
            })
            .catch(error => {
                console.log(error);
                this.error = true;
                this.isLoading = false;
            })
        }
    }
}
</script>

<style scoped>
    .fallback-to-home {
        position: absolute;
        top: 5%;
        left: 5%;
        z-index: 1;
    }

    .upload-file {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        padding: 10%;
        border: 3px solid limegreen;
        color: #fff;
        transition: all 0.6s;
    }

    .upload-file:hover {
        background: rgba(0, 0, 0, 0.5);
        border: 3px solid rgba(255, 255, 255, 0.5);
    }

    .header {
        margin-bottom: 5%;
        font-weight: 700;
        font-size: 18px;
    }

    .upload-section {
        margin-bottom: 3%;
    }

    input[type=file] {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
    }

    label {
        padding: 1% 3%;
        border: 3px solid limegreen;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.4s;
    }

    label:hover {
        background: limegreen;
    }

    .description {
        margin-bottom: 5%;
        font-size: 12px;
    }

    .upload-information {
        font-size: 16px;
    }

    .file-info-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1%;
    }

    .upload-error {
        margin-top: 40px;
        font-size: 18px;
        color: orangered;
        font-weight: 700;
        letter-spacing: 1px;
    }

    .upload-success {
        color: limegreen;
        font-size: 18px;
        letter-spacing: 1px;
    }

    .ext-error {
        margin-top: 40px;
        font-size: 18px;
        color: orangered;
        font-weight: 700;
        letter-spacing: 1px;
    }
</style>
