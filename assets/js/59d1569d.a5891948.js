"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6],{9765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(4848),i=n(8453);const r={},s="The1%Stuff",a={id:"The1Stuff",title:"The1%Stuff",description:"Contains Advanced Commands which we almost don't use most of the time",source:"@site/docs/The1Stuff.md",sourceDirName:".",slug:"/The1Stuff",permalink:"/GitMasteryy/docs/The1Stuff",draft:!1,unlisted:!1,editUrl:"https://nothuman2718.github.io/GitMaster/docs/docs/The1Stuff.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MasteringGit",permalink:"/GitMasteryy/docs/MasteringGit"},next:{title:"The90%Stuff",permalink:"/GitMasteryy/docs/The90Stuff"}},c={},l=[];function u(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"the1stuff",children:"The1%Stuff"}),"\n",(0,o.jsxs)(t.p,{children:["Contains ",(0,o.jsx)(t.strong,{children:"Advanced"})," Commands which we almost don't use most of the time"]}),"\n",(0,o.jsx)(t.p,{children:"shortlog"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'#Config\ngit config --global user.name "vlm lokesh" #To configure username\ngit config --global user.email nothuman2.718@gmail.com #To configure email\ngit config --global core.editor "code --wait" #To configure the editor.\ngit config --global -e #Use this to open global config file\ngit config --global core.autocrlf true windows\ngit config --global core.autocrlf input  #To configure line ending for Linux\n\n\n#Storing Credentails\ngit config --global credential.helper cache #git will store our credentials for 15 minutes in memory\n#For Linux\ngit help -a | grep credential-store #Check store is present\ngit config --global credential.helper store #Stores the credential permanently for Linux\n#For MacOS\ngit credential-osxkeychain #check keychain is present\ngit config --global credential.helper osxkeychain #Run this to set to Keychain\n#For windows\ngit config --global credential.helper manager #Run this is to set Git-Credential-Manager-for-Windows\n\n\n#Formatting Log output\ngit log --pretty=format:\u201d%an committed %H\u201d\n\n\n#Using ls-tree, to see total snapshot\ngit ls-tree HEAD #For advanced vim neovim and emacs users\ngit show 5b9b #unique identifier of file1.txt , displays the total content\n\n\n#To see contributions of authors\ngit shortlog\n\n\n#Get lost commits very powerful\ngit reflog\n'})})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(6540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);