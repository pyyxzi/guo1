var jfnum = 0;
// 积分数量
var zsnum = 0;
//钻石数量
var mnnum = 99999;
//点券数量
var jbnum = 0;
//金币数量
var xyznum = 0;
//幸运值
var sjnum = 0;


var CznumArr = [1, 6, 18, 30, 68, 118, 198, 348, 648, 898, 1298];
//充值数额数组
var jfvdtimeArr = [1160, 1120, 1120, 6190]
var jfwlvdtimeArr = [7000, 9200]
//积分抽奖视频时长数组
var Jlisz = [
    ["荣耀水晶", 0.02, false],
    ["冰冠公主", 0.2, false],
    ["幻想奇妙夜", 0.2, false],
    ["钟馗", 0.4, false],
    ["司马懿", 0.4, false],
    ["幸运夺宝自选礼包", 4, false],
    ["皮肤碎片", 4, false],
    ["英雄碎片", 6, false],
    ["铭文碎片", 0.2, false],
    ["战令币", 5.6, false],
    ["荣耀战令100经验礼包", 20, false],
    ["荣耀战令100经验礼包", 30, false],
    ["浓情玫瑰", 10, false],
    ["钻石", 18.98, false]
]

var gailvarr = [['荣耀水晶', 0, 2],
['冰冠公主', 2, 22],
['幻想奇妙夜', 22, 42],
['钟馗', 42, 82],
['司马懿', 82, 122],
['幸运夺宝自选礼包', 122, 522],
['皮肤碎片', 522, 922],
['英雄碎片', 922, 1522],
['铭文碎片', 1522, 1542],
['战令币', 1542, 2102],
['荣耀战令100经验礼包', 2102, 4102],
['荣耀战令100经验礼包', 4102, 7102],
['浓情玫瑰', 7102, 8102],
['钻石', 8102, 10000]]

var gaigailvbool = true;
Tiaodagailv()
//开发者调试概率
var sgbb = false;
var sgtk = false;

var gailvArr = Jlisz;
//定义可修改概率,且初始化。
var gailvnum = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0],
[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0][0, 0],];
//定义（初始化）概率范围数组
function ResetGailv() {
    var restgl = [
        ["荣耀水晶", 0.02, false],
        ["冰冠公主", 0.2, false],
        ["幻想奇妙夜", 0.2, false],
        ["钟馗", 0.4, false],
        ["司马懿", 0.4, false],
        ["幸运夺宝自选礼包", 4, false],
        ["皮肤碎片", 4, false],
        ["英雄碎片", 6, false],
        ["铭文碎片", 0.2, false],
        ["战令币", 5.6, false],
        ["荣耀战令100经验礼包", 20, false],
        ["荣耀战令100经验礼包", 30, false],
        ["浓情玫瑰", 10, false],
        ["钻石", 18.98, false]
    ];

    for (let index = 0; index < restgl.length; index++) {
        gailvArr[index][0] = restgl[index][0];
        gailvArr[index][1] = restgl[index][1];

    }

    SetGailv();
    $("#gailvtip").text("已重置");
    $("#gailvtip").css("color", "rgba(255, 91, 91,1)");
    setTimeout(() => {
        $("#gailvtip").css("color", "rgba(255, 91, 91,0)");
    }, 2000);

}
function ChangeGailv() {
    for (i = 0; i < gailvArr.length; i++) {
        gailvArr[i][0] = $("#Xgname" + i).val();
        gailvArr[i][1] = $("#Xggl" + i).val() * 1;

    }

    SetGailv();
    $("#gailvtip").text("已设置");
    $("#gailvtip").css("color", "rgba(255, 91, 91,1)");
    setTimeout(() => {
        $("#gailvtip").css("color", "rgba(255, 91, 91,0)");
    }, 2000);

}

SetGailv();
var empsz = [0, 0];
//定义空概率范围数组
function SetGailv() {
    for (i = 0; i < gailvArr.length; i++) {
        $("#Xgname" + i).val(gailvArr[i][0]);
        $("#Xggl" + i).val(gailvArr[i][1]);
        if (i == 0) {
            empsz = [1, gailvArr[0][1] * 100];
            gailvnum[i] = empsz;
        }
        else {
            empsz = [gailvnum[i - 1][1] + 1, gailvnum[i - 1][1] + gailvArr[i][1] * 100];
            gailvnum[i] = empsz;
        }
    }

    console.log(gailvnum)
}


function GetJliid() {
    var sjs = Math.floor(Math.random() * 10000);
    var thej = 0;
    if (xyznum > 359) {
        return 0;
    }
    for (let index = 0; index < gailvarr.length; index++) {
        var zds = gailvnum[index][1];
        var zxs = gailvnum[index][0];
        console.log("sjs:" + sjs + "  大:" + zds + " 小：" + zxs)
        if (sjs > zxs && sjs <= zds) {
            thej = index;

        }
    }
    if (thej < 5 && Jlisz[thej][2]) {
        return GetJliid();
    }
    else {
        if (thej < 5 && Jlisz[thej][2] == false) {
            Jlisz[thej][2] = true;
        }
        return thej;
    }
}

function ShowGailv() {
    for (let index = 0; index < Jlisz.length; index++) {
        $("#Xgname" + index).val(Jlisz[index][0]);
        $("#Xggl" + index).val(Jlisz[index][1]);
    }
}

function Tiaodagailv() {
    if (gaigailvbool) {
        for (let index = 0; index < 11; index++) {

            $("#Xggl" + index).val(3);

        }
    }

}
function sdjsajd() {
    var jlstr = ""
    var iopp = 0;

    for (let index = 0; index < Jlisz.length; index++) {
        var sdwqadsa = iopp + Jlisz[index][1] * 100

        var thstr = "['" + Jlisz[index][0] + "'," + iopp + "," + sdwqadsa + "],\n"
        jlstr = jlstr + thstr;
        iopp = sdwqadsa;
    }
    console.log(jlstr)
}
var opboxnum = 0;

var opboxboolArr = [[5, 0], [15, 0], [35, 0], [65, 0], [125, 0]];
//开箱次数奖励bool 0=未解锁 1=已解锁，未领取 2=已领取；
function Sxsj() {
    $(".text_jf").text(jfnum);
    $(".text_jb").text(jbnum);
    $(".text_zs").text(zsnum);
    $(".text_mn").text(mnnum);
    $(".text_sjsl").text(sjnum);
    $(".boxnum").text(opboxnum);
    $(".jdredpoint").css("display", "none")
    if (opboxnum < 6) { $(".maxboxnum").text(5) }
    if (opboxnum > 6) { $(".maxboxnum").text(15) }
    if (opboxnum > 15) { $(".maxboxnum").text(35) }
    if (opboxnum > 35) { $(".maxboxnum").text(65) }
    if (opboxnum > 65) { $(".maxboxnum").text(125) }
    for (let index = 0; index < opboxboolArr.length; index++) {
        if (opboxnum >= opboxboolArr[index][0] && opboxboolArr[index][1] == 0) {
            opboxboolArr[index][1] = 1;
        }
    }
    for (let index2 = 0; index2 < opboxboolArr.length; index2++) {
        if (opboxboolArr[index2][1] == 1) {
            $(".jdredpoint").css("display", "block")

        }

    }
    if (xyznum >= 100) { var xyzsz = xyznum }
    if (xyznum < 100) { var xyzsz = "0" + xyznum }
    if (xyznum < 10) { var xyzsz = "00" + xyznum }


    $(".xyznum").text(xyzsz);

    $("#xyzip").val(xyznum);
    $("#jfip").val(jfnum);
    $("#jbip").val(jbnum);
    $("#zsip").val(zsnum);
    $("#mnip").val(mnnum);
    $("#sjip").val(sjnum);
    $("#xfip").val(yixiaofei)
    ShowGailv()
    Showvip();
}
//刷新数据方法
function SaveMoney() { mnnum = parseInt($("#mnip").val()); Sxsj() }
function SaveJf() { jfnum = parseInt($("#jfip").val()); Sxsj() }
function Savejb() { jbnum = $("#jbip").val(); Sxsj() }
function Savezs() { zsnum = $("#zsip").val(); Sxsj() }
function Savexyz() { xyznum = parseInt($("#xyzip").val()); Sxsj() }
function Saverysj() { sjnum = parseInt($("#sjip").val()); Sxsj() }
function SaveVip(){ yixiaofei=parseInt($("#xfip").val()); Sxsj();Showvip()}
var dqcznum = 0;
function ShowChongzhi(czid) {
    czid = czid + 1;
    dqcznum = CznumArr[czid];
    ShowCzzhezhao();
    $(".czmoney").text(dqcznum)
}
//打开充值方法
function ShowCzzhezhao() {
    $(".fukuanbg1").removeClass("fkloaddha");
    Showbox(".czzhezhao");
    $(".czzhezhao").addClass("czzhezhaodh");
    Showbox(".czaqimg")
    setTimeout(function () {
        CloseBox(".czaqimg")
        Showbox(".fukuanbg1")
    }, 200)
}
//打开充值遮罩
function wepay() {
    CloseBox(".fukuanbg1");
    Showbox(".sysmzf")
}
//打开微信支付
function Jixucz() {
    CloseBox(".sysmzf");
    $(".fukuanbg1").addClass("fkloaddha");
    Showbox(".fukuanbg1");
    setTimeout(function () {
        CloseBox(".fukuanbg1");
        Showbox(".czewm");
    }, 700)
}
//确认继续支付
function Czcg() {
    mnnum = mnnum + dqcznum * 10;
    CloseBox(".czewm");
    Showbox(".czload2");
    setTimeout(function () {
        CloseBox(".czload2");
        Showbox(".czcgbox");

        setTimeout(function () {
            Sxsj();
        }, 1500)
    }, 200)
}
//支付成功
var Choucishu = 0;
function JfChou(chounum) {
    // 播放抽奖音效
    let audio = new Audio('music.mp3');
    audio.play();
    
    Choucishu = chounum
    if (chounum == 1) {
        if (jfnum < 60) {
            Showbox('.jfbuzubox')
        }
        else {
            Choucishu = chounum;
            dchouing = true;
            ChangeChouvd();
        }
    }

    if (chounum == 5) {
        if (jfnum < 270) {
            Showbox('.jfbuzubox')
        }
        else {
            dchouing = false;
            Choucishu = chounum;
            ChangeChouvd();
        }
    }
}
//抽奖函数

var Beginchoubool = false;
function BeginChou() {
    if (Beginchoubool) { return; }
    if (Choucishu == 1) {
jfnum=jfnum-60;
        Beginchoubool = true;
        $("html").css("cursor", "none");
        var sjs = Math.floor(Math.random() * jfvdtimeArr.length);
        $("#jfchoubgvd").attr("src", "vd/chou/jfchou" + sjs + ".mp4");
        setTimeout(function () {
            $(".xyznum").addClass("xyznumON")
            $(".xyznum").removeClass("xyznumdhua")
        }, 100)
        setTimeout(function () {
            $("html").css("cursor", "url('img/cr.png'),default");
            Showdcjl();
            Beginchoubool = false;
            // $("#jfchoubgvd").attr("src","vd/jf_choudh.mp4");
        }, jfvdtimeArr[sjs])

        if (dchouing) {
            return;
        }
        //$("#jfchoubgvd").attr("src","vd/jf_choudh.mp4");
    }
    else {
        jfnum=jfnum-270;
        Beginchoubool = true;
        $("html").css("cursor", "none");
        var sjs = Math.floor(Math.random() * jfwlvdtimeArr.length);
        $("#jfchoubgvd").attr("src", "vd/chou/wlcjf" + sjs + ".mp4");
        setTimeout(function () {
            $(".xyznum").addClass("xyznumON")
            $(".xyznum").removeClass("xyznumdhua")
        }, 100)
        setTimeout(function () {
            $("html").css("cursor", "url('img/cr.png'),default");
            Wuliandh()
            Beginchoubool = false;
            // $("#jfchoubgvd").attr("src","vd/jf_choudh.mp4");

        }, jfwlvdtimeArr[sjs])
        console.log(jfwlvdtimeArr[sjs])
    }
}

function sdbsajw() {

    setTimeout(function () {
        if (Choucishu == 1) {
            Showdcjl()
            if (dchouing) {
                return;
            }

        }
    }, jfvdtimeArr[sjs])


}

var Cjmode = 1;
function Showdcjl() {
    xyznum = xyznum + 1;
    opboxnum = opboxnum + 1;
    chouWay = 1;
    var j = GetJliid();
    if (j == 0) { sjnum = sjnum + 1; xyznum = 0; opboxnum = 0; Jlisz[0][2] = false; }
    $("#wljltextdc").text(Jlisz[j][0]);
    if (j <= 4) { var houzhui = ".gif" } else { var houzhui = ".png" }
    $("#dcimg").attr("src", "img/jl/" + j + houzhui)
    CloseBox(".Jfchoubox")
    $('.xyznum').removeClass('xyznumdhua')
    $(".Jlibox").css("background-image", "url('img/dctipbg0.png')")
    Showbox('.Jlibox');
    if (j == 0) {
        Showbox('.rysjbox')
        setTimeout(function () {
            $("#sjbg").attr("src", "vd/sjbg2.mp4");
        }, 3150)
        return;
    }
    setTimeout(function () {
        $(".Jlibox").css("background-image", "url('img/dctipbg1.png')")
    }, 100)
    $(".Dcshine").css("display", "block");
    $(".Dcshine").attr("src", "img/jlLight.gif");
    $("#jltipbgvd").attr("src", "vd/jltip0.mp4")
    Sxsj()
    setTimeout(function () {
        dchouing = false;

        $("#jltipbgvd").attr("src", "vd/jltip1.mp4")
        setTimeout(function () {
            CloseBox(".Dcshine")
        }, 250)
    }, 800)
}


function ChangeChouvd() {
    $(".Jfchoubox").css("background-image", "url('img/jf_choubg0.png')")
    Showbox('.Jfchoubox');
    $(".xyznum").addClass("xyznumdhua")
    $("#jfchoubgvd").attr("src", "vd/jfdb_begin.mp4");

    setTimeout(function () {
        if (Beginchoubool == false) {
            $(".Jfchoubox").css("background-image", "url('img/jf_choubg.png')")
        }
    }, 1000)
    setTimeout(function () {
        if (Beginchoubool == false) {
            $("#jfchoubgvd").attr("src", "vd/jf_choudh.mp4");
        }
    }, 2100)
}
//切换抽奖界面

var buyjfnum = 1;
var buyjfmnnum = 60;
//默认购买积分数量1份
function openBuyjf() {
    buyjfnum = 1;
    CloseBox('.jfbuzubox');
    Showbox('.buyJfbox');
    $(".buyjftipbox").removeClass("showTipdh");
    $(".buyjftipbox").addClass("showTipdh");
    ShowBuyjf();
}

function ShowBuyjf() {

    if (buyjfnum == 1) {
        CloseBox('.jiande_btn');
    }
    else {
        Showbox(".jiande_btn");
    }
    if (buyjfnum == 100) {
        CloseBox('.jia_btn');
    }
    else {
        Showbox(".jia_btn");
    }
    buyjfmnnum = buyjfnum * 60;
    $(".jfaddnum").text(buyjfnum);
    $(".Buyjfmnnum").text(buyjfmnnum);
    var slidepx = (buyjfnum - 1) * 1.32;
    $(".jf_slide").css("margin-left", slidepx + "px");
    $(".jf_slidetiao").css("width", (slidepx + 10) + "px");


}

function AddBuyjfnum(addnum) {
    buyjfnum = buyjfnum + addnum;
    if (buyjfnum < 1) { buyjfnum = 1; }
    if (buyjfnum > 100) { buyjfnum = 100; }
    ShowBuyjf()

}



// 购买积分拖动条部分

$(function () {
    var ylaiwz = 0; var tag = false; var ox = 0; var slleft;
    $('.progress_btn').mousedown(function (e) {
        ylaiwz = e.pageX - 232;

        if (ylaiwz < 1) {
            ylaiwz = 1;
        }
        ox = e.pageX - ylaiwz;
        console.log(ylaiwz);
        tag = true;
    });
    $(document).mouseup(function () {
        tag = false;
    });
    $('.progress').mousemove(function (e) {//鼠标移动
        if (tag) {
            slleft = e.pageX - ox;
            if (slleft <= 2) {
                slleft = 2;
            } else if (slleft > 132) {
                slleft = 132;
            }
            buyjfnum = parseInt((slleft / 132) * 100);
            if (buyjfmnnum < 1) {
                buyjfmnnum = 1;
            }
            ShowBuyjf()
        }
    });

});


// 购买积分拖动条部分

function BuyJf() {
    if (mnnum >= buyjfmnnum) {
        mnnum = mnnum - buyjfmnnum;
        jfnum = jfnum + buyjfmnnum;
        yixiaofei = yixiaofei + buyjfmnnum;
        Sxsj();
        Showbox('.buyjfcgbox');
        CloseBox('.buyJfbox');
        $(".jfgmcgtext1").text(buyjfnum);
        $(".jfgmcgtext2").text(buyjfmnnum);
        $("#buyjfcgvd").attr("src", "vd/buyjfcg.mp4")
    }
    else {
        CloseBox('.buyJfbox');
        Showbox('.dqbuzubox')
    }
}
//购买积分方法

function Wuliandh() {
    chouWay = 5;
    xyznum = xyznum + 5;
    opboxnum = opboxnum + 5;
    $(".Jlibox5").css("background-image", "url('img/dctipbg0.png')")
    CloseBox(".Jfchoubox")
    Showbox(".Jlibox5")

    setTimeout(function () {
        $(".Jlibox5").css("background-image", "url('img/dctipbg1.png')")
    }, 100)
    $("#jltipbgvd5").attr("src", "vd/jltip0.mp4")
    setTimeout(function () {
        $("#jltipbgvd5").attr("src", "vd/jltip1.mp4")
    }, 250)
    for (let index = 0; index < 5; index++) {
        var j = GetJliid();
        if (j == 0) { sjnum = sjnum + 1; xyznum = 0; opboxnum = 0; Jlisz[0][2] = false; }
        $("#wljltext" + index).text(Jlisz[j][0])
        if (j <= 4) { var houzhui = ".gif" } else { var houzhui = ".png" }
        $("#wljlimg" + index).attr("src", "img/jl/" + j + houzhui);

        if (j == 0) {
            Showbox('.rysjbox')
            setTimeout(function () {
                $("#sjbg").attr("src", "vd/sjbg2.mp4");
            }, 3150)
            return;
        }

    }

    $(".fivejlli").css("display", "none");
    $(".jlimgbox5l").removeClass("wlsxdh");
    wuliandhid = 0
    Sxsj();
    Wldh()
}
function ShutJldh() {
    if (chouWay == 5) {
        CloseBox('.rysjbox')
        $(".fivejlli").css("display", "none");
        $(".jlimgbox5l").removeClass("wlsxdh");
        wuliandhid = 0
        Sxsj();
        Wldh()
    }
    else {
        CloseBox('.rysjbox');
        setTimeout(function () {
            $(".Jlibox").css("background-image", "url('img/dctipbg1.png')")
        }, 100)
        $(".Dcshine").css("display", "block");
        $(".Dcshine").attr("src", "img/jlLight.gif");
        $("#jltipbgvd").attr("src", "vd/jltip0.mp4")
        Sxsj()
        setTimeout(function () {
            dchouing = false;

            $("#jltipbgvd").attr("src", "vd/jltip1.mp4")
            setTimeout(function () {
                CloseBox(".Dcshine")
            }, 250)
        }, 800)
    }
}
var wuliandhid = 0;
function Wldh() {

    $(".jlimgbox5l").removeClass("wlsxdh");
    if (wuliandhid <= 4) {
        Showbox("#fivejlli" + wuliandhid);
        $("#jlwlimgbox" + wuliandhid).addClass("wlsxdh");

        setTimeout(function () {
            //  $("#Wlshine"+wuliandhid).attr("src","img/jlLight.gif")
            //  $("#Wlshine"+wuliandhid).addClass("Wlshinedh");

            wuliandhid = wuliandhid + 1;
            Wldh();
        }, 200)
    }
}


var chouWay = 1;
function zm1ci() {
    if (chouWay == 1) {
        if (jfnum < 60) {
            Showbox('.jfbuzubox')
        }
        else {
            CloseBox('.Jlibox');
            Showbox('.Jfchoubox');
            $(".xyznum").addClass('xyznumON');
            $("#jfchoubgvd").attr("src", "vd/tgdh_dc.mp4");
            setTimeout(function () {
                Showdcjl();
            }, 1050)
        }
    }
    else {
        if (jfnum < 270) {
            Showbox('.jfbuzubox')
        }
        else {
            CloseBox('.Jlibox5');
            Showbox('.Jfchoubox');
            $(".xyznum").addClass('xyznumON');
            $("#jfchoubgvd").attr("src", "vd/tgdh_wl.mp4");
            setTimeout(function () {
                Wuliandh()
            }, 1000)
        }
    }
}

var yixiaofei = 0;
var Vipmnarr = [10, 100, 500, 2000, 5000, 10000, 20000, 50000, 100000, 188880];
var Viparr = [
    [0, 0, 0, true],
    [1, 0, 10, true],
    [2, 10, 100, true],
    [3, 100, 500, true],
    [4, 500, 2000, true],
    [5, 2000, 5000, true],
    [6, 5000, 10000, true],
    [7, 10000, 20000, true],
    [8, 20000, 50000, true],
    [9, 50000, 100000, true],
    [10, 100000, 188880, true]];

    function Setvip(){
        var j=0;
        if(yixiaofei==0){return 0;}
        for (let index = 0; index < Viparr.length; index++) {
            var zds = Viparr[index][2];
            var zxs = Viparr[index][1];
            if (yixiaofei > zxs-1 && yixiaofei <= zds) {
                j = index;
    
            }
        }
        
        return j;
    }

function Showvip(){
    var viplevel=Setvip()-1;
    $(".czviplog").attr("src","img/vip/"+Viparr[viplevel][0]+".png");
    var chadssj=Viparr[viplevel+1][2]-yixiaofei;
    $(".chadssj").text(chadssj)
    $(".guizuxj").text(Viparr[viplevel+1][0]);
    var juli=Viparr[viplevel+1][2]-Viparr[viplevel+1][1];
    var jdt=(juli-chadssj)/juli*100;
    console.log(jdt)
    $(".vipjdt").css("width",jdt+"%");
}