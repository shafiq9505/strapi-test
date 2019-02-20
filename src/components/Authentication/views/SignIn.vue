<template>
<div class="signin-container">
    <el-card class="box-card ">
        <el-row>
            <h1>Welcome </h1>
        </el-row>
        <el-row class="signin-form">
            <el-form>
                <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <el-form-item label="UserName">
                        <el-input v-model="authentication.userName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <el-form-item label="Password">
                        <el-input v-model="authentication.password"></el-input>
                    </el-form-item>
                    <el-button type="success" @click="SignIn">Submit</el-button>
                    <el-button @click="FaceId()">Face Id</el-button>
                    <button onclick="window.plugins.biometric.verifyBiometric('Scan your biometric please', function(msg) {alert('ok: ' + msg)}, function(msg) {alert('not ok: ' + JSON.stringify(msg))})">Verify Biometric</button>
                </el-col>
            </el-form>
        </el-row>
    </el-card>

</div>
</template>

<script>
// get data from firebase
import {
    db
} from '../../../config/db';
import {
    functions
} from 'firebase';
// var CID = require('../../../../plugins/cordova-plugin-ios-faceid/www/CID')
export default {
    components: {
        name: 'Authentication'
    },
    firebase: {
        Authentication: db.ref('authenticate')
    },
    data() {
        return {
            labelPosition: 'right',
            authentication: {
                userName: '',
                password: '',
            }
        };
    },
    methods: {
        SignIn() {
            let id = this.$uuid.v4()
            this.$firebaseRefs.Authentication.child(id).set({
                guid: id,
                username: this.authentication.userName,
                password: this.authentication.password,
                date: Date.now()
            }).then(
                this.authentication.userName = '',
                this.authentication.password = ''
            )
        },
        FaceId() {
            console.warn(window)
            console.warn(cordova)
            window.plugins.biometric.isAvailable(
                function (type) {
                    console.warn("available" + type)
                    window.plugins.biometric.verifyBiometric(
                        'Scan your biometric please', // this will be shown in the native scanner popup
                        function (msg) {
                            alert('ok: ' + msg)
                        }, // success handler: biometric accepted
                        function (msg) {
                            alert('not ok: ' + JSON.stringify(msg))
                        } // error handler with errorcode and localised reason
                    );
                }, // type returned to success callback: 'face' on iPhone X, 'touch' on other devices
                function (msg) {
                    console.warn('not available: ' + msg)

                    window.plugins.biometric.verifyBiometricWithCustomPasswordFallbackAndEnterPasswordLabel(
                        'Scan your biometric please', // this will be shown in the native scanner popup
                        'Enter PIN', // this will become the 'Enter password' button label
                        function (msg) {
                            alert('ok: ' + msg)
                        }, // success handler: biometric accepted
                        function (msg) {
                            alert('not ok: ' + JSON.stringify(msg))
                        } // error handler with errorcode and localised reason
                    );
                } // error handler: no TouchID available
            );
        }
    }
}
</script>

<style lang="scss">
.signin-container {
    text-align: center;
    padding: 40px 20px 20px 20px;

    .signin-form {
        padding: 0px 20px;
    }
}
</style>
