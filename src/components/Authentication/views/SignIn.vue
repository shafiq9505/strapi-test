<template>
<div>
<el-form>
    <el-form-item label="UserName">
        <el-input v-model="authentication.userName"></el-input>
    </el-form-item>
    <el-form-item label="Password">
        <el-input v-model="authentication.password"></el-input>
    </el-form-item>
     <el-button type="success" @click="SignIn">Submit</el-button>
</el-form>
</div>
</template>

<script>
// get data from firebase
import {db} from '../../../config/db';
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
        { let id = this.$uuid.v5() 
          this.$firebaseRefs.Authentication.child(id).set(
                {
                    guid : id,
                    username : this.authentication.userName,
                    password : this.authentication.password
                }
            )
        }
    }
}
</script>
