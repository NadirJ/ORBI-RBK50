function click_backup(){document.forms[0].action="/backup.cgi?/BAK_backup.htm timestamp="+ts;document.forms[0].submit()}function check_restore(){cf=document.forms[0];if(cf.mtenRestoreCfg.value.length==0){alert("$filename_null");return false}var a=cf.mtenRestoreCfg.value;var b=a.substr(a.lastIndexOf(".")+1);if(b!="cfg"){alert("$not_correct_file"+("cfg").toString());return false}if(confirm("$ask_for_restore")){cf.action="/restore.cgi?/restore_process.htm timestamp="+ts;top_left_nolink();top.enable_action=0;cf.submit()}else{return false}}function click_yesfactory(){cf=document.forms[0];cf.action="/apply.cgi?/pls_wait_factory_reboot.html timestamp="+ts;top_left_nolink();top.enable_action=0;cf.submit()};