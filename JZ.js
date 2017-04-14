var API = 'http://api3.yshfresh.com/api/ysh/';
var PIC_API = 'http://f.yshfresh.com';
var PRO_COUNT = 'ProductCount';
var PRO_LIST = 'ProductListInc';
var GET_SESSKEY = 'getSesskey';
var GET_PRO_CATE_LIST = 'CateGoryListInC';
var GET_USER_PIC = 'GetUserHeadPic';
var DEFAULT_HEAD_PIC = '/uploads/20160829/HqDmWl6j5qotmZvrfXG7R5UY.jpg';
var EXPLORER = '';




/*公共方法*/

/*数字前面加0*/
function leftpad(str, len, ch) {
  str = String(str);
  var i = -1;
  if (!ch && ch !== 0) ch = ' ';
  len = len - str.length;
  while (++i < len) {
    str = ch + str;
  }
  return str;
}

/*判断浏览器*/
function  getExplorer() { 
  if(EXPLORER.length > 0) {
    return EXPLORER;    
  }else{
    var explorer = window.navigator.userAgent;  
    //ie  
    if (explorer.indexOf("MSIE") >= 0 || (explorer.indexOf("Windows NT 6.1;") >= 0 && explorer.indexOf("Trident/7.0;") >= 0)) { 
        EXPLORER = 'ie'  
        return 'ie';    
    }    
    //firefox  
    else if (explorer.indexOf("Firefox") >= 0) { 
      EXPLORER = 'Firefox'   
      return 'Firefox';  
    }  
    //Chrome  
    else if(explorer.indexOf("Chrome") >= 0){  
      EXPLORER = 'Chrome'
      return 'Chrome';  
    }  
    //Opera  
    else if(explorer.indexOf("Opera") >= 0){ 
      EXPLORER = 'Opera' 
      return 'Opera';  
    }  
    //Safari  
    else if(explorer.indexOf("Safari") >= 0){
      EXPLORER = 'Safari'  
      return 'Safari';  
    }
  }    
} 


/*table导出excel*/
function tableToExcel(tableid) {
  if(getExplorer() === 'ie')  
  {  
    var curTbl = document.getElementById(tableid);  
    var oXL;  
    try{  
        oXL = new ActiveXObject("Excel.Application"); //创建AX对象excel  
    }catch(e){  
        alert("无法启动Excel!\n\n如果您确信您的电脑中已经安装了Excel，"+"那么请调整IE的安全级别。\n\n具体操作：\n\n"+"工具 → Internet选项 → 安全 → 自定义级别 → 对没有标记为安全的ActiveX进行初始化和脚本运行 → 启用");  
        return false;  
    }  
    var oWB = oXL.Workbooks.Add(); //获取workbook对象  
    var oSheet = oWB.ActiveSheet;//激活当前sheet  
    var sel = document.body.createTextRange();  
    sel.moveToElementText(curTbl); //把表格中的内容移到TextRange中  
    sel.select(); //全选TextRange中内容  
    sel.execCommand("Copy");//复制TextRange中内容  
    oSheet.Paste();//粘贴到活动的EXCEL中  
    oXL.Visible = true; //设置excel可见属性  
    var fname = oXL.Application.GetSaveAsFilename("将table导出到excel.xls", "Excel Spreadsheets (*.xls), *.xls");  
    oWB.SaveAs(fname);  
    oWB.Close();  
    oXL.Quit();  
  }  
  else  
  {  
    var table = document.getElementById(tableid)
    var ctx = {worksheet: 'Worksheet', table: table.innerHTML}
    var uri = 'data:application/vnd.ms-excel;base64,',  
        template = '<html><head><meta charset="UTF-8"></head><body><table>{table}</table></body></html>',  
        base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) },  
        format = function(s, c) {  
          return s.replace(/{(\w+)}/g,  function(m, p) { return c[p]; }) 
        }
    window.location.href = uri + base64(format(template, ctx))
  }   
}

function log(str) {
  console.log(str)
}

function serverError() {
  errorMsg.call(this, '服务器出错')
}

function errorMsg(str) {
  this.$message({type: 'error', message: str});
}

function infoMsg(str) {
  this.$message({type: 'info', message: str});
}

function scsMsg(str) {
  this.$message({type: 'success', message: str});
}

function loading() {
  this.$store.dispatch('show_loading')        
}

function closeLoading() {
  // console.log(12222222222222222222)
  this.$store.dispatch('hide_loading')
}
  


