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
                <div class="side-body padding-top">
                    <div id="voyager-notifications"></div>
                    <div class="page-content">
                        <div class="alerts">
                        </div>
                        <div class="clearfix container-fluid row">
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="panel widget center bgimage"
                                    :style="{ marginBottom: 0, overflow: 'hidden', backgroundImage: 'url(' + require('@/assets/images/dashboard/post_1.jpeg') + ')'}">
                                    <div class="dimmer"></div>
                                    <div class="panel-content">
                                        <i class="voyager-group"></i>
                                        <h4>1 User</h4>
                                        <p>You have 1 user in your database. Click on button below to view all
                                            users.</p>
                                        <a href="http://127.0.0.1:8000/admin/users" class="btn btn-primary">View all
                                            users</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="panel widget center bgimage"
                                    :style="{ marginBottom: 0, overflow: 'hidden', backgroundImage: 'url(' + require('@/assets/images/dashboard/post_2.jpeg') + ')'}">
                                    <div class="dimmer"></div>
                                    <div class="panel-content">
                                        <i class="voyager-news"></i>
                                        <h4>4 Posts</h4>
                                        <p>You have 4 posts in your database. Click on button below to view all
                                            posts.</p>
                                        <a href="http://127.0.0.1:8000/admin/posts" class="btn btn-primary">View all
                                            posts</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="panel widget center bgimage"
                                    :style="{ marginBottom: 0, overflow: 'hidden', backgroundImage: 'url(' + require('@/assets/images/dashboard/post_3.jpeg') + ')'}">
                                    <div class="dimmer"></div>
                                    <div class="panel-content">
                                        <i class="voyager-file-text"></i>
                                        <h4>1 Page</h4>
                                        <p>You have 1 page in your database. Click on button below to view all
                                            pages.</p>
                                        <a href="http://127.0.0.1:8000/admin/pages" class="btn btn-primary">View all
                                            pages</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="analytics-container">
                            <p
                                style="border-radius:4px; padding:20px; background:#fff; margin:0; color:#999; text-align:center;">
                                To view analytics you'll need to get a google analytics client id and add it to your
                                settings for the key <code>google_analytics_client_id</code>. Get your key in your
                                Google developer console:
                                <a href="https://console.developers.google.com"
                                    target="_blank">https://console.developers.google.com</a>
                            </p>

                            <div class="Dashboard Dashboard--full" id="analytics-dashboard">
                                <header class="Dashboard-header">
                                    <ul class="FlexGrid">
                                        <li class="FlexGrid-item">
                                            <div class="Titles">
                                                <h1 class="Titles-main" id="view-name">
                                                    voyager::analytics.select_view</h1>
                                                <div class="Titles-sub">Various visualizations</div>
                                            </div>
                                        </li>
                                        <li class="FlexGrid-item FlexGrid-item--fixed">
                                            <div id="active-users-container"></div>
                                        </li>
                                    </ul>
                                    <div id="view-selector-container"></div>
                                </header>

                                <ul class="FlexGrid FlexGrid--halves">
                                    <li class="FlexGrid-item">
                                        <div class="Chartjs">
                                            <header class="Titles">
                                                <h1 class="Titles-main">This Week vs Last Week</h1>
                                                <div class="Titles-sub">By users</div>
                                            </header>
                                            <figure class="Chartjs-figure" id="chart-1-container"></figure>
                                            <ol class="Chartjs-legend" id="legend-1-container"></ol>
                                        </div>
                                    </li>
                                    <li class="FlexGrid-item">
                                        <div class="Chartjs">
                                            <header class="Titles">
                                                <h1 class="Titles-main">This Year vs Last Year</h1>
                                                <div class="Titles-sub">By users</div>
                                            </header>
                                            <figure class="Chartjs-figure" id="chart-2-container"></figure>
                                            <ol class="Chartjs-legend" id="legend-2-container"></ol>
                                        </div>
                                    </li>
                                    <li class="FlexGrid-item">
                                        <div class="Chartjs">
                                            <header class="Titles">
                                                <h1 class="Titles-main">Top Browsers</h1>
                                                <div class="Titles-sub">By pageview</div>
                                            </header>
                                            <figure class="Chartjs-figure" id="chart-3-container"></figure>
                                            <ol class="Chartjs-legend" id="legend-3-container"></ol>
                                        </div>
                                    </li>
                                    <li class="FlexGrid-item">
                                        <div class="Chartjs">
                                            <header class="Titles">
                                                <h1 class="Titles-main">Top Countries</h1>
                                                <div class="Titles-sub">By sessions</div>
                                            </header>
                                            <figure class="Chartjs-figure" id="chart-4-container"></figure>
                                            <ol class="Chartjs-legend" id="legend-4-container"></ol>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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