<template>
    <div class="container-fluid">
        <div class="row">

            <div class="faded-bg animated"></div>
            <div class="hidden-xs col-sm-7 col-md-8">
                <div class="clearfix">
                    <div class="col-sm-12 col-md-10 col-md-offset-2">
                        <div class="logo-title-container">
                            <img class="img-responsive pull-left flip logo hidden-xs animated fadeIn"
                                src="~@/assets/images/Flogo-icon-light.png" alt="Logo Icon">
                            <div class="copy animated fadeIn">
                                <h1>Kompir Chbab</h1>
                                <p>Welcome to Law Universe. The Missing Universe for Law Majority</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-5 col-md-4 login-sidebar">
                <div class="login-container">
                    <p>Sign In Below:</p>

                    <form @submit.prevent="handleSubmit">

                        <div class="form-group form-group-default" id="emailGroup">
                            <label>E-mail</label>
                            <div class="controls">
                                <input type="email" name="email" id="email" placeholder="E-mail" class="form-control"
                                    required v-model="email">
                            </div>
                        </div>

                        <div class="form-group form-group-default" id="passwordGroup">
                            <label>Password</label>
                            <div class="controls">
                                <input type="password" name="password" placeholder="Password" class="form-control"
                                    required v-model="password">
                            </div>
                        </div>

                        <div class="form-group" id="rememberMeGroup">
                            <div class="controls">
                                <input type="checkbox" name="remember" id="remember" value="1"><label for="remember"
                                    class="remember-me-text">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-block login-button">
                            <span class="signingin hidden"><span class="voyager-refresh"></span> Logging in...</span>
                            <span class="signin">Login</span>
                        </button>

                    </form>

                    <div style="clear:both"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
    setup() {
        onMounted(() => {
            document.body.classList.add('login');
        });

        const handleSubmit = (() => {
            alert("Hello bart")
        });

        return {
            onMounted,
            handleSubmit,
            email: '',
            password: ''
        }
    }
}
</script>

<style>
.login {
    background-image: url('~@/assets/images/login-bg.jpeg');
}

.form-group {
    text-align: left;
}

.remember-me-text {
    padding: 0 5px;
}
</style>