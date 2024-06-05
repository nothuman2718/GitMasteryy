# The1%Stuff

Contains **Advanced** Commands which we almost don't use most of the time

shortlog

```bash
#Config
git config --global user.name "vlm lokesh" #To configure username
git config --global user.email nothuman2.718@gmail.com #To configure email
git config --global core.editor "code --wait" #To configure the editor.
git config --global -e #Use this to open global config file
git config --global core.autocrlf true windows
git config --global core.autocrlf input  #To configure line ending for Linux


#Storing Credentails
git config --global credential.helper cache #git will store our credentials for 15 minutes in memory
#For Linux
git help -a | grep credential-store #Check store is present
git config --global credential.helper store #Stores the credential permanently for Linux
#For MacOS
git credential-osxkeychain #check keychain is present
git config --global credential.helper osxkeychain #Run this to set to Keychain
#For windows
git config --global credential.helper manager #Run this is to set Git-Credential-Manager-for-Windows


#Formatting Log output
git log --pretty=format:”%an committed %H”


#Using ls-tree, to see total snapshot
git ls-tree HEAD #For advanced vim neovim and emacs users
git show 5b9b #unique identifier of file1.txt , displays the total content


#To see contributions of authors
git shortlog


#Get lost commits very powerful
git reflog
```
