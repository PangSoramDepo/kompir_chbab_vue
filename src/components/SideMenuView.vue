<template>
    <div class="side-menu sidebar-inverse ps ps--active-x" style="">
        <nav class="navbar navbar-default" role="navigation">
            <div class="side-menu-container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="http://127.0.0.1:8000/admin">
                        <div class="logo-icon-container">
                            <img src="~@/assets/images/Flogo-icon-light.png" alt="Logo Icon">
                        </div>
                        <div class="title">Voyager</div>
                    </a>
                </div><!-- .navbar-header -->

                <div class="panel widget center bgimage"
                    :style="{ backgroundImage: 'url(' + require('@/assets/images/login-bg.jpeg') + ')', backgroundSize: 'cover', backgroundPosition: '0px' }">
                    <div class="dimmer"></div>
                    <div class="panel-content">
                        <img src="~@/assets/images/captain-avatar.png" class="avatar" alt="Admin avatar">
                        <h4>Admin</h4>
                        <p>admin@admin.com</p>

                        <a href="http://127.0.0.1:8000/admin/profile" class="btn btn-primary">Profile</a>
                        <div style="clear:both"></div>
                    </div>
                </div>

            </div>
            <div id="adminmenu">
                <ul class="nav navbar-nav">
                    <li class="active"><a target="_self" href="http://127.0.0.1:8000/admin"><span
                                class="icon voyager-boat"></span> <span class="title">Dashboard</span></a>
                        <!---->
                    </li>
                    <li class=""><a target="_self" href="http://127.0.0.1:8000/admin/roles"><span
                                class="icon voyager-lock"></span> <span class="title">Roles</span></a>
                        <!---->
                    </li>
                    <li class=""><a target="_self" href="http://127.0.0.1:8000/admin/users"><span
                                class="icon voyager-person"></span> <span class="title">Users</span></a>
                        <!---->
                    </li>
                    <li class=""><a target="_self" href="http://127.0.0.1:8000/admin/media"><span
                                class="icon voyager-images"></span> <span class="title">Media</span></a>
                        <!---->
                    </li>
                    <li class=""><a target="_self" href="http://127.0.0.1:8000/admin/posts"><span
                                class="icon voyager-news"></span> <span class="title">Posts</span></a>
                        <!---->
                    </li>
                    <li class=""><a target="_self" href="http://127.0.0.1:8000/admin/pages"><span
                                class="icon voyager-file-text"></span> <span class="title">Pages</span></a>
                        <!---->
                    </li>
                    <li class=""><a target="_self" href="http://127.0.0.1:8000/admin/categories"><span
                                class="icon voyager-categories"></span> <span class="title">Categories</span></a>
                        <!----></li>
                    <li class="dropdown"><a target="_self" href="#5-dropdown-element" data-toggle="collapse"
                            aria-expanded="false"><span class="icon voyager-tools"></span> <span
                                class="title">Tools</span></a>
                        <div id="5-dropdown-element" class="panel-collapse collapse ">
                            <div class="panel-body">
                                <ul class="nav navbar-nav">
                                    <li class=""><a target="_self" href="http://127.0.0.1:8000/admin/menus"><span
                                                class="icon voyager-list"></span> <span class="title">Menu
                                                Builder</span></a> <!----></li>
                                    <li class=""><a target="_self" href="http://127.0.0.1:8000/admin/database"><span
                                                class="icon voyager-data"></span> <span
                                                class="title">Database</span></a> <!----></li>
                                    <li class=""><a target="_self" href="http://127.0.0.1:8000/admin/compass"><span
                                                class="icon voyager-compass"></span> <span
                                                class="title">Compass</span></a> <!----></li>
                                    <li class=""><a target="_self" href="http://127.0.0.1:8000/admin/bread"><span
                                                class="icon voyager-bread"></span> <span class="title">BREAD</span></a>
                                        <!----></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class=""><a target="_self" href="http://127.0.0.1:8000/admin/settings"><span
                                class="icon voyager-settings"></span> <span class="title">Settings</span></a>
                        <!---->
                    </li>
                </ul>
            </div>
        </nav>
        <div class="ps__rail-x" style="width: 60px; left: 0px; bottom: 0px;">
            <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 14px;"></div>
        </div>
        <div class="ps__rail-y" style="top: 0px; right: 0px;">
            <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideMenuView',
}
</script>

<style>

</style>