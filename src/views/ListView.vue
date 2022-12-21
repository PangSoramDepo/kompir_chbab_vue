<template>
    <AdminMasterView>
        <template #body>
            <div class="side-body padding-top">
                <div class="container-fluid">
                    <h1 class="page-title">
                        <i class="voyager-news"></i> Posts
                    </h1>
                    <a href="http://127.0.0.1:8000/admin/posts/create" class="btn btn-success btn-add-new"
                        style="margin-right: 10px;">
                        <i class="voyager-plus"></i> <span>Add New</span>
                    </a>
                    <a class="btn btn-danger" id="bulk_delete_btn"><i class="voyager-trash"></i> <span>Bulk
                            Delete</span></a>
                </div>
                <div id="voyager-notifications"></div>
                <div class="page-content browse container-fluid">
                    <div class="alerts">
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-bordered">
                                <div class="panel-body">
                                    <div class="table-responsive">
                                        <div id="dataTable_wrapper"
                                            class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="dataTables_length" id="dataTable_length"><label>Show
                                                            <select name="dataTable_length" aria-controls="dataTable"
                                                                class="form-control input-sm">
                                                                <option value="10">10</option>
                                                                <option value="25">25</option>
                                                                <option value="50">50</option>
                                                                <option value="100">100</option>
                                                            </select> entries</label></div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div id="dataTable_filter" class="dataTables_filter">
                                                        <label>Search:<input type="search" class="form-control input-sm"
                                                                placeholder="" aria-controls="dataTable"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <table id="dataTable" class="table table-hover dataTable no-footer"
                                                        role="grid" aria-describedby="dataTable_info">
                                                        <thead>
                                                            <tr role="row">
                                                                <th class="dt-not-orderable sorting_disabled"
                                                                    rowspan="1" colspan="1" aria-label="
                                                
                                            " style="width: 33.1562px;">
                                                                    <input type="checkbox" class="select_all">
                                                                </th>
                                                                <th class="sorting" tabindex="0"
                                                                    aria-controls="dataTable" rowspan="1" colspan="1"
                                                                    aria-label="
                                                                                        Title
                                                                                    : activate to sort column ascending"
                                                                    style="width: 154.25px;">
                                                                    Title
                                                                </th>
                                                                <th class="sorting" tabindex="0"
                                                                    aria-controls="dataTable" rowspan="1" colspan="1"
                                                                    aria-label="
                                                                                        Post Image
                                                                                    : activate to sort column ascending"
                                                                    style="width: 133.375px;">
                                                                    Post Image
                                                                </th>
                                                                <th class="sorting" tabindex="0"
                                                                    aria-controls="dataTable" rowspan="1" colspan="1"
                                                                    aria-label="
                                                                                        Status
                                                                                    : activate to sort column ascending"
                                                                    style="width: 79.8359px;">
                                                                    Status
                                                                </th>
                                                                <th class="sorting" tabindex="0"
                                                                    aria-controls="dataTable" rowspan="1" colspan="1"
                                                                    aria-label="
                                                                                        Created At
                                                                                    : activate to sort column ascending"
                                                                    style="width: 177.406px;">
                                                                    Created At
                                                                </th>
                                                                <th class="sorting" tabindex="0"
                                                                    aria-controls="dataTable" rowspan="1" colspan="1"
                                                                    aria-label="
                                                                                        SEO Title
                                                                                    : activate to sort column ascending"
                                                                    style="width: 96.1328px;">
                                                                    SEO Title
                                                                </th>
                                                                <th class="sorting" tabindex="0"
                                                                    aria-controls="dataTable" rowspan="1" colspan="1"
                                                                    aria-label="
                                                                                        Featured
                                                                                    : activate to sort column ascending"
                                                                    style="width: 97.5156px;">
                                                                    Featured
                                                                </th>
                                                                <th class="actions text-right dt-not-orderable sorting_disabled"
                                                                    rowspan="1" colspan="1" aria-label="Actions"
                                                                    style="width: 273.328px;">Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>




                                                            <tr role="row" class="odd">
                                                                <td>
                                                                    <input type="checkbox" name="row_id" id="checkbox_1"
                                                                        value="1">
                                                                </td>
                                                                <td>
                                                                    <div>Lorem Ipsum Post</div>
                                                                </td>
                                                                <td>
                                                                    <img src="http://127.0.0.1:8000/storage/posts/post1.jpg"
                                                                        style="width:100px">
                                                                </td>
                                                                <td>

                                                                    published

                                                                </td>
                                                                <td>
                                                                    2022-12-02 01:44:31
                                                                </td>
                                                                <td>
                                                                    <div></div>
                                                                </td>
                                                                <td>

                                                                </td>
                                                                <td class="no-sort no-click bread-actions">
                                                                    <a href="javascript:;" title="Delete"
                                                                        class="btn btn-sm btn-danger pull-right delete"
                                                                        data-id="1" id="delete-1">
                                                                        <i class="voyager-trash"></i> <span
                                                                            class="hidden-xs hidden-sm">Delete</span>
                                                                    </a>
                                                                    <a href="http://127.0.0.1:8000/admin/posts/1/edit"
                                                                        title="Edit"
                                                                        class="btn btn-sm btn-primary pull-right edit">
                                                                        <i class="voyager-edit"></i> <span
                                                                            class="hidden-xs hidden-sm">Edit</span>
                                                                    </a>
                                                                    <a href="http://127.0.0.1:8000/admin/posts/1"
                                                                        title="View"
                                                                        class="btn btn-sm btn-warning pull-right view">
                                                                        <i class="voyager-eye"></i> <span
                                                                            class="hidden-xs hidden-sm">View</span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr role="row" class="even">
                                                                <td>
                                                                    <input type="checkbox" name="row_id" id="checkbox_2"
                                                                        value="2">
                                                                </td>
                                                                <td>
                                                                    <div>My Sample Post</div>
                                                                </td>
                                                                <td>
                                                                    <img src="http://127.0.0.1:8000/storage/posts/post2.jpg"
                                                                        style="width:100px">
                                                                </td>
                                                                <td>

                                                                    published

                                                                </td>
                                                                <td>
                                                                    2022-12-02 01:44:31
                                                                </td>
                                                                <td>
                                                                    <div></div>
                                                                </td>
                                                                <td>

                                                                </td>
                                                                <td class="no-sort no-click bread-actions">
                                                                    <a href="javascript:;" title="Delete"
                                                                        class="btn btn-sm btn-danger pull-right delete"
                                                                        data-id="2" id="delete-2">
                                                                        <i class="voyager-trash"></i> <span
                                                                            class="hidden-xs hidden-sm">Delete</span>
                                                                    </a>
                                                                    <a href="http://127.0.0.1:8000/admin/posts/2/edit"
                                                                        title="Edit"
                                                                        class="btn btn-sm btn-primary pull-right edit">
                                                                        <i class="voyager-edit"></i> <span
                                                                            class="hidden-xs hidden-sm">Edit</span>
                                                                    </a>
                                                                    <a href="http://127.0.0.1:8000/admin/posts/2"
                                                                        title="View"
                                                                        class="btn btn-sm btn-warning pull-right view">
                                                                        <i class="voyager-eye"></i> <span
                                                                            class="hidden-xs hidden-sm">View</span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr role="row" class="odd">
                                                                <td>
                                                                    <input type="checkbox" name="row_id" id="checkbox_3"
                                                                        value="3">
                                                                </td>
                                                                <td>
                                                                    <div>Latest Post</div>
                                                                </td>
                                                                <td>
                                                                    <img src="http://127.0.0.1:8000/storage/posts/post3.jpg"
                                                                        style="width:100px">
                                                                </td>
                                                                <td>

                                                                    published

                                                                </td>
                                                                <td>
                                                                    2022-12-02 01:44:31
                                                                </td>
                                                                <td>
                                                                    <div></div>
                                                                </td>
                                                                <td>

                                                                </td>
                                                                <td class="no-sort no-click bread-actions">
                                                                    <a href="javascript:;" title="Delete"
                                                                        class="btn btn-sm btn-danger pull-right delete"
                                                                        data-id="3" id="delete-3">
                                                                        <i class="voyager-trash"></i> <span
                                                                            class="hidden-xs hidden-sm">Delete</span>
                                                                    </a>
                                                                    <a href="http://127.0.0.1:8000/admin/posts/3/edit"
                                                                        title="Edit"
                                                                        class="btn btn-sm btn-primary pull-right edit">
                                                                        <i class="voyager-edit"></i> <span
                                                                            class="hidden-xs hidden-sm">Edit</span>
                                                                    </a>
                                                                    <a href="http://127.0.0.1:8000/admin/posts/3"
                                                                        title="View"
                                                                        class="btn btn-sm btn-warning pull-right view">
                                                                        <i class="voyager-eye"></i> <span
                                                                            class="hidden-xs hidden-sm">View</span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr role="row" class="even">
                                                                <td>
                                                                    <input type="checkbox" name="row_id" id="checkbox_4"
                                                                        value="4">
                                                                </td>
                                                                <td>
                                                                    <div>Yarr Post</div>
                                                                </td>
                                                                <td>
                                                                    <img src="http://127.0.0.1:8000/storage/posts/post4.jpg"
                                                                        style="width:100px">
                                                                </td>
                                                                <td>

                                                                    published

                                                                </td>
                                                                <td>
                                                                    2022-12-02 01:44:31
                                                                </td>
                                                                <td>
                                                                    <div></div>
                                                                </td>
                                                                <td>

                                                                </td>
                                                                <td class="no-sort no-click bread-actions">
                                                                    <a href="javascript:;" title="Delete"
                                                                        class="btn btn-sm btn-danger pull-right delete"
                                                                        data-id="4" id="delete-4">
                                                                        <i class="voyager-trash"></i> <span
                                                                            class="hidden-xs hidden-sm">Delete</span>
                                                                    </a>
                                                                    <a href="http://127.0.0.1:8000/admin/posts/4/edit"
                                                                        title="Edit"
                                                                        class="btn btn-sm btn-primary pull-right edit">
                                                                        <i class="voyager-edit"></i> <span
                                                                            class="hidden-xs hidden-sm">Edit</span>
                                                                    </a>
                                                                    <a href="http://127.0.0.1:8000/admin/posts/4"
                                                                        title="View"
                                                                        class="btn btn-sm btn-warning pull-right view">
                                                                        <i class="voyager-eye"></i> <span
                                                                            class="hidden-xs hidden-sm">View</span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="dataTables_info" id="dataTable_info" role="status"
                                                        aria-live="polite">Showing 1 to 4 of 4 entries</div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="dataTables_paginate paging_simple_numbers"
                                                        id="dataTable_paginate">
                                                        <ul class="pagination">
                                                            <li class="paginate_button previous disabled"
                                                                aria-controls="dataTable" tabindex="0"
                                                                id="dataTable_previous">
                                                                <a href="#">Previous</a>
                                                            </li>
                                                            <li class="paginate_button active" aria-controls="dataTable"
                                                                tabindex="0"><a href="#">1</a></li>
                                                            <li class="paginate_button next disabled"
                                                                aria-controls="dataTable" tabindex="0"
                                                                id="dataTable_next">
                                                                <a href="#">Next</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="modal modal-danger fade" tabindex="-1" id="delete_modal" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                        aria-hidden="true">×</span></button>
                                <h4 class="modal-title"><i class="voyager-trash"></i> Are you sure you want to delete
                                    this
                                    post?
                                </h4>
                            </div>
                            <div class="modal-footer">
                                <form action="#" id="delete_form" method="POST">
                                    <input type="hidden" name="_method" value="DELETE">
                                    <input type="hidden" name="_token" value="cfYSGPSE4zm3EzolVuh5WHjSxB9Zi1cHkKg8jVhA">
                                    <input type="submit" class="btn btn-danger pull-right delete-confirm"
                                        value="Yes, Delete it!">
                                </form>
                                <button type="button" class="btn btn-default pull-right"
                                    data-dismiss="modal">Cancel</button>
                            </div>
                        </div><!-- /.modal-content -->
                    </div><!-- /.modal-dialog -->
                </div><!-- /.modal -->
            </div>
        </template>
    </AdminMasterView>
</template>

<script>
require('@/assets/js/dataTable.js')
import { onMounted } from 'vue';
import AdminMasterView from '@/views/AdminMasterView.vue'

export default {
    components: { AdminMasterView },
    setup() {

        onMounted(() => {
            
        })

        return {
            onMounted
        }
    }
}
</script>

<style>

</style>
