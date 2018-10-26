Search.setIndex({docnames:["application","background","changelog","container","dqpkg","image","index","log","networks","preference","qnet","resource","system","volumes"],envversion:50,filenames:["application.rst","background.rst","changelog.rst","container.rst","dqpkg.rst","image.rst","index.rst","log.rst","networks.rst","preference.rst","qnet.rst","resource.rst","system.rst","volumes.rst"],objects:{"":{"/api/v1/apps":[0,0,1,"get--api-v1-apps"],"/api/v1/apps/(string:name)":[0,0,1,"get--api-v1-apps-(string-name)"],"/api/v1/apps/(string:name)/kill":[0,2,1,"put--api-v1-apps-(string-name)-kill"],"/api/v1/apps/(string:name)/restart":[0,2,1,"put--api-v1-apps-(string-name)-restart"],"/api/v1/apps/(string:name)/start":[0,2,1,"put--api-v1-apps-(string-name)-start"],"/api/v1/apps/(string:name)/stop":[0,2,1,"put--api-v1-apps-(string-name)-stop"],"/api/v1/background/":[1,0,1,"get--api-v1-background-"],"/api/v1/background/(string:category)":[1,3,1,"post--api-v1-background-(string-category)"],"/api/v1/background/(string:task_id)":[1,1,1,"delete--api-v1-background-(string-task_id)"],"/api/v1/background/application":[1,3,1,"post--api-v1-background-application"],"/api/v1/background/application_upgrade":[1,3,1,"post--api-v1-background-application_upgrade"],"/api/v1/background/container_export":[1,3,1,"post--api-v1-background-container_export"],"/api/v1/background/container_import":[1,3,1,"post--api-v1-background-container_import"],"/api/v1/background/create":[1,3,1,"post--api-v1-background-create"],"/api/v1/background/image_download":[1,3,1,"post--api-v1-background-image_download"],"/api/v1/background/image_export":[1,3,1,"post--api-v1-background-image_export"],"/api/v1/background/image_push":[1,3,1,"post--api-v1-background-image_push"],"/api/v1/background/image_remove":[1,3,1,"post--api-v1-background-image_remove"],"/api/v1/container":[3,3,1,"post--api-v1-container"],"/api/v1/container/(string:container_type)/(string:container_id)":[3,0,1,"get--api-v1-container-(string-container_type)-(string-container_id)"],"/api/v1/container/(string:container_type)/(string:container_id)/all":[11,0,1,"get--api-v1-container-(string-container_type)-(string-container_id)-all"],"/api/v1/container/(string:container_type)/(string:container_id)/autostart/(string:state)":[11,2,1,"put--api-v1-container-(string-container_type)-(string-container_id)-autostart-(string-state)"],"/api/v1/container/(string:container_type)/(string:container_id)/inspect":[3,0,1,"get--api-v1-container-(string-container_type)-(string-container_id)-inspect"],"/api/v1/container/(string:container_type)/(string:container_id)/logs":[3,0,1,"get--api-v1-container-(string-container_type)-(string-container_id)-logs"],"/api/v1/container/(string:container_type)/(string:container_id)/network/port":[11,3,1,"post--api-v1-container-(string-container_type)-(string-container_id)-network-port"],"/api/v1/container/(string:container_type)/(string:container_id)/network/ports":[11,3,1,"post--api-v1-container-(string-container_type)-(string-container_id)-network-ports"],"/api/v1/container/(string:container_type)/(string:container_id)/resource/device":[11,3,1,"post--api-v1-container-(string-container_type)-(string-container_id)-resource-device"],"/api/v1/container/(string:container_type)/(string:container_id)/resource/devices":[11,3,1,"post--api-v1-container-(string-container_type)-(string-container_id)-resource-devices"],"/api/v1/container/(string:container_type)/(string:container_id)/resource/limit":[11,3,1,"post--api-v1-container-(string-container_type)-(string-container_id)-resource-limit"],"/api/v1/container/(string:container_type)/(string:container_id)/restart":[3,2,1,"put--api-v1-container-(string-container_type)-(string-container_id)-restart"],"/api/v1/container/(string:container_type)/(string:container_id)/start":[3,2,1,"put--api-v1-container-(string-container_type)-(string-container_id)-start"],"/api/v1/container/(string:container_type)/(string:container_id)/stop":[3,2,1,"put--api-v1-container-(string-container_type)-(string-container_id)-stop"],"/api/v1/container/(string:container_type)/(string:container_id)/volume/host":[11,3,1,"post--api-v1-container-(string-container_type)-(string-container_id)-volume-host"],"/api/v1/event":[7,0,1,"get--api-v1-event"],"/api/v1/event/wait/(string:container_type)/(string:container_id)/(string:state)":[7,0,1,"get--api-v1-event-wait-(string-container_type)-(string-container_id)-(string-state)"],"/api/v1/image":[5,0,1,"get--api-v1-image"],"/api/v1/image/(string:image_name)/tags":[5,0,1,"get--api-v1-image-(string-image_name)-tags"],"/api/v1/image/(string:image_type)/(string:image_name)/(string:image_tag)/inspect":[5,0,1,"get--api-v1-image-(string-image_type)-(string-image_name)-(string-image_tag)-inspect"],"/api/v1/image/(string:repository)/(string:image_type)/(string:image_name)":[5,1,1,"delete--api-v1-image-(string-repository)-(string-image_type)-(string-image_name)"],"/api/v1/import/config":[3,0,1,"get--api-v1-import-config"],"/api/v1/log":[7,0,1,"get--api-v1-log"],"/api/v1/log/export":[7,0,1,"get--api-v1-log-export"],"/api/v1/login":[12,3,1,"post--api-v1-login"],"/api/v1/login_refresh":[12,0,1,"get--api-v1-login_refresh"],"/api/v1/logout":[12,2,1,"put--api-v1-logout"],"/api/v1/networks":[8,3,1,"post--api-v1-networks"],"/api/v1/networks/":[8,1,1,"delete--api-v1-networks-"],"/api/v1/networks/(string:network_id)":[8,0,1,"get--api-v1-networks-(string-network_id)"],"/api/v1/networks/(string:network_id)/connect":[8,3,1,"post--api-v1-networks-(string-network_id)-connect"],"/api/v1/networks/(string:network_id)/disconnect":[8,3,1,"post--api-v1-networks-(string-network_id)-disconnect"],"/api/v1/preference/":[9,0,1,"get--api-v1-preference-"],"/api/v1/preference/(string:key)":[9,2,1,"put--api-v1-preference-(string-key)"],"/api/v1/preference/network":[9,2,1,"put--api-v1-preference-network"],"/api/v1/preference/network_docker":[9,2,1,"put--api-v1-preference-network_docker"],"/api/v1/preference/repo":[9,2,1,"put--api-v1-preference-repo"],"/api/v1/proxypass":[0,3,1,"post--api-v1-proxypass"],"/api/v1/proxypass/(string:virtual_path)":[0,0,1,"get--api-v1-proxypass-(string-virtual_path)"],"/api/v1/registry":[5,3,1,"post--api-v1-registry"],"/api/v1/registry/ping":[5,0,1,"get--api-v1-registry-ping"],"/api/v1/registry/push":[5,0,1,"get--api-v1-registry-push"],"/api/v1/resource/device":[11,0,1,"get--api-v1-resource-device"],"/api/v1/sharefolder/":[12,0,1,"get--api-v1-sharefolder-"],"/api/v1/system":[12,0,1,"get--api-v1-system"],"/api/v1/system/bridge":[12,0,1,"get--api-v1-system-bridge"],"/api/v1/system/port/(string:protocol)/(string:port)":[12,0,1,"get--api-v1-system-port-(string-protocol)-(string-port)"],"/api/v1/system/report":[12,0,1,"get--api-v1-system-report"],"/api/v1/system/resource":[12,0,1,"get--api-v1-system-resource"],"/api/v1/template/(string:application)/wizard":[0,0,1,"get--api-v1-template-(string-application)-wizard"],"/api/v1/tls":[12,3,1,"post--api-v1-tls"],"/api/v1/tls/domain_names":[12,2,1,"put--api-v1-tls-domain_names"],"/api/v1/tls/export":[12,0,1,"get--api-v1-tls-export"],"/api/v1/tls/export/registry":[12,0,1,"get--api-v1-tls-export-registry"],"/api/v1/volumes":[13,0,1,"get--api-v1-volumes"],"/api/v1/volumes/":[13,1,1,"delete--api-v1-volumes-"],"/api/v1/volumes/(string:volume_name)":[13,3,1,"post--api-v1-volumes-(string-volume_name)"],"/api/v1/volumes/(string:volume_name)/inspect":[13,0,1,"get--api-v1-volumes-(string-volume_name)-inspect"],"/api/v1/wizard/workspace":[9,0,1,"get--api-v1-wizard-workspace"],"/api/v1/wizard/workspace/status":[9,0,1,"get--api-v1-wizard-workspace-status"],"download image":[5,3,1,"-"]}},objnames:{"0":["http","get","HTTP get"],"1":["http","delete","HTTP delete"],"2":["http","put","HTTP put"],"3":["http","post","HTTP post"]},objtypes:{"0":"http:get","1":"http:delete","2":"http:put","3":"http:post"},terms:{"00z":5,"01t00":5,"03940e9bd2a4":10,"04_20171130_amd64":[5,9],"04_20171130_armhf":[5,9],"04_20180208_arm64":[5,9],"04_20180212_armhf":[5,9],"04_20180808_arm64":[5,9],"090c1f21fefc845f5279be616f962136722252041438184cd04bbafe6139aafd":5,"0c02ce3d67186460dc9efb06fcb0d96092b84927d9b21358f2a4cd07c740eb61":8,"0dee85a03b81":7,"0dee85a03b81962b4a5fa8c48b29ab4c87a49bf38659e3a222c0ddd7cf6bf913":[3,8],"100m":13,"102645f1cf722254bbfb7135b524db45fbbac400e79e4d54266c000a5f5bc400":5,"11_x86_64":4,"1229f940eeb1":10,"12k":12,"16f756926078fa66ed64c0940ea4944e91d60b46483b28b241a28974dc3704b5":3,"19t00":5,"1beta":[5,9],"1de2febfecad":10,"20e65f20240db8246e1aada8067c53a870430b934865f393ef79aab06ab8a122":13,"20hub":5,"2146d867acf390370d4d0c7b51951551e0e91fb600b69dbc8922d531b05b12bc":5,"237354315z":3,"24k":12,"252248027z":3,"256733eb0ee45cf663b60bbbc2fc24ccf205d9fd8e145aff3215ee8c2a8bad2d":13,"26t07":3,"26t15":[8,13],"28a7fdb71f8":5,"28a7fdb71f8e8c20be3188992efc113dad17fcde13a2766c1c1dee2f556cd572":5,"29934af957c53004d7fb6340139880d23fb1952505a15d69a03af0d1418878cb":5,"29d24721b94bdbd10fdbf6b7236f953b94cdae0fac53cefe1f86ad808eadf358":3,"34d19c2b84e8513d522fad2e9a8052d09e4dd4156fdc7e8dbb8ae502325bd6c6":13,"351660813z":3,"40ghz":12,"512m":11,"553b3e366e8c":3,"553b3e366e8c8f4efcd66c81a8cac7cac1d9c0c06b1d3793606b9229cc90f2aa":3,"56842551833261e":3,"58118e89f3a912897c070adbf76221572c52609d":4,"5ivel":0,"631da16a3ba0999ecdeca65985c3d54c4442b151d2481335fea2346dceb4c295":13,"64m":[3,11],"64x64":4,"6_x86_64":4,"6cb7ae70aa4ea73a751f82995fc55b4594aff850345173e845b7b732909158cc":8,"726c4a444b0f":7,"726c4a444b0fba660006648f2669ea80b4a71c52815b8919e2007f1692d769d1":[3,7],"768m":[1,3],"76c033092e100f56899d7402823c5cb6ce345442b3382d7b240350ef4252187":5,"80x80":4,"84575283ea4a9977a2693b625f9ede2989279a050c24e737e896bc027d3cf235":13,"85fbe06a66d8":10,"85fbe06a66d82ba8109d304e1b891598d7c21e9f6c9a99a34f586250c7d8b92d":10,"878ad98c813b":10,"87c8f554b34e0fb832318a1abaa3eaf5c5f178fb6d75b507e0e750a237b5de05":13,"8af2e006fb70":7,"8af2e006fb70995c9d07e7e0acd1624a1a38b434831198cca510a48665eada4c":[3,7],"8gb":0,"908bf84bbd8844d7a40f17da228fb3ab8bd5dc81ad7234829fc91c09f9c78d79":13,"956524aeda64f7989595fd7a91c6363a6cbce922a3a3f33bbbf7fcb58a6552fa":8,"963343052z":5,"9e3b67877569":10,"9e3b67877569d6da0f5587c736c4981b3206c7f31bd22e7acdfe1a347e41122c":10,"\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac":4,"\u0440\u0443\u0441\u0441\u043a\u0438\u0439":4,"\u0e44\u0e17\u0e22":4,"\u4e39\u9ea5\u8a9e":4,"\u4fc4\u7f85\u65af\u8a9e":4,"\u5308\u7259\u5229\u8a9e":4,"\u571f\u8033\u5176\u8a9e":4,"\u5e0c\u81d8\u8a9e":4,"\u5fb7\u8a9e":4,"\u610f\u5927\u5229\u8a9e":4,"\u632a\u5a01\u8a9e":4,"\u6377\u514b\u8a9e":4,"\u65e5\u672c\u8a9e":4,"\u6cd5\u570b\u8a9e":4,"\u6ce2\u862d\u8a9e":4,"\u6cf0\u570b\u8a9e":4,"\u745e\u5178\u8a9e":4,"\u7b80\u4f53\u4e2d\u6587":4,"\u7e41\u9ad4\u4e2d\u6587":4,"\u7f85\u99ac\u5c3c\u4e9e\u8a9e":4,"\u82ac\u862d\u8a9e":4,"\u82f1\u6587":4,"\u8377\u862d\u8a9e":4,"\u8461\u8404\u7259\u8a9e":4,"\u897f\u73ed\u7259\u8a9e":4,"\u97d3\u8a9e":4,"\ud55c\uae00":4,"boolean":[0,1,3,4,5,9,11,12],"byte":10,"case":4,"class":4,"default":[0,1,3,4,7,8,10,12,13],"espa\u00f1ol":4,"export":[6,7,12],"final":[4,10],"float":3,"fran\u00e7ai":4,"function":[5,7,9],"import":[3,7],"int":[0,1,3,5,7,9,11,12],"new":[1,3,4,5,8,10,13],"null":[3,5,7,8,10,12,13],"portugu\u00ea":4,"public":[3,5,9,12,13],"return":[0,3,7,12],"rom\u00e2n":4,"short":4,"static":10,"switch":[10,12],"true":[0,1,3,4,5,7,8,9,11,12],"var":3,"while":[5,9],CHS:4,DNS:[3,9,12],Dns:3,For:[1,3,4,5,9],NAS:[3,5,6,10,12],NOT:4,Not:8,PCs:[5,9],QTS:[0,4,10],RUS:4,The:[0,1,4,5,8,9,11,12,13],Then:4,There:10,These:[4,13],Use:[4,10],Used:[0,12],Using:5,With:4,_116:11,_80:4,_blank:0,_data:13,_grai:4,a28961b050aa:7,a4af24dfe4329015e3adebbc169cbb04bb771f458167b41b07ebf98c882cce59:1,a5aff74309b0b76f5174fb0680b4ab622bcf876333e4f77504bcc5addd5ad1bd:8,aa770c8e26885f95355376df65ed9be65c6acc3cba9bee2539af934f25874b84:13,abort:7,about:4,access:[5,8,11],accord:4,account:[5,9],acm_usb_modems_:11,action:[5,7],activ:[5,9],adapt:12,add:[3,6,7,11],added:[4,10],addit:0,addr:10,address:[3,9,10,12],admin:[1,3,5,7,12],administr:12,adv:4,advanc:10,ae14e16b1bd6482b2e3deeefcf305849:9,ae1f631f14b7667ca37dca207c631d64947c60d923995cf0d73ceb1b08c406bb:5,after:[3,4,8,10,12],agnost:[5,9],ai_default:[5,9],ai_en:9,ai_mxnet:[5,9],ai_tensorflow:[5,9],alia:3,alias:3,all:[0,1,4,5,6,7,11],allow:[0,1,3,4,5,9,11],alpin:[4,5,9,10],alreadi:8,also:[1,5,9,10],amd64:[3,5,9,11,12],amqp:[5,9],anchor12:4,ani:[4,5,9],anonym:12,anoth:[3,10],any_str:4,apach:[4,5,9],api:[0,1,3,5,6,7,8,9,11,12,13],api_vers:[0,4],app:[0,4,5,9],app_choos:2,app_gitlab:[5,9],app_joomla:[5,9],app_odoo:[5,9],app_redmin:[5,9],app_registri:[5,9],app_releasenot:2,app_wordpress:[5,9],apparmorprofil:3,append:7,appli:4,applic:[4,5,6,7,9],application_upgrad:1,apt:[4,5,9],arch:[3,5,9,11],architectur:[5,9],archiv:3,arg:3,argsescap:5,argument:10,arm32v7:[5,9],arm64:[5,9],arm64v8:[5,9],arm:[5,9],armhf:[5,9],armv7l:12,around:[5,9],arrai:[1,3,4,5],assign:3,assist:[5,9],associ:[5,9],attach:[8,10],attachstderr:[3,5],attachstdin:[3,5],attachstdout:[3,5],attent:4,attribut:4,auth:5,authent:6,author:[4,5],auto:6,autom:[5,9],automat:[3,10,11],autoremov:3,autostart:[1,3,11],avail:[4,5,9,11],avoid:4,b66ca2459e2f22e0614aa803701cfc4cfe0ff92e3c7aecb12077025521879e5a:[3,8],b9bde73a2c83:7,back:6,background:[5,6,7],backup:[3,7],backup_concurr:9,balanc:4,bar:10,base:[3,4,5,9],bash:[3,4,5],basic:6,bcast:10,becaus:4,been:[1,5,12],befor:[4,5,11,12],begin:4,belong:10,below:[4,10],between:3,bff76bfb066076ee8cdd13916fe726296b23d37cdba55a6d14c1243cc6126747:[3,5],bin:[3,5],bind:[0,1,3,4,11],blkiodevicereadbp:3,blkiodevicereadiop:3,blkiodevicewritebp:3,blkiodevicewriteiop:3,blkioweight:3,blkioweightdevic:3,blog:[5,9],board:[5,9],bool:8,boot:5,both:[5,9],br0:12,branch:9,bridg:[3,8,9,10,12],brief:12,broadcast:10,browser:12,buffer:12,bug:3,build:[5,6,9],builder:[5,9],built:[4,5,9],busi:[5,9],busybox:[1,5,7,9],button:[4,10],bvlc:[5,9],cach:[3,4,12],cachedev1_data:[3,5,13],caff:[5,9],caffedemo:[5,9],calc:[5,9],call:[4,5,9],can:[1,4,10],cannot:[1,5,12],capabl:1,capadd:3,capdrop:3,carrier:10,cat:[3,10],categori:[1,5,7],caus:[5,9],center:4,cento:[5,9],centos_icon:[5,9],cert:5,cert_endd:9,cert_md5:9,cert_startd:9,certif:[5,6],cfg:4,cgroup:3,cgrouppar:3,ch_data_path:9,ch_statu:9,chang:[4,6],charact:4,check:[0,3,4,5,8,9,10,12],check_dupl:8,chines:[0,4],choos:10,chrome:[5,9],chs:0,cht:[0,4],cid:7,clear:7,click:[4,10],client:[5,8,9],clone:4,cmd:[3,5],cntk:[5,9],code:[5,8,9,10],cognit:[5,9],colinhuang:[5,9],collis:10,com:[0,1,2,3,4,5,7,8,9,12],combin:4,comma:7,command:[3,4,5,6,9],commander_amd64:[5,9],commander_armhf:[5,9],comment:5,common:[5,9],commun:[5,9],complet:[1,4,7],compos:[4,5,6,9],compress:[1,7],compris:4,condit:4,conf:[3,4],config:[0,3,4,5,8,10],configfrom:8,configonli:8,configur:[0,3,10],conflict:[3,5],connect:[4,5,6,7,9,10],consoles:3,contaienr:1,contain:[0,2,4,5,7,9,11,12,13],container_export:1,container_id:[3,7,11],container_import:1,container_port:4,container_typ:[3,7,11],containerconfig:5,containeridfil:3,containerst:[0,1,3,5,7,8,9,11,12,13],context:4,continu:4,control:12,convolut:[5,9],cooki:[0,1,3,5,7,8,9,11,12,13],core:[0,5,9,12],correctli:4,count:12,cpu:[0,3,5,6,9,12],cpu_usag:12,cpucor:12,cpucount:3,cpuperc:3,cpuperiod:3,cpuquota:3,cpurealtimeperiod:3,cpurealtimeruntim:3,cpusetcpu:3,cpusetmem:3,cpushar:3,cputhread:12,cputim:[1,3,11],cpuweight:[1,3,11],creat:[5,6,7,9,11,12],createdat:13,createfrom:0,cross:[5,9],css:4,csv:7,ctest:[1,3,7],cuda8:[5,9],cudnn6:[5,9],cultur:4,curl:[0,1,3,5,7,8,9,11,12,13],current:[4,8,9,13],custom:[0,1,3,8],customhostnam:[1,3],cze:[0,4],czech:[0,4],dac47d305ea06b4edc2e4df8526df396935ebd2886817993552d4e3be7627920:3,daemon:[3,8],damn:[5,9],dan:[0,4],danish:0,dansk:4,dash:[5,9],dashboard:[4,5,9],dashing_amd64:[5,9],dashing_armhf:[5,9],data:[1,3,4,5,9,12,13],data_path:9,databas:[3,5,9],date:[7,12],dead:3,deb:4,debian:[5,9],debian_icon:[5,9],deep:[5,9],default_bridg:8,definit:4,delet:[0,3,5,6,7,8,9,11,13],delug:[5,9],deluge_icon:[5,9],demo:[5,9],demonstr:4,depend:4,deploi:[5,9],depot:5,depth:4,deriv:3,describ:4,descript:[0,1,3,4,5,9],design:[5,9],desktop:[5,9,12],destin:3,destroi:7,detail:[1,4,8],detail_st:[1,5],determin:12,deutsch:[0,4],dev:[3,4,9],develop:[4,5,9],devic:[1,3,6,12,13],devicecgrouprul:3,dfd876f436ad9626580485a539f75d44baf3480127d4a68c4e336c67faa1e919:3,dhcp:[9,10],diagnosi:12,dialog:[4,10],die:7,differ:[0,4],digit:4,dili:4,direct_rendering_infrastructure_:11,directli:[4,13],directori:[3,4,12],disabl:[4,12],disableerrorst:4,disablesuccessst:4,disconnect:[6,7],diskquota:3,displai:[4,8,12],displaynam:[5,9],displaynamelow:5,distribut:[4,5,9],div:[0,4],dmisdani:[5,9],dns:3,dnsoption:3,dnssearch:3,doc:[0,4],doc_test:9,doc_test_network:8,doc_test_network_1:8,doc_test_network_2:8,docker0:9,docker:[0,1,3,5,6,7,8,9,11,12,13],docker_net_addr:9,docker_net_bridg:9,docker_net_dhcp_max:9,docker_net_dhcp_rang:9,docker_net_dns_primari:9,docker_net_dns_secondari:9,docker_net_netmask:9,docker_net_network:9,dockerhub:[1,5,7,9],dockerproject:4,dockertestapi2:[3,7],dockertestapi:[3,7],dockervers:[5,12],document:[0,5,9],domain_nam:12,domainnam:[3,5],done:[4,9],dorowu:[5,9],dot:4,down:10,download:[6,7,9],dqpkg:6,draw:[5,9],driver:[3,8,10,13],driver_opt:13,driveropt:3,drop:10,dtest:[1,3,7,8],duplic:8,durat:7,dure:[1,4],dut:[0,4],dutch:0,dynam:[5,9],e1369e8797ad:10,ea4c82dcd15a33e3e9c4c37050def20476856a08e59526fbe533cc4e98387e39:[3,5],easi:[5,9],easiest:4,easili:4,echo:4,ecommerc:[5,9],edit:[4,7,9,11],effect:4,effici:[5,9],either:[5,9],electron:[5,9],embed:[5,9],emerg:[5,9],empti:12,enabl:[4,5,8],enable_icc:8,enable_ip_masquerad:8,enableipv6:8,enabletrustcert:5,encap:10,end:[1,3,4,6,7],enddat:12,endpointid:[3,8],eng:[0,4],engin:[4,5,9],english:[0,4],enterpris:[5,9],entir:[5,9],entrypoint:[3,5],env:[3,5],environ:[3,4,5,9,10],epoch:[1,7],erp:[5,9],error:[1,3,4,5,7,8,10],esp8266:[5,9],essenti:6,etc:[3,4],eth0:[10,12],eth1:12,eth2:12,eth3:12,ethernet:[3,10],event:6,everyth:4,exampl:[0,1,3,5,6,7,8,9,10,11,12,13],execid:3,exist:[0,3,8,11],exit:[3,10],exitcod:3,explain:4,explan:4,expos:[3,4],expose_port:3,exposedport:3,express:4,express_amd64:5,extend:3,extern:8,extra:12,extrahost:3,f73957f7589dfdd944f64ef000b94e7f5f081b250b203c900cb57f23ee43f651:3,fail:4,fake_id:1,fals:[1,3,5,7,8,11,12],fast:[5,9],featur:[5,9,12],fedora:[5,9],fedora_icon:[5,9],feed:[5,9],fetch:6,few:[0,4,5],field:[4,8,10],fieldhtmlclass:4,fieldset:4,file:[0,1,3,6,11],fill:4,filter:[5,7],filter_text:5,filtertext:5,fin:[0,4],finish:[4,5,7,10],finishedat:3,finnish:0,firefox:[5,9],firmwar:12,first:[4,10],flavor:4,flowchart:[5,9],folder:[3,4,6],follow:[0,4,11],forbidden:[5,8],forc:[0,8],forct:8,form:[0,3,4],format:[3,4,5,7,12],formerli:[5,9],forward:[3,6],found:[4,8],frame:10,framework:[5,9],fre:[0,4],free:[5,9],freeboard:[5,9],freeboard_amd64:[5,9],freeboard_armhf:[5,9],french:0,from:[1,3,4,5,6,7,8,11],frontend:[5,9],full:4,further:4,futur:[5,9],game:3,gatewai:[3,8,10,12],gener:[4,5,9,12,13],ger:[0,4],get:[0,1,6,7,8,9,10,11,12,13],gif:4,git:[5,9],github:[4,9],gitlab:[0,5,6,9],gitlab_8:4,give:3,given:[1,3,4],globalipv6address:3,globalipv6prefixlen:3,gnat:3,gnu:[5,9],golang:[5,9],gpu:[5,9,12],gpu_1:[5,9],gpudriv:12,graphdriv:[3,5],grayscal:4,greek:0,grk:[0,4],group:[5,9,12],groupadd:3,grow:[5,9],hairpinmod:3,handl:4,hardwar:0,has:[4,12],hat:[5,9],have:[0,1,4,5,9],health:4,hello:4,help:[5,9],here:4,hide:4,high:[5,9],higher:[3,11],highli:[5,9],hkp:4,home:[5,9],homeassist:[5,9],host:[0,3,8,10,11],host_binding_ipv4:8,host_path:11,host_port:4,hostconfig:3,hostip:3,hostnam:[1,3,5,11,12],hostnamepath:3,hostport:3,hostspath:3,how:4,href:0,html:[0,4],htmlclass:4,http:[0,1,2,3,4,5,7,8,9,11,12,13],http_port:[0,4],httpport:0,hub:[1,5,9],hun:[0,4],hungarian:0,hwaddr:10,hyphen:4,i18n:4,icon:[1,4,5,9],ifac:10,ifconfig:10,ifroglab:[5,9],imag:[3,4,6,7,10,11],image_download:[1,5,7],image_export:1,image_nam:5,image_push:1,image_remov:[1,7],image_tag:5,image_typ:5,imageid:3,imap:4,impress:[5,9],includ:[4,5,6,9],incred:[5,9],independ:4,index:[4,7],individu:[5,9],inet:10,info:7,inform:[0,4,5,6,8],ingress:8,inherit:4,init:[1,5],initi:[1,4],input:[3,4],input_:11,insid:[3,4,11],inspect:[6,9],instal:[0,5,10],instanc:4,instruct:4,integ:[0,4],integr:[4,5,9],intel:12,intellig:[5,9],intend:[5,9],interact:[5,9],interfac:[3,4,10,12],intern:8,internation:4,internet:[5,9],interpret:[5,9],iomaximumbandwidth:3,iomaximumiop:3,iot:[5,9],iot_default:[5,9],iot_en:9,iot_freeboard:[5,9],iot_home_assist:[5,9],iot_ifroglab:[5,9],iot_kafka:[5,9],iot_mongo:[5,9],iot_mqtt:[5,9],iot_node_r:[5,9],iot_openhab:[5,9],iot_rabbit_mq:[5,9],iot_redi:[5,9],iot_wiolink:[5,9],ipaddress:3,ipam:[8,10],ipamconfig:3,ipcmod:3,ipprefixlen:3,ipv4_address:10,ipv4address:8,ipv6:8,ipv6address:8,ipv6gatewai:3,irc:[5,9],ircd:3,irssi:[5,9],is_autom:5,is_offici:5,isadmin:12,isdir:12,iso:[5,12],isol:3,issu:[5,9],ita:[0,4],italian:0,italiano:4,item:4,japanes:0,javascript:[5,9],jenkin:[5,9],jenkins_icon:[5,9],jessi:[5,9],jessie_8_amd64:[5,9],jessie_8_armhf:[5,9],join:[3,12],joomla:[0,1,3,5,7,9],joomla_db_1:3,joomla_web_1:3,jpn:[0,4],json:[0,1,3,4,5,7,8,9,11,12,13],just:4,kafka:[5,9],kafka_amd64:[5,9],kafka_armhf:[5,9],kei:[3,4,5,8,9,13],kernel:[5,9],kernelmemori:3,kernelvers:[5,9],key2:[8,13],keyserv:4,keyword:4,kill:[0,7],killingjacki:[5,9],kind:4,kit:4,kor:[0,4],korean:0,kvm:5,label:[3,4,5,8,13],labelhtmlclass:4,lang:0,languag:[0,4,5,9],laptop:[5,9],last:[3,4],lasttagtim:5,later:10,latest:[1,3,4,5,7,9,11],launch:4,layer:5,ldap:4,learn:[5,9],left:10,let:[4,5,9],letter:11,level:[3,5,6,7,9],lib:[3,5,13],librari:[5,9],libreoffic:[5,9],libreoffice_icon:[5,9],licens:[5,9],lightop:5,lightweight:[5,9],like:7,limit:[1,3,4,6,7],line:3,link:[3,5,9,10],linklocalipv6address:3,linklocalipv6prefixlen:3,linux:[3,4,5,9],linuxserv:[5,9],list:[0,2,4,6,7,11,12],list_en:9,listen:[5,9],load:[4,5,9,10],local:[3,4,5,7,8,10,13],locat:[1,5,9],log:[5,6,9],log_rot:9,logconfig:3,login:[4,7,12],login_refresh:12,logintim:12,logout:12,logpath:3,loragatewai:[5,9],lose:4,low:3,lower:10,lowercas:4,lowerdir:3,lpd:3,lxc:[1,3,5,6,7,9,11,12],lxc_addr:9,lxc_auto:9,lxc_bridg:9,lxc_dhcp_max:9,lxc_dhcp_rang:9,lxc_dns_primari:9,lxc_dns_secondari:9,lxc_netmask:9,lxc_network:9,lxcbr0:[3,8,9],lxcversion:12,lxde:[5,9],lxqt:5,mac:3,mac_addr:3,macaddress:[3,8],machin:[5,9,12],made:[5,9],magyar:4,mail:3,main:4,mainli:6,mainlin:5,make:[4,5,9],makefil:4,man:3,manag:[3,4,5,9],manager_amd64:[5,9],manager_armhf:[5,9],mandatori:8,mani:[4,10],manual:[4,10],map:[4,8,13],mariadb:3,markdown:4,mashup:[5,9],mask:10,master:[4,9],match:4,math:[5,9],mathemat:[5,9],max:9,maximum:[0,4],maximumretrycount:3,mean:[1,7,12],meet:4,memori:[1,3,6,12],memory_usag:12,memoryreserv:3,memoryswap:3,memoryswappi:3,mention:4,merg:3,mergeddir:3,messag:[4,5,7,8,9],metadata:[1,5,7],method:[5,10],metric:10,microsoft:[5,9],migrate_statu:9,million:[5,9],millisecond:[3,11],minecraft:[5,9],minecraft_icon:[5,9],minimum:4,minut:[0,4],mirror:[5,9],mnt:3,mobil:[5,9],mod_proxi:4,mode:[3,10],modifi:4,modul:4,mongo:[5,9],mongo_icon:[5,9],mongodb:[5,9],mongodb_amd64:[5,9],mongodb_armhf:[5,9],monitor:[5,9],more:[7,11],mosquitto:[5,9],mosquitto_amd64:[5,9],mosquitto_armhf:[5,9],most:[4,5,9],mount:[3,4,11],mountlabel:3,mountpoint:13,mqtt:[5,9],mtu:[8,10],multi:4,multicast:10,multipl:[5,9,11],multiplay:[5,9],must:[0,3,4,11],mxnet:[5,9],my_new_pass:5,my_new_us:5,my_pass:5,my_registri:9,my_us:5,mybusybox:1,myphpadmin:[5,9],myqnapcloud:12,mysql:[5,9],mysql_icon:[5,9],mysql_root_password:[5,9],n__note__:0,n_apt:3,name:[0,1,3,4,5,7,8,9,10,11,12,13],namespac:3,nanocpu:3,nat:3,nbackup:3,nbin:3,ndaemon:3,nederland:4,need:[0,4,10],needrestart:12,net:[4,10],net_bridg:12,netmask:[9,10,12],netn:3,network:[1,3,5,6,10,11],network_dock:9,network_id:8,networkid:3,networkmod:3,networksdelet:8,networkset:3,neural:[5,9],new_test:[5,7],newest:7,newimag:1,newtag:1,next:[4,12],ngame:3,nginx:[5,9],nginx_1:4,nginx_base_pag:4,nginx_icon:[5,9],nginx_nam:4,nginx_web_host_port_desc:4,ngnat:3,nic:10,nirc:3,nlist:3,nlogin:0,nlp:3,nmail:3,nman:3,nnew:3,nnobodi:3,nobodi:3,node:[5,9],nodejs_amd64:5,nodejs_icon:[5,9],nologin:3,none:[8,10],nonexist:3,nop:5,nor:[0,4],norsk:4,norwegian:0,notat:4,note:0,notifi:12,notitl:4,novnc:[5,9],now:4,npassword:0,nproxi:3,nsy:3,nsync:3,ntopng:5,number:[0,3,5,7,12],nusernam:0,nuucp:3,nwww:3,nyour:0,object:[0,1,3,4,5,7,8,9,11,12,13],occur:5,odoo:[5,9],odooarm:[5,9],off:[4,11],offic:[5,9],offici:[5,9],offset:7,oldnam:5,onbuild:[3,5],one:[1,3,5,7,9,11],onli:[1,3,4,5,11],onlin:[5,9],oomkil:3,oomkilldis:3,oomscoreadj:3,open:[4,5,9],openerp:[5,9],openhab:[5,9],openssh:5,openstdin:[3,5],oper:[5,6,9],opt:10,option:[1,3,4,5,7,8,10,11,13],order:4,org:4,orient:[5,9],origin:[4,5,11],other:[0,1,5,9,12],out:4,outdat:12,outdatednotifi:12,output:3,overlai:[3,5],overrid:4,overrun:10,overwrit:3,own:[5,6,9,10],p80:4,pack:4,packag:[4,5,9],package_routin:4,packet:10,page:[4,10],pair:4,panel:12,param:[1,5],paramet:[0,1,3,4,5,7,8,11,12,13],parent:[3,5],part:[4,5,9],pass:13,passwd:3,password:[0,1,4,5,9,12],path:[0,1,3,5,7,9,11,12],paus:[3,7],percent:12,percent_buff:12,percent_cach:12,percentag:[9,12],perl:[5,9],permiss:[11,12],photo:[5,9],php:[2,5,9],physic:10,pid:3,pidmod:3,pidslimit:3,pixel:4,pkg_instal:4,pkg_main_remov:4,pkg_post_instal:4,pkg_post_remov:4,pkg_pre_instal:4,pkg_pre_remov:4,plai:[5,9],platform:[3,4,5,9],player:[5,9],pleas:[0,4],plug:[5,9],plugin:[5,8,9],png:[1,5,9],point:[4,11],pol:[0,4],polish:0,polski:4,pont:[5,9],ponte_amd64:[5,9],ponte_armhf:[5,9],pool:4,pop3:4,pop:4,por:[0,4],port:[0,1,3,4,5,6,7,9,12],portbind:3,portugues:0,post:[0,1,3,5,8,9,11,12,13],postgr:[5,9],postgresql:[5,9],postgresql_icon:[5,9],power:[5,9],pre:[5,9],prefer:[4,6],prerequisit:[0,4],present:[5,9],previou:4,primari:9,privat:[1,5,9],privateregistri:5,privileg:3,procedur:4,process:4,processlabel:3,processor:[5,9,12],product:4,program:[5,9],progress:1,project:[5,9],pronounc:4,propag:3,proper:4,properti:[0,4],protocol:[4,12],provid:[4,5,6,9,10],proxi:[3,4,6],proxypass:[0,4],proxypassrevers:4,proxyrequest:4,publish:3,publishallport:3,pull:4,purpos:[4,5,9],put:[0,3,4,9,11,12],pwd:4,py3:[5,9],python3:[5,9],python:[5,9],qbu:4,qcs:3,qcs_1:9,qcspassword:1,qcsuser:1,qcsversion:[5,9],qdk2:[4,5],qdk:4,qemu:5,qiot:[5,9],qip:[0,1,3,5,7,8,9,11,12,13],qnap:[1,2,3,4,5,7,9],qnap_export:3,qnapna:[4,5,9],qnet:6,qnet_dhcp:10,qnet_dhcp_1:10,qnet_stat:10,qnet_static_1:10,qpkg:[1,5,6,9,12],qpkg_author:4,qpkg_displaynam:4,qpkg_name:4,qpkg_requir:4,qpkg_service_program:4,qpkg_summari:4,qpkg_timeout:4,qpkg_ver:4,qpkg_web_port:4,qpkg_webui:4,qport:[0,1,3,5,7,8,9,11,12,13],queri:[0,1,3,5,7,12],quick:6,quickli:[5,9],rabbitmq:[5,9],rabbitmq_amd64:[5,9],rabbitmq_armhf:[5,9],ram:0,randomli:[5,9],rang:9,rate:3,raw:4,read:[0,11],readonli:4,readonlyrootf:3,real:[5,9],reat:4,reboot:3,receiv:3,recent:12,recognit:[5,9],recommend:[5,10],record:7,recv:4,recycl:12,red:[5,9],red_amd64:[5,9],red_armhf:[5,9],redi:[5,9],redirect:4,redis_amd64:[5,9],redis_armhf:[5,9],redis_icon:[5,9],redmin:[5,9],refer:[0,4,5],reflect:[5,9],registri:[6,7,9,12],registry_nam:[1,5],rel:[3,11],relat:[5,9],releas:[5,9],reliabl:[5,9],rememb:1,rememberm:1,remot:[5,9],remov:[0,4,6,7,11],render:4,repo:[4,5,9],repo_branch:9,repo_project:9,repo_us:9,repodigest:5,report:[3,12],repositori:[1,4,5,6,7],repotag:5,repres:4,request:[0,1,3,5,7,8,9,10,11,12,13],requir:[0,1,3,4,5,8,11,12,13],resolv:3,resolvconfpath:3,resourc:[1,3,4,6,12],respons:[0,1,3,5,7,8,9,11,12,13],rest:[5,6,9],restart:[0,6,7],restartcount:3,restartpolici:3,restrict:8,result:[1,5,7,8,9,12],revers:[4,6],review:[5,9],rich:[5,9],rom:[0,4],romanian:0,root:[0,3,4,5,9,12],root_qnet:10,root_qnet_dhcp_1:10,root_qnet_static_1:10,rootdir:5,rootf:5,row:7,rprivat:3,rubi:[5,9],ruby_amd64:5,rule:4,run:[0,1,3,4,5,7,9,10,12],runc:3,runtim:[3,5,9],rus:0,russian:0,rwm:11,same:[1,4,8,10,12],sameersbn:[5,9],sandboxid:3,sandboxkei:3,save:4,sbin:[3,5],scalabl:[5,9],schema:[0,4],scheme:8,scope:[8,10,13],script:[5,9],scroll:10,search:6,second:[5,7],secondari:9,secondaryipaddress:3,secondaryipv6address:3,section:4,securityopt:3,see:10,select:10,selenium:[3,11,12],self:5,sensit:4,sequenc:11,serv:4,server:[0,3,4,5,6,9,10,12],servic:[0,4,7,10],set:[1,4,5,6,8,10,11,12,13],seterrychen:[5,9],setfattr:9,settodefault:5,setup:4,sexi:[5,9],sha256:[3,5],share:[3,5,6,9,11,13],shareabl:3,sharefold:12,ship:4,shmsize:3,should:[4,5],show:[4,10],shown:[4,10],side:[5,9,10],sign:[4,5],similar:4,simpl:[5,9],simpli:4,simplifi:[0,5,9],situat:10,size:[3,5,12,13],sks:4,small:[5,9],smoothli:4,smtp:4,snapshot:12,softwar:[5,9],someth:7,sound_and_alsa_:11,sourc:[1,3,4,5,6,9],spa:[0,4],spacereclaim:13,spanish:0,spec:[3,12],specif:[0,1,4,5,8,10,13],specifi:[3,4,8,10,11,13],speed:9,sphinx:9,spool:3,spreadsheet:[5,9],spy:[5,9],spy_amd64:[5,9],src:4,ssh:[0,5],ssh_port:0,ssl:5,stabl:5,stamp:7,standard:[5,9],star_count:5,start:[0,1,6,7,10],startdat:12,startedat:3,state:[1,3,5,7,11],station:[1,2,3,4,5,9,10,12,13],statu:[3,9,12],stdinonc:[3,5],step:[4,12],stop:[0,4,6,7],storag:6,store:[4,5,9],str:3,string:[0,1,3,4,5,7,8,9,11,12,13],structur:[5,9],subnet:[8,10],subtitl:4,success:[1,3,4,5,7,9],successfulli:[4,7],sudo:4,suit:[5,9],suomi:4,supershel:5,support:[0,3,4,5,8,9,10,13],suppos:4,sure:4,svenska:4,swe:[0,4],swedish:0,sync:3,syntax:4,sys:3,system:[3,4,5,6,7,9],tab:4,tag:[1,3,6,7],tail:3,take:[4,5],taken:4,tar:[5,9],target:[0,4],task:[6,7,11],task_id:1,tcp:[3,11,12],tcpport:[3,7],technolog:[5,6,9],tee:4,templat:[1,4,6],tensorflow:[5,9],terrychu:[3,5,9],test1:11,test2:11,test:[0,1,3,5,7,11,12],test_volume_1:13,test_volume_2:13,test_volume_3:13,text:7,tgz:[1,3,12],tha:[0,4],thai:0,than:[3,7,11],thei:4,them:0,theme:[5,9],therefor:10,thi:[1,3,4,5,8,9,10,12],thing:[4,5,9],thread:12,three:4,tid:7,time:[1,3,4,5,7,9,11,12],timeout:7,timestamp:7,titl:[0,4],tls:[5,12],tmpf:13,togeth:[5,9],tool:[4,5,9],toolkit:[5,9],topic:[5,9],total:12,total_s:9,totalcount:5,totals:12,tpl:4,track:[5,9],tradit:[0,4],train:[5,9],transfer_s:9,translat:4,transmit:3,trust:5,trusti:[1,3,5,7,9,11],trusty_14:[5,9],tty:[3,5],tty_:11,ttyj:5,tur:[0,4],turk:4,turkish:0,twentyfour:[5,9],twentyfour_24_amd64:[5,9],two:7,txqueuelen:10,txt:[0,1,3,5,7,8,9,11,12,13],type:[0,1,3,4,5,7,9,11,12,13],ubuntu:[1,3,4,5,7,9,10,11,12],ubuntu_amd64:5,ubuntu_armhf:5,ubuntu_icon:[1,5,9],udp:[3,11,12],uid:[3,13],ulimit:3,under:[5,9],uninstal:4,uniqu:[1,4],unit:11,unix:4,unless:1,unpaus:7,unus:6,updat:[4,7,11],upgrad:4,upper:3,upperdir:3,url:[1,5],usag:[3,11,12],use:[4,5,8,9,10,12,13],used:[0,4,5,8,9,12],useds:12,user:[1,3,4,5,6,7,9,12],usernam:[0,1,3,4,5,9,12],usernsmod:3,using:[0,4,5,9,10],usr:[3,5],usual:4,utest:[1,3,7,11],utest_import1:1,util:[5,6,9],utsmod:3,uucp:3,valid:4,validataion:4,validationmessag:4,valu:[4,5,8,9,12,13],value2:[8,13],variabl:[3,4,5,9],vendor:[5,9],verifi:4,version:[0,3,4,5,6,9,10,11,12],video4linux_:[1,3,11],virtual:[0,6,10,12],virtual_path:[0,1],virtuals:5,visual:[5,9],vnc:[5,9],vol1:3,vol2:3,volum:[3,4,5,6,11],volume_nam:13,volumedriv:3,volumesdelet:13,volumesfrom:3,vswitchnam:12,wai:[4,10],wait:[1,4,5,7],walkerle:4,want:[4,7],warn:[7,8],web:[0,4,5,6,9,12],websit:[4,5,9],well:4,what:6,when:[1,4,5,9,10],which:[1,4,5,9,12],who:[5,7,9],whole:[5,9],widget:[5,9],wiki:[5,9],wikipedia:6,wio:[5,9],wio_link:[5,9],wire:[5,9],without:[0,3,5,9,10],wizard:[0,4,9],word:[4,5,9],wordpress:[5,9],work:3,workdir:3,working_dir:3,workingdir:[3,5],workspac:6,world:[4,5,9],would:4,write:[4,10,11,12],writer:[5,9],written:[5,9],wrong:7,www:[2,3],x80:12,x86_64:12,xdelet:[0,1,3,5,7,8,9,11,13],xenial:[4,5,9],xenial_16:[5,9],xget:[0,1,3,5,7,8,9,11,12,13],xpost:[0,1,3,5,8,9,11,12,13],xput:[0,3,9,11,12],yaml:4,yet:11,yml:[4,10],you:[4,5,7,9,10],your:[3,5,6,9,10],zip:12,zookeep:[5,9]},titles:["Application","Background tasks","Change Log","Container","Dockerized QPKG","Image","QNAP Container Station","Log and Event","Networks","Preference","Qnet","Resource","System","Volumes"],titleterms:{"default":5,"export":[1,3],"import":1,NAS:4,add:[1,4,5],all:[8,13],applic:[0,1],authent:12,auto:11,background:1,basic:3,build:4,certif:12,chang:2,code:4,command:10,compon:4,compos:10,configur:4,connect:8,contain:[1,3,6,8,10],content:[0,1,3,4,5,6,7,8,9,10,11,12,13],cpu:11,creat:[1,3,4,8,10,13],custom:4,defin:4,delet:1,devic:11,disconnect:8,docker:[4,10],download:[1,4,5],dqpkg:4,edit:5,event:7,exampl:4,fetch:3,file:[4,12],folder:12,forward:11,from:10,get:[3,4,5],git:4,gitlab:4,imag:[1,5,9],inform:[3,12],inspect:[3,5,8,13],instal:4,limit:11,list:[1,3,5,8,9,13],log:[2,3,7],memori:11,network:[8,9,12],nginx:4,other:4,own:4,ping:5,port:11,prefer:9,project:4,proxi:0,push:[1,5],qnap:6,qnet:10,qpkg:4,quick:4,registri:[1,5],remov:[1,3,5,8,13],repositori:9,resourc:11,restart:3,revers:0,routin:4,sampl:4,search:5,set:[3,9],share:[4,12],start:[3,4,11],station:6,stop:3,storag:11,system:12,tag:5,task:1,templat:0,under:4,unus:[8,13],upgrad:1,user:0,volum:13,what:4,workspac:9,your:4}})