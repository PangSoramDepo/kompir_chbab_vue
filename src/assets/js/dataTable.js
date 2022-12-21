$(document).ready(function () {
    var table = $('#dataTable').DataTable({ "order": [], "language": { "sEmptyTable": "No data available in table", "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries", "sInfoEmpty": "Showing 0 to 0 of 0 entries", "sInfoFiltered": "(filtered from _MAX_ total entries)", "sInfoPostFix": "", "sInfoThousands": ",", "sLengthMenu": "Show _MENU_ entries", "sLoadingRecords": "Loading...", "sProcessing": "Processing...", "sSearch": "Search:", "sZeroRecords": "No matching records found", "oPaginate": { "sFirst": "First", "sLast": "Last", "sNext": "Next", "sPrevious": "Previous" }, "oAria": { "sSortAscending": ": activate to sort column ascending", "sSortDescending": ": activate to sort column descending" } }, "columnDefs": [{ "targets": "dt-not-orderable", "searchable": false, "orderable": false }] });

    $('.select_all').on('click', function (e) {
        $('input[name="row_id"]').prop('checked', $(this).prop('checked')).trigger('change');
    });
});


var deleteFormAction;
$('td').on('click', '.delete', function (e) {
    $('#delete_form')[0].action = 'http://127.0.0.1:8000/admin/posts/__id'.replace('__id', $(this).data('id'));
    $('#delete_modal').modal('show');
});

$('input[name="row_id"]').on('change', function () {
    var ids = [];
    $('input[name="row_id"]').each(function () {
        if ($(this).is(':checked')) {
            ids.push($(this).val());
        }
    });
    $('.selected_ids').val(ids);
});