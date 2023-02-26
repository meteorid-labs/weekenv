
# weekenv 

no more weekend for setting up env in react native.

we know so far managing env for both src rn and native codes are painful, we made it to make it easier.

Currently this package still experimental and under development, but you could use it anyway to get our ideas.



## Roadmap

- Support for ios

- Make it as package executor (like npx)


## Features

- Could change package_name and key in native codes
- Changing RN ENV without restarting metro since we use direct js file


## Install the weekenv
### weekenv template

Clone the project

```bash
  git clone https://github.com/meteorid-labs/weekenv
```

Go to the project directory

```bash
  cd weekenv
```

Install env template builder

```bash
  npm install
```

setup target env

```bash
   fs.copy(`./env-template`, `${pwd}/env`);
```
change `${pwd}/env` to your root RN project

Run the env setup

```bash
  node index.js
```
it will generate the env template to your RN project

### weekenv runner

Customize your /env for your needs

- constants
- google-services
- keystores
- properties

Install env runner

```bash
  npm install
```

Change your env

```bash
  node env/index.js
```
change `env/index.js` to your placed template

it will show your env setup options 
```bash

     _-----_     
    |       |    ╭──────────────────────────╮
    |--(o)--|    │ weekenv. No more weekend │
   `---------´   │      for setup env!!     │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |     
   __'.___.'__   
 ´   `  |° ´ Y ` 

? Please choose environment (Use arrow keys)
❯ dev 
  prod
```
choose one and the magic will happen to you