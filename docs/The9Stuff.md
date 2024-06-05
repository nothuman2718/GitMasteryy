# The9%Stuff

Contains the commands which we use **rarely** or occasionally

```bash

git add *<pattern>* -u #Add all files to the staging area except the ones containing a specific pattern
git mv <old-file-name> <new-file-name> #Rename a file


git commit #Opens the default editor

#Changing Commit History
git commit --amend #Change the last commit
git commit --amend -m "<new-commit-message>" #Change the last commit with a new message
git commit --amend --no-edit #Change the last commit without a new message


git diff --shortstat #View the changes in the working directory in a short format
git diff --stat #View the changes in the working directory in a short format
git diff --name-only #View the changes in the working directory in a short format
git diff --name-status #View the changes in the working directory in a short format

git rm --cached <file-name> #Remove a file from staging area only

git log --name-only #See the list of modified files in each commit
git log --name-status #See the list of modified files in each commit
git log --stat #See the list of modified files in each commit

#Filtering History
git log --author="<author-name>" #Filter by author
git log --author="<author-name1>\|<author-name2>"
#Filter by time
git log --since="<date>"
git log --until="<date>"
git log --after="<date>"
git log --before="<date>"
git log --after="<date1>" --before="<date2>"

#Filter by commit message keyword
git log --grep="<pattern>"
git log --grep="<pattern1>\|<pattern2>"
git log -S"<keyword>" #Filter by content keyword
git log -- <file-name> #See all commits that modifed or deleted a file

git blame <file-name> #Finding author of the line
git blame -L<start>,<end> <file-name> #Specify range of line
git show --stat <commit-hash> #View the changes in a commit in a short format
git show --name-only <commit-hash> #View the changes in a commit in a short format
git show --name-status <commit-hash> #View the changes in a commit in a short format

git clean -fd #Clean all untracked files
git restore --source=HEAD~2 <file-name> #restore older version of file

#Aliasing
git config --global alias.<alias-name> <command> #Create an alias

#Bisect command
git bisect start
git bisect bad
git bisect good <commit-hash>
git bisect reset

#Tagging
git tag <tag-name> #Create a tag
git tag -a <tag-name> -m "<tag-message>" #Create an annotated tag with a message
git tag -d <tag-name> #delete a tag
git push origin <tag-name> #push a tag to remote
git push origin --tags #push all tags to remote
git push origin --delete <tag-name> #delete a tag that is in origin

git branch -r #View remote branches
git branch -a #View all branches
git branch -v #View the branches in a short format

#Stashing
git stash push -m "<stash-message>" #Stash the changes in the working directory
git stash save "<stash-message>" #Stash the changes in the working directory with a message
git stash list #View the stashes
git stash apply <stash-name> #Apply a stash
git stash show <stash-name> #View the changes in a stash
git stash pop <stash-name> #Apply a stash and remove it from the list
git stash drop <stash-name> #Remove a stash from the list
git stash clear #Clear all the stashes

#Reverting Commits
git revert <commit-hash> #Revert a commit
git revert -e <commit-hash> #Revert a commit and edit the commit message
git revert --no-edit <commit-hash> #Revert a commit and skip the commit message
git revert -n <commit-hash1> <commit-hash2> #Revert multiple commits without creating multiple revert commits

```
