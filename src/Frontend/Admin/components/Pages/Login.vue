<template>
    <!-- begin:: Page -->
    <div class="kt-grid kt-grid--ver kt-grid--root nits-login">
        <div class="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1" id="kt_login">
            <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">

                <!--begin::Aside-->
                <div class="kt-grid__item kt-grid__item--order-tablet-and-mobile-2 kt-grid kt-grid--hor kt-login__aside nits-login_aside">
                    <div class="kt-grid__item">
                        <a href="#" class="kt-login__logo">
                            <img src="/nits-assets/media/media/logos/logo-4.png" alt="logo here">
                        </a>
                    </div>
                    <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver">
                        <div class="kt-grid__item kt-grid__item--middle">
                            <h3 class="kt-login__title">Welcome to {{ title }}!</h3>
                            <h4 class="kt-login__subtitle">{{ subtitle }}</h4>
                        </div>
                    </div>
                    <div class="kt-grid__item">
                        <div class="kt-login__info">
                            <div class="kt-login__copyright">
                                {{ copyright }}
                            </div>
                            <div class="kt-login__menu">
                                <a href="#" class="kt-link">Privacy</a>
                                <a href="#" class="kt-link">Legal</a>
                                <a href="#" class="kt-link">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!--begin::Aside-->

                <!--begin::Content-->
                <div class="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">

                    <!--begin::Head-->
                    <div class="kt-login__head" v-if="loginIn">
                        <span class="kt-login__signup-label">Don't have an account yet?</span>&nbsp;&nbsp;
                        <a href="#" class="kt-link kt-login__signup-link" @click="SignUpShow">Sign Up!</a>
                    </div>

                    <!--end::Head-->

                    <!--begin::Body-->
                    <div class="kt-login__body" v-if="loginIn">

                        <!--begin::Signin-->
                        <div class="kt-login__form">
                            <div class="kt-login__title">
                                <h3>Sign In</h3>
                            </div>

                            <!--begin::Form-->
                            <form class="kt-form" action="" novalidate="novalidate">
                                <div class="form-group">
                                    <input class="form-control" v-model="email" type="text" placeholder="Email" name="email" autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" v-model="password" type="password" placeholder="Password" name="password">
                                </div>
                                <div class="form-group" v-if="error">
                                    <span class="text-center text-danger">{{ error }}</span>
                                </div>

                                <!--begin::Action-->
                                <div class="kt-login__actions">
                                    <a href="#" class="kt-link kt-login__link-forgot">
                                        Forgot Password ?
                                    </a>
                                    <button id="kt_login_signin_submit" class="btn btn-primary btn-elevate kt-login__btn-primary" v-bind:class="{ 'kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light': loading }" @click.prevent="login()">Sign In</button>
                                </div>

                                <!--end::Action-->
                            </form>

                            <!--end::Form-->
                        </div>

                        <!--end::Signin-->
                    </div>
                    <div class="kt-login__body" v-if="SignUpIn">

                        <!--begin::Signin-->
                        <div class="kt-login__form">
                            <div class="kt-login__title">
                                <h3>Sign Up</h3>
                            </div>

                            <!--begin::Form-->
                            <form class="kt-form" action="" novalidate="novalidate">
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="Full Name" name="Full Name" autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="Email" name="email" autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="Username" name="User Name" autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="password" placeholder="Password" name="password" autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="password" placeholder="Confirm Password" name="Confirm Password" autocomplete="off">
                                </div>
                                <br/>

                                <div class="form-group">
                                    <label class="kt-checkbox kt-checkbox--brand">
                                        <input type="checkbox"> I agree the <a href="">terms & conditions</a>
                                        <span></span>
                                    </label>
                                </div>

                                <!--begin::Action-->
                                <div class="kt-login__actions">
                                    <a href="#" class="kt-link kt-login__link-forgot">
                                        Forgot Password
                                    </a>
                                    <button id="kt_login_signup_cancel" class="btn btn-secondary btn-elevate kt-login__btn-secondary"  @click.prevent="BacktoLogin()">Back</button>
                                    <button id="kt_login_signin_submit" class="btn btn-primary btn-elevate kt-login__btn-primary" v-bind:class="{ 'kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light': loading }" @click.prevent="Register()">Submit</button>
                                </div>

                                <!--end::Action-->
                            </form>

                            <!--end::Form-->
                        </div>

                        <!--end::Signin-->
                    </div>


                    <!--end::Body-->
                </div>

                <!--end::Content-->
            </div>
        </div>
    </div>
    <!-- end:: Page -->
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                email: '',
                password: '',
                error: '',
                loading: false,
                title: 'Confidence',
                subtitle: 'Best app to cover your exams!',
                copyright: ' @ 2019 Confidence',
                loginIn: true,
                SignUpIn: false,
            }
        },
        beforeCreate() {
            this.$auth.logout();
        },
        methods: {
            login() {
                this.loading = true
                this.error = ""
                const user = {
                    email: this.email,
                    password: this.password
                }

                this.$auth.login(user).then(response => {
                    this.loading = false
                    this.$router.push('/dashboard')
                }).catch( err => {
                    if(err.response.status === 401){
                        this.error = err.response.data.message
                        this.loading = false
                    }
                    if(err.response.status === 500) {
                        this.error = 'Server error, please try after sometime.'
                        this.loading = false
                    }
                    if(err.response.status === 400) {
                        this.error = 'Environment variable missing. Check and retry.'
                        this.loading = false
                    }
                })

            },

            SignUpShow(){
                this.loginIn = false
                this.SignUpIn = true
            },
            BacktoLogin(){
                this.loginIn = true
                this.SignUpIn = false
            },

            Register(){

            }
        }
    }
</script>

<style lang="css" scoped>
    @import "../../theme/css/login.css";
    .nits-login_aside {
        background-image: url("/nits-assets/images/bg/bg-4.jpg");
    }
</style>
