<template>
    <div class="upload-file">
        <div class="header">Select your own data</div>
        <div class="upload-section">
            <label for="file">JSON file...</label>
            <input type="file" id="file" accept=".json" v-on:change="uploadFile">
        </div>
        <div class="upload-information" v-if="file">
            <div class="file-name">{{file.name}}</div>
            <div class="file-size">{{file.size / 1000}}KB</div>
        </div>

        <Spinner v-if="isLoading" />

        <div class="upload-error" v-if="error">
            <span>Error on upload file to the server. Let's try again later...</span>
        </div>
        <div class="ext-error" v-if="wrongExt">
            <span>Selected file has wrong extention. Please check it...</span>
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
            file: null,
            isLoading: false,
            error: false,
            wrongExt: false,
            successUpload: false,
        }
    },
    methods: {
        uploadFile(event) {
            this.error = false;
            this.wrongExt = false;
            this.successUpload = false;
            this.isLoading = true;
            const file = event.target.files[0];
            this.file = file;

            const fileName = file.name;
            const fileExt = fileName.slice(-4);
            if (fileExt !== 'json') {
                this.wrongExt = true;
                return;
            }

            console.log(file);
            const url = `${ENV.BACKEND_URL}/api/dynamic-data`;
            const formData = new FormData();
            formData.append('file', file);
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
    .upload-file {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        padding: 10%;
        border: 3px solid limegreen;
        border-radius: 5px;
        color: #fff;
        transition: all 0.6s;
    }

    .upload-file:hover {
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid limegreen;
        border-radius: 7px;
    }

    .header {
        margin-bottom: 5%;
        font-weight: 700;
        font-size: 18px;
    }

    .upload-section {
        margin-bottom: 5%;
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

    .upload-information {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
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
