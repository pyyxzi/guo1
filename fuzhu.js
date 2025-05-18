function Showbox(canshu){
$(canshu).css("display","block");
}

function CloseBox(canshu)
{
    $(canshu).css("display","none");
    if(canshu=='.Jfchoubox')
    {
        $(".xyznum").removeClass("xyznumON")
        $(".xyznum").removeClass("xyznumdhua")
    }
}

// UI显示/隐藏状态
var uiVisible = true;

// 显示/隐藏UI元素
function Xsycycbtn() {
    if (uiVisible) {
        // 隐藏UI元素
        $(".jfbuzubox, .rysjbox, .rysjdh, .dqbuzubox, .buyJfbox, .buyjfcgbox, .Jfchoubox, .Jlibox, .Jlibox5, .czbox, .czzhezhao, .czload2, .czcgbox").css("display", "none");
        $(".jf_cjbtn, .fivebtn, .rysdbtn, .add_money, .numbox").css("opacity", "0");
        // 修改状态
        uiVisible = false;
        AddTopTip("UI已隐藏");
    } else {
        // 显示UI元素
        $(".jf_cjbtn, .fivebtn, .rysdbtn, .add_money, .numbox").css("opacity", "1");
        // 修改状态
        uiVisible = true;
        AddTopTip("UI已显示");
    }
}

// 顶部提示
function AddTopTip(text) {
    var tipHtml = '<div class="toptip">' + text + '</div>';
    $("body").append(tipHtml);
    
    setTimeout(function() {
        $(".toptip").addClass("toptip-show");
    }, 10);
    
    setTimeout(function() {
        $(".toptip").removeClass("toptip-show");
        setTimeout(function() {
            $(".toptip").remove();
        }, 300);
    }, 2000);
}

// 切换设置选项卡
function switchSettingsTab(tab) {
    // 切换导航项目的激活状态
    $('.nav-item').removeClass('active');
    $('.nav-item').each(function() {
        if ($(this).text().toLowerCase().includes(tab === 'basic' ? '基础' : '概率')) {
            $(this).addClass('active');
        }
    });
    
    // 切换内容区域的显示
    $('.settings-content').removeClass('active');
    if (tab === 'basic') {
        $('#basic-settings').addClass('active');
    } else {
        $('#prob-settings').addClass('active');
    }
}

