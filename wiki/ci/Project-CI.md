# CI history


## apps

### git add submodule

```bash
# create an app 
cd apps && tsai new some-apps

cd some-apps 

git add README.md
git branch -M main
git commit -am 'ci: first init'
git remote add origin url
git push -u origin main

# cd mono-root
cd ../../
git submodule add git-url ./apps/some-app


```

### audio-ws

- [x]package script test passed at clear project source(version:0.1.0)


## Library 


##