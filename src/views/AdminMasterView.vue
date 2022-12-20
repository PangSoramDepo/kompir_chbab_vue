<template>

    <div id="voyager-loader" style="display: none;">
        <img src="~@/assets/images/Flogo-icon-light.png" alt="Voyager Loader">
    </div>

    <div class="app-container" style="">
        <div class="fadetoblack visible-xs"></div>
        <div class="row content-container">
            <nav class="navbar navbar-default navbar-fixed-top navbar-top" style="">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button class="hamburger btn-link">
                            <span class="hamburger-inner"></span>
                        </button>
                        <ol class="breadcrumb hidden-xs">
                            <li class="active"><i class="voyager-boat"></i> Dashboard</li>
                        </ol>
                    </div>
                    <ul class="nav navbar-nav  navbar-right ">
                        <li class="dropdown profile">
                            <a href="#" class="dropdown-toggle text-right" data-toggle="dropdown" role="button"
                                aria-expanded="false"><img src="~@/assets/images/captain-avatar.png"
                                    class="profile-img"> <span class="caret"></span></a>
                            <ul class="dropdown-menu dropdown-menu-animated">
                                <li class="profile-img">
                                    <img src="~@/assets/images/captain-avatar.png" class="profile-img">
                                    <div class="profile-body">
                                        <h5>Admin</h5>
                                        <h6>admin@admin.com</h6>
                                    </div>
                                </li>
                                <li class="divider"></li>
                                <li class="class-full-of-rum">
                                    <a href="http://127.0.0.1:8000/admin/profile">
                                        <i class="voyager-person"></i>
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="/" target="_blank">
                                        <i class="voyager-home"></i>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <form action="http://127.0.0.1:8000/admin/logout" method="POST">
                                        <input type="hidden" name="_token"
                                            value="czALMASujtUHrWXoM2UEwHd5JdWEgpH4QUeksEZU">
                                        <button type="submit" class="btn btn-danger btn-block">
                                            <i class="voyager-power"></i>
                                            Logout
                                        </button>
                                    </form>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <SideMenuView />
            <!-- Main Content -->
            <div class="container-fluid">
                <slot name="body"></slot>
            </div>
        </div>
    </div>
    <footer class="app-footer">
        <div class="site-footer-right">
            Made with <i class="voyager-heart"></i> by <a href="http://thecontrolgroup.com" target="_blank">The
                Control Group</a>
            - v1.6.0
        </div>
    </footer>

    <!-- Javascript Libs -->
</template>

<script>
require('../assets/js/voyager.js')
import { onMounted } from 'vue';
import SideMenuView from '@/components/SideMenuView.vue'

export default {
    components: { SideMenuView },
    setup() {

        onMounted(() => {
            document.body.classList.add('voyager');
        });

        return {
            onMounted
        }
    }
}
</script>

<style>

</style>