$(document).ready(function () {
    $("#userTable").DataTable({
        ordering: true,
        searching: false,
        lengthChange: false,
        oLanguage: {
            sInfo: "<div class=\"text-center\">_START_ - _END_ OF _TOTAL_</div>",
        },
        pagingType: "simple",
        language: {
            paginate: {
                previous: "PREVIOUS",
                next: "NEXT"
            }
        }
    });
    $(".checkbox").click(function () {
        var checkboxList = [];
        $("input[type='checkbox']:checked").each(function () {
            if (checkboxList.indexOf($(this).val()) != -1) {
                checkboxList.pop($(this).val());
                showBottom(checkboxList.length);
            } else {
                checkboxList.push($(this).val());
                showBottom(checkboxList.length);
            }
        })
    });
    function showBottom(totalSelected) {
        if (totalSelected > 0) {
            $(".bulk-container").addClass("show");
        } else {
            $(".bulk-container").removeClass("show");
        }
        $("#totalSelected").html(totalSelected);
        console.log("Total selected: " + totalSelected);
    }
});
function showModal() {
    if ($(".backdrop").css("display") == "none") {
        $(".backdrop").show();
    } else {
        $(".backdrop").hide();
    }
}
function hideShowMenu() {
    if ($(".aside").css("display") == "none") {
        $(".aside").show();
    } else {
        $(".aside").hide();
    }
}