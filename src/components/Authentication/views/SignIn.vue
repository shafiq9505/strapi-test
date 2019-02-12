<template>
<div class="signin-container">
    <el-card class="box-card ">
            <el-row>
        <h1>Welcome Bastard</h1>
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
            let id = this.$uuid.v5()
            this.$firebaseRefs.Authentication.child(id).set({
                guid: id,
                username: this.authentication.userName,
                password: this.authentication.password
            })
        }
    }
}
</script>

<style lang="scss">
.signin-container {
 text-align: center;
padding : 40px 20px 20px 20px;
    .signin-form {
      padding: 0px 20px;
    }
}
</style>
