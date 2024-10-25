# GIT COMMANDS
### INSTALL GIT BASH
1. Run the command `git --version`
2. If there's an error, install [Git Bash](https://git-scm.com/)
3. Choose default options, but override the branch name with main.
4. Reload VS Code to apply changes.

### INSTALL GITHUB CLI
1. Run the command `gh --version`
2. If there's an error, install [GitHub CLI](https://cli.github.com/)
3. Choose default options.
4. Reload VS Code to apply changes.

### CONFIGURE USER NAME
1. Run the command `git config user. name`.
2. If it's not correct, run the command `git config user. name "myUserName"`.

### CONFIGURE USER EMAIL
1. Run the command `git config user.email`.
2. If it's not correct, run the command `git config user.email "my@email.com"`.

### COPY THE REPOSITORY LINK
```
1. Open GitHub.
2. Open the repository.
3. Click on the green Code button.
4. Copy the HTTPS link.
```

### PULL FROM GITHUB
```
git init
git remote add origin https://github.com/myRepositoryLink
git pull origin main
```

### DELETE UNUSED FILES
1. If there are files that VS Code doesn't need (like Glitch files), delete those.  

### CREATE A NEW REPOSITORY IN GITHUB
 1. Click on the cat icon at the top left. 
 2. Click on the green new button at the top left. 
 3. Enter the repository name. 
 4. Click Create repository. 
 5. Do not change the default settings. 
 
### PUSH TO GITHUB FOR THE FIRST TIME 
```
gh auth login 
git remote set-url origin https://github.com/myRepositoryLink2 
git add . 
git commit -m "added files" 
git push --set-upstream origin main
``` 

### PUSH TO GITHUB REGULARLY 
```
git add . 
git commit -m "the changes I made" 
git push
```    

### RENAME DEFAULT BRANCH TO MAIN 
`git branch -M main` 

### SET DEFAULT BRANCH TO MATN 
`git config --global init.defaultBranch main`

### DELETE SOURCE CONTROL
```
ls -a 
rm -r .git
```
   - `ls-a` = List ALL files and folders
   - `rm -r.git` = removes entire directory/folder (becomes hidden)

### COMMAND DESCRIPTIONS 
1. `git init`
   - Initializes source control
2. `git pull origin main`
   - Copies files from the origin 
3. `gh auth login` 
   - Grants authorization to push to your repository
4. `git remote set-url origin` 
   - Sets the origin 
5. `git push --set-upstream origin main` 
   - Pushes files to GitHub and makes origin and main the default options
6. `git branch`
   - Views the branches 
---

### CONFIGURE USER NAME
1. Run the command `git init`.
2. Run the command `git config user.name`.
3. If it's not correct, run the command `git config user.name "myUserName"`.

### PUSH TO GITHUB FOR THE FIRST TIME
1. `gh auth login`
2. `git remote set-url origin https://github.com/myRepositoryLink2`
3. `git add .`
4. `git commit -m "added files"`
5. `git push --set-upstream origin main`

### CONFIGURE USER EMAIL
1. Run the command `git init`.
2. Run the command `git config user.email`.
3. If it's not correct, run the command `git config user.email "my@email.com`.

### CONFIGURE GLOBAL USER EMAIL (DEFAULT EMAIL)
1. Run the command `git init`.
2. Run the command `git config --global user.email`.
3. If it's not correct, run the command `git config --global user.email "my@email.com`.

Force delete repository
### PUSH TO GITHUB REGULARLY
```
git add .
git commit -m "description of changes"
git push
```
### FORCE DELETE REPOSITORY
`rm -rf .git`

### VIEW BRANCHES
`git branch`

### CREATE A BRANCH
`git branch branchName`

### SWITCH TO A BRANCH
`git switch branchName`

### SWITCH TO A BRANCH IN GLITCH
`git checkout myBranch`

### MERGING BRANCH CHANGES
1. Switch to the branch that will absorb the changes. Example: `git switch main`
2. `git merge [branchName]`

---

### MERGE TEST

INITIALIZE SOURCE CONTROL

1. `git init`
2. `touch index.html`
3. `git add .`
4. `git commit -m "added files"`
5. GITHUB: Create a new repository called merge-test
6. `git remote add origin https://myRepository`
   
PUSH TO A NEW REPOSITORY

7. `git push --set-upstream origin main`
8. `git branch myBranch`
9.  `git switch myBranch`
10. add `<p>Hello World!</p>` to the index.html file
11. Save the changes CTRL + S
12. `git add .`
13. `git commit -m "updated file`
14. `git switch main`
15. Change the history from `Auto` to `All`

MERGE THE BRANCH

16. `git merge myBranch`
17. `git push`
18. `git switch myBranch`
19. Add `<p> Amazing World!</p>` to index.html file

SETUP FOR REBASE

20. Save the changes CTRL + S
21. `git add .`
22. `git commit -m "updated file"`
23. `git switch main`
24. Add the file about.html with `touch about.html`
25. `git add .`
26. `git commit -m "added a file"`
27. `git merge myBranch`
28. Approve the merge by closing the merge editor

REBASE THE COMMITS

29. `git rebase myBranch`
30. `git push`
31. `git switch myBranch`
32. `git rebase main`

CORRECT A MERGE CONFLICT

33. Add <h1>About Page</h1> to about.html
34.  Save the changes CTRL + S
35. `git add .`
36. `git commit -m "added heading"`
37. git switch main
38. Add <h2>About Page</h2> to about.html
39. Save the changes CTRL + S
40. `git add .`
41. `git commit -m "added heading"`
42. `git merge myBranch` //creates a conflict
43. Select a resolution.
44. Save the changes CTRL + S
45. `git add .`
46. `git commit -m "merged changes"`
47. `git push` //fixed a merge conflict
    
CORRECT A REBASE CONFLICT  

48. `git rebase myBranch`
49. Select a resolution
50. Save the changes CTRL + S
51. `git add .`
52. `git rebase --continue`
53. `git push` //will result in an error
54. `git push --force`

RESTORE A SAVE POINT

55. Select a commit to restore.
56. Copy its id.
57. `git reset--hard id123456789`
58. `git push`
59. `git push --force`