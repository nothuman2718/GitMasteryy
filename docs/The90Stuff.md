# The90%Stuff

Contains the commands which we use **most of the time**.

```bash
git init #Initilize a git repository

#Staging Files
git add <file-name> #Add a file to the staging area
git add . #Add all the files to the staging area
git add *<pattern>* #Add all files containing a specific pattern to the staging area

#Unstaging Files
git restore --staged <file-name> #Unstage a file

#Viewing Status
git status #View the status of the files in the staging area
git status -s #View the status of the files in the staging area in a short format

#Committing Changes
git commit -m "<commit-message>" #Commit the changes in the staging area
git commit -am "<commit-message>" #Skip the staging area

#Viewing Local Changes
git diff #View the changes in the working directory
git diff --staged #View the changes in the staging area
git diff --cached #Same as --staged

#Comparing Commits
git diff <commit-hash1>..<commit-hash2> #Compare two commits

#Removing Files
git rm <file-name> #Remove a file from the working directory and the staging area

#Viewing Commit History
git log #View the commit history
git log --oneline #View the commit history in a short format
git log --graph --oneline --all #View short commit hsitory but  all commits in graph
git log --reverse #Show in reverse order
git log -10 --reverse #See only last 10 commits in reverse order
git log <commit-hash1>..<commit-hash2> #See range of commits
git log --patch #See the actual changes in each commit

#Viewing a Commit
git show <commit-hash> #View the changes in a commit
git show HEAD~2 #view commit two steps back
git show <commit-hash>:path/to/file #View specific file in a commit

#Discarding Local Changes
git restore <file-name> #Discard changes in the working directory
git restore . #Discard all changes in the working directory

#Ignoring Files
touch .gitignore #Create a .gitignore file
echo "<file-name>" >> .gitignore #Add files to .gitignore
echo "<pattern>" >> .gitignore #Add files to .gitignore

#Detached HEAD State
git checkout <commit-hash> #Switch to a commit

#Branching
git branch <branch-name> #Create a branch
git checkout <branch-name> #Switch to a branch
git switch <branch-name> #Newer way
git checkout -b <branch-name> #Create a branch and switch to it
git switch -C <branch-name> #Newer way
git branch -d <branch-name> #Delete a branch
git branch #View the branches
git branch --merged #View merged branches
git branch --no-merged #View unmerged branches
git branch -vv #View local and remote tracking branches
git push -u origin <branch-name> #Push a branch to the remote repository
git push origin --delete <branch-name> #Delete a branch from the remote repository

#Merge a branch
git merge <branch-name>  #merges to current branch
git merge <branch-name> --no-ff #Merge a branch with --no-ff
git merge <branch-name> --ff-only #Merge a branch with --ff-only
git merge <branch-name> --squash #Merge a branch with --squash
git merge --abort #Abort a merge
git merge --continue #Continue a merge

#Revert a merge
git revert -m 1 <commit-hash> #1 is the parent number of the commit

#Rebasing
git rebase <branch-name>  #rebases current branch to <branch-name>
git rebase --abort #Abort a rebase
git rebase --continue #Continue a rebase
git rebase --skip #Skip a commit during rebase
git rebase -i <commit-hash> #Edit a commit during rebase

#Collaborating
git clone <repository-url> #Clone a repository
git clone <repository-url> <local-repository-name> #Give name to the repository in local

#Getting changes from remote
git fetch #Fetch the changes from the remote repository
git pull #Fetch the changes from the remote repository and merge them
git pull --rebase #Fetch the changes from the remote repository and rebase them
git push #Push the changes to the remote repository

#Managing Remotes
git remote add <remote-name> <repository-url> #Add a remote repository
git remote #View the remote repositories
git remote -v #View the remote repositories in a verbose format
git remote rename <old-remote-name> <new-remote-name> #Rename a remote repository

#Undoing commits
git reset --soft HEAD~1 #Undo the last commit
git reset HEAD~1 #Undo the last commit and unstage the changes
git reset --hard HEAD~1 #Undo the last commit and discard the changes

```
