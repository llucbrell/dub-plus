#!/usr/bin/env node

/*
       dP                dP       dP                                                          dP          
       88                88       88                                                          88          
       88d888b. .d8888b. 88d888b. 88d888b. .d8888b. .d8888b. .d8888b. .d8888b. .d8888b. .d888b88 .d8888b. 
       88'  `88 88'  `88 88'  `88 88'  `88 88ooood8 Y8ooooo. 88'  `"" 88'  `"" 88'  `88 88'  `88 88ooood8 
       88    88 88.  .88 88.  .88 88.  .88 88.  ...       88 88.  ... 88.  ... 88.  .88 88.  .88 88.  ... 
       dP    dP `88888P' 88Y8888' 88Y8888' `88888P' `88888P' `88888P' `88888P' `88888P' `88888P8 `88888P' 
                                                                                                    

                                                                                             
                                   i8@@8Li.                t@8000                                   
                                 .GitL:::GGGC;             G8ifGt80LtL11,.                          
                                  C,Li;i8i;Ci:ti  i11i:;i::i00ii;;ifffi;;f@8                        
                                  ,L;0L88iCf;L01f.   ,;  ifG0101f0t:;:;;;1GC                        
                                    t@80CL0LfC,    ,1i :;ii CGti1;G8fi::fCiL:                       
                                      L0C11tGf;      ,1;   L .;:.         Lii                       
                                      ,i0fLGt;f1.    t:                    1.                       
                                    ;0C8Li;t88L;:,,i  :t,          :1 .,  .t                        
                                  18i;i;1fC8tL,      .             ,  1. :L                         
                                1C:;G8Gf;f;             ::::      ;LG0t. iLG0CCi                    
            ..t0fC0tGt,       iC:ifCGCt:             ;,    ;L  i G1G0C11CLCL1C88CGti                
          ,Li;G01f01C::GC.   C8G1;:;:;              t           ii8@@@@@C  ;G81iGfitCtt1tf:         
        .CiGtL,      :0:;8: Gi:i08@8.           ..                .ifft,       iL:.       .1        
       .0CLfi          Ct;;08Cffti1.          .,                                f.  i   it:         
       t1i:L            0GLf:::;;;i          ;.                                 i  :.  ;   ::       
       0@@@;            ,iGt:::;:1          f                                    ;; ,i  i1ti        
       C@@@.             18888@@8C         .f     :t11:                               t. i          
       .8@0               G;:::;C8f      :;.L   ,i   , f                                            
                          ff:C8L;;;: t81,:8::f..f    @1 1                                           
                          G0i:::i8L10@8,,ff,f0L0. t@,.f.1                                           
                           C1:18L:i8;88,:Lf8t:f:   : Lt:.                                           
                           ,80C:::8t:L8f:G@G,:L   ,@8  i   ;i.                                      
                            ,8:::t8i::C8C1@8CfG   f@G i ;;    ;1                                    
                              tC:t8f::,;C8C1L0f     .G1f..1 G@,1                                    
                                i0t01::::::f01,f1,iG0;1  Gf    1                                    
                                   :tC00Lt:.      ;G,       8L1.           
                          .LG:;                    f.  f@@1  t.            
                      ,;.0ttC::::                   L   :t: ,:             
                 i;ftttttttt8:::;                    .L.  :1.              
             .:Gtttttfttttttttf;::;                                        
         i8tttttft::Cttttttttt;::::                                        
         tttC,.;;:::::fttttttttt::::;                                      
       ,::1Lt8;:::::::tttttttttt;:::f                                      
     8:0tttttttG;::::::;tttttttttt:::;                                     
   CtfttttttttttG::::::::tttttttttt:::i                                    
   ttttttttttttttt:::::::;tttttttttC:::                                    
    Gtttttttttttttt:::::::Gtttttttttf::t                                   
    .ttttttttttttttt:L.Cii;tttttttttL;f1                                   
     Lttttttttttttttfift,8ttttttttff            
      Gttttttttttttt0fttttttttt,                
       tttttttt1GGttCtLtG8G                     
        .1ft.i,.  t18i           GGGf;;;:::::;::i;:;C  
                t          .ifi:::;:;1fft11if;L11LLf1itC8fi   
                   ;  C8LttttCCLttttttttG1ft1f        
                   :         t                             
                  ;         ;                 Project-->     dub-plus v0.0.1        
                 L        t                 
               C       t                      Author---> Lucas_C/llucbrell/hobbescode         
                 8    C                       
                 ;Ct                          License-->      GNU-license        
  

  
*/

                                                                                              


//BASIC INITIAL ACTIONS

//modules to load
var program = require('commander');
var audrey2 = require('audrey-two');
var fs= require('fs');

                  //VIEW CONTROLLER\\
//--------------------------------------------------------\\
//view for audrey-two
var view={ 
          header:[">>title"],
          title: 
              
 "   _     _          _          \n"
+" _| |_ _| |_    ___| |_ _ ___  \n"
+"| . | | | . |  | . | | | |_ -| \n"
+"|___|___|___|  |  _|_|___|___| \n"
+"               |_|             \n"
,
          //symbolProgress: " *",
          colors:{ 
           title: "blue",
           error: "red",
           warning: "yellow",
           success: "green"
          
           }         
        };


//inicialize controller and pass the basic view
var audrey= audrey2("myView", view);


                 //COMANDS\\
//---------------------------------------------------------\\

//Program version and options
program
  .version('0.0.1')
  .option('-p, --parent', 'work over parent version **.??.??')
  .option('-c, --children', 'work over child version ??.**.??')
  .option('-g, --grand-child', 'work over grand-child version ??.??.**')
  .option('-j, --json', 'update package JSON')
  .option('-u, --undo', 'delete last tag')
  .option('-v, --verbose', 'display more info of tagging');


program
  .command('release') 
  .description('create a git tag for a new release')
  .action(function(name){
    //body...
    flow();
    audrey.encore();
  }); 

  program
  .command('+') 
  .description('update one on ??.??.**')
  .action(function(name){
    //body...
    flow('+');
    audrey.encore();
  }); 

program
  .command('++') 
  .description('update one on ??.**.??')
  .action(function(name){
    //body...
    flow('++');
    audrey.encore();
  }); 

program
  .command('+++') 
  .description('update one on **.??.??')
  .action(function(name){
    //body...
    flow('+++');
    audrey.encore();
  }); 

program
  .command('-') 
  .description('delete last tag')
  .action(function(name){
    //body...
    flow('-');
    audrey.encore();
  });

 program
  .command('show-w') 
  .description('show copyright')
  .action(function(name){
    //body...
    printLicense();
  }); 
 
 program
  .command('show-c') 
  .description('license details')
  .action(function(name){
    //body...
    printCopyright();
  }); 

  //command error checker
program
  .command('*')
  .description('error checker commander')
  .action(function(env){
   audrey.err("E01", "Not a correct command.", "Try with --help command");
   audrey.encore();
});




                 //FUNCTION ACTIONS\\
//---------------------------------------------------------\\


//variables for good
var gitTags= readTags();

// to store the only release tags
var versions=[];
//to store the last released tag
var lastTag;
var preformat;
//get all the versions
var newVersion;


function flow(sign){

//signs for shortcut actions
if(sign==="+") program.grandChild= true;
if(sign==="++") program.children= true;
if(sign==="+++") program.parent= true;
if(sign==="-") program.undo= true;

//the flow of the program

getAllTagsVersions();
//get the most recent version
if(versions && versions[0]) lastTag= getLastVTag(versions);
else audrey.err("E03", "Can't find tag versions into git-repository\n", "Build a tag");



try{
//calculate the next version by the options commander
if(program.grandChild)++lastTag[2];

if(program.children){
 ++lastTag[1];
 lastTag[2]=0;
}
if(program.parent)    {
  ++lastTag[0];
    lastTag[1]=0;
    lastTag[2]=0;
} 
//put the correct format, add the v or version word before numbers
newVersion= lastTag[0]+"."+lastTag[1]+"."+lastTag[2];
}catch(err){
  program.parent=false;
  program.children=false;
  program.grandChild=false;
  program.undo=false;
  audrey.err("E04", "There is no release tags");
}
//for update tags
if (program.grandChild || program.children || program.parent){
//inject to audrey
 audrey.fertilize({name: ">>version", value:"point tag to.. " + preformat + newVersion, color:"blue"}, "header");
//write new tag to git 
 writeTagToGit(preformat + newVersion);
}
//for delete tags
if (program.undo){
  
 rewind(preformat + newVersion, function(){
 gitTags=readTags(); 
 getAllTagsVersions();
 lastTag=getLastVTag(versions);
 newVersion= lastTag[0]+"."+lastTag[1]+"."+lastTag[2];
 audrey.fertilize({name: ">>version", value: "point tag to.. "+preformat + newVersion, color:"blue"}, "header");
//to write on package json
 changePackage(newVersion); 
 });
 
}
//update one + to package
if (!program.undo) changePackage(newVersion);
}

function readTags(){
  try{
  // array wher store the names of the git-tags 
var gitags = fs.readdirSync('./.git/refs/tags');
return gitags;
}
catch(err){
  console.log("There is no .git directory"+err);
}

}

function getAllTagsVersions(){
  versions=[];
  // get all the tag versions
 gitTags.forEach(function(element){
    var vers= element.match(/.+[0-9]+.[0-9]+.[0-9]+/);
    if (vers) {
      versions.push(vers[0]);
      //get the correct format
      var tex= element.match(/[^0-9]+/);
      if (tex) preformat= tex;
      else preformat="";
    }

 });
}

function getLastVTag(versions){
  var numb=[];
  var par, chi, gra;//to store the different values of the last vers
//give the min value
  par=0;
  chi=0;
  gra=0;

// get separately the values of the versions
    versions.forEach(function(element){
      var v= element.match(/[0-9]+/g);
      var arri=[];
      //transform to int and store the values in one array of arrays
      arri.push(parseInt(v[0], 10));
      arri.push(parseInt(v[1], 10));
      arri.push(parseInt(v[2], 10));
      numb.push(arri);
    });
//iterate over all the versions
    numb.forEach(function(element){
        if(element[0]>par){
          par= element[0];
          chi= element[1];
          gra= element[2];
        }
        if(element[1]>chi && element[0] ===par){
          chi= element[1];
          gra= element[2];
        }
        if(element[2]>gra && element[0] === par && element[1]=== chi){
          gra= element[2];
        }
    });
 
  var max=[par, chi, gra];
  return max;
}

function writeTagToGit(newVersion){
  //add tag to git using shell commands
  com('git', ["tag", newVersion], function(resp){
  });
  audrey.err("S01", "Writted new git tag");
  if(program.verbose) {
    com('git', ["tag"], function(resp){
      console.log("git tags in your repository \n" +resp);//solved with consol to finish quickly
    });
  }
}
  
  //run commands on the child process --> for linux
 function com(cmd, args, callBack ) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function (buffer) { resp += buffer.toString() });
    child.stdout.on('end', function() { callBack (resp); });
}     

  //parse, change and write the JSON-file

function changePackage(newVersion){
  try{
      var format= require('json-format');
      var Jpack= fs.readFileSync("./package.json");
      var pack= JSON.parse(Jpack);
      //put the correct semServer version format (without preformat)
      pack.version= newVersion;
      fs.writeFileSync("./package.json", format(pack));
      audrey.err("S02", "Changed package.json");
    }
    catch(err){
      audrey.err("W01", "There is no package.json");
    }
}

function rewind(Version, callBack){
  com('git', ["tag", Version, "-d" ], function(resp){
    console.log("git say.. "+resp);//solved with console to finish quickly
  });
  audrey.err("S01", "Deleted git tag");
  if(program.verbose) {
    com('git', ["tag"], function(resp){
      console.log("git tags in your repository \n" +resp);//solved with consol to finish quickly
    });
  }
  callBack();
}

function printLicense(){
  var licens= fs.readFileSync('./license.md');
  console.log(licens.toString());
}

function printCopyright(){
  console.log("\nDUB-PLUS - version counter for git tags\n"
    +"\nCopyright (c) 2015 Lucas_C/llucbrell"
+"\n_"
    +"\nThis program is free software: you can redistribute it and/or modify"
    +"\nit under the terms of the GNU General Public License as published by"
    +"\nthe Free Software Foundation, either version 3 of the License, or any" 
    +"\nlater version."
+"\n_"
    +"\nThis program is distributed in the hope that it will be useful,"
    +"\nbut WITHOUT ANY WARRANTY; without even the implied warranty of"
    +"\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the"
    +"\nGNU General Public License for more details."
+"\n_"
    +"\nYou should have received a copy of the GNU General Public License"
    +"\nalong with this program. Type show-w for details If not, see \n <http://www.gnu.org/licenses/>.\n");
}


program.parse(process.argv);

//END

                  
/*
888               888       888                                                       888      
888               888       888                                                       888      
888               888       888                                                       888           
888-~88e  e88~-_  888-~88e  888-~88e   e88~~8e   d88~\  e88~~\  e88~~\  e88~-_   e88~\888  e88~~8e  
888  888 d888   i 888  888b 888  888b d888  88b C888   d888    d888    d888   i d888  888 d888  88b 
888  888 8888   | 888  8888 888  8888 8888__888  Y88b  8888    8888    8888   | 8888  888 8888__888 
888  888 Y888   ' 888  888P 888  888P Y888    ,   888D Y888    Y888    Y888   ' Y888  888 Y888    , 
888  888  "88_-~  888-_88"  888-_88"   "88___/  \_88P   "88__/  "88__/  "88_-~   "88_/888  "88___/  
                        
                                                                        copyright Lucas_C/llucbrell
                                                                           hobbescode@gmail.com    
            :088C;                                                      
          ,008000LtCCt.  it;1;tC00G00LfLG0t                             
         :800808000Gt.t0GCCGGG00L; ...:tLCt1tt0G,                       
          i0800LCL880C.,;  fG0t                ,8G0G000GC,               
          ;0080C.    .    f0C                   ,80000GG00;              
           :8080GftC.                .           .; 1GfGGLi              
             ,LG80C.             1G1 .0C; .1CCG1    :8GL0L.              
               .C800Gf:        ,t. 1   G0fL.C  Cf    ;                   
              18@0G80GCf     ::   :0G0 1t  :0G t1   i,                  
               t01     L     ,i         t:      ,L ..11                  
            .Gti@.1i ,C1C    ;         ;1       11:GG0f                  
         .1C1..L8018C8C0:    f        1G;      :L   ,Lf                  
          ,C0t  ;C,CG000    1       C,fi      G     C.                  
      18G1            :C,   1,   ,LGCG01    .Gt  LftL                   
        :1f01                 .f08080G00Gtf0L, fC0080G1                 
      tC1;                  :0LLt,.,,,,tL0G.    ;:t8C.                  
     C808Lt10,              @G f800G88881 1G:      ;C0C0C.              
          i0                i0808808088C81;GC       ff:                 
        ;01:i1:               f0000GG008000G.        ;ff,               
        :f1. 1i                 .f@0000000,        ii   .               
           iG.                                      .1f.                
          ,1CG88L     :       .                 ,   it,                 
                 .tt, tt      i1;;f0L          :,i0L:                   
               .i:    ,;L:                 G:   ,t                      
                        .G0t,           .f0  i;  ;:                     
                 tCGL       i@8G0LLLLC80f,. L                            
              ,LG1:            ..,,,.                                   
              18G000GGL.            .1.                                 
             LG;    .;LG           ft                                   
             G8i      ,fGL         1G:                                   
         .1G0G800CCG0G0i             1t;.                               
         .GGG0GGGCGCG0G0,            :Cf;.                              
          f0C        .GL            ;10L                                
         fGG.       if                ;C;                               
         100GG00C;,Ct;:.           .0f,if1                              
        .G0CGG08L000:GL.            :C.                                 
        10G  ,1CG00GG:               .Ci                                


*************************************************************************************
    dub-plus - software to control git tag release versions names
    Copyright (c) 2015 Lucas_C/llucbrell

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or any 
    later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

***********************************************************************************



*/