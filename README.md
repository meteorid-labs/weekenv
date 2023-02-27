
# weekenv 

no more weekend for setting up env in react native.

we know so far managing env for both src rn and native codes are painful, we made it to make it easier.

Currently this package still experimental and under development, but you could use it anyway to get our ideas.



## Roadmap

- Support for ios

- Make env template as package executor (like npx.)


## Features

- Could change package_name and key in native codes
- Changing RN ENV without restarting metro since we use direct js file


# Setup the weekenv
## weekenv template

1. Clone the project

```bash
  git clone https://github.com/meteorid-labs/weekenv
```

2. Go to the project directory

```bash
  cd weekenv
```

3. Install env template builder

```bash
  npm install
```

4. setup target env

```bash
   fs.copy(`./env-template`, `${pwd}/env`);
```
change `${pwd}/env` to your root RN project

5. Run the env setup

```bash
  node index.js
```
it will generate the env template to your RN project

## weekenv runner

1. Customize your /env for your needs
  - constants
  - google-services
  - keystores
  - properties

2. Install env runner

```bash
  npm install
```
3. Apply properties to native code (Android)
  - Edit `android/app/build.gradle` to look like this (without the +):

```diff
...
import com.android.build.OutputFile

+ def keyProperties = new Properties()
+ def keyPropertiesFile = rootProject.file('key.properties')
+ if (keyPropertiesFile.exists()) {
+  keyProperties.load(new FileInputStream(keyPropertiesFile))
+}
...

defaultConfig {
-   applicationId 'com.yourpackagename'
+   applicationId keyProperties['applicationId']
    minSdkVersion rootProject.ext.minSdkVersion
    targetSdkVersion rootProject.ext.targetSdkVersion
    versionCode 4
    versionName "4.0.0"
+   resValue "string", "app_name", keyProperties['appName']
}

...
signingConfigs {
    debug {
        storeFile file('debug.keystore')
        storePassword 'android'
        keyAlias 'androiddebugkey'
        keyPassword 'android'
    }
+    release {
+        storeFile file('app.keystore')
+        storePassword keyProperties['storePassword']
+        keyAlias keyProperties['keyAlias']
+        keyPassword keyProperties['keyPassword']
+    }
}
...
```
the key properties setup in  ```/env/properties```

  - delete android/app/src/main/res/strings.xml


4. Apply properties to native code (IOS)
> WIP
5. run your weekenv, and choose your desired env to code

```bash
  node env/index.js
```
change `env/index.js` to your placed template. 
this script will show your env setup options.
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
