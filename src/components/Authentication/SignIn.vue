<template>
<el-form :label-position="labelPosition" label-width="100px" :model="authentication">
    <el-form-item label="UserName">
        <el-input v-model="authentication.userName"></el-input>
    </el-form-item>
    <el-form-item label="Password">
        <el-input v-model="authentication.password"></el-input>
    </el-form-item>
     <el-button type="success" @click="SignIn">Submit</el-button>
</el-form>
</template>

<script>
// get data from firebase
import {db} from '../../config/db';
export default {
    components : {
        name : 'Authentication'
    },
    firebase : {
        Authentication : db.ref('authenticate')
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
    methods : {
        SignIn()
        {
          this.$firebaseRefs.Authentication.push(
                {
                    username : this.authentication.userName,
                    password : this.authentication.password
                }
            )
        }
    }
}
</script>
