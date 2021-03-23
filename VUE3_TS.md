[toc]

# VUE3 + TypeScript

## 一、TS 快速上手

### 1. TypeScript 的介绍

- TS 包含 JS，ES6
- 包含：Interfaces, Strongly, Typed Generics
- 不能直接被浏览器解析，需要用自己的编译器编译

### 2. TypeScript 的安装

运行以下命令，全局安装TS：

```sh
npm install -g typescript
```

检测是否安装成功：

```sh
tsc -v
```

### 3. 第一个 TypeScript 程序

####  手动编译（TypeScript_Intro）

- 使用 `tsc`命令进行编译
- `ts`文件编译出为`js`文件

```sh
tsc .\xxx.ts
```

#### VS Code 自动编译（Auto_Compile）

```sh
tsc --init
```

> 对 tsconfig.json 文件进行修改

```json
1） 生成配置文件 tsconfig.json
	tsc -- init
2) 修改 tsconfig.json
	"outDir": "./js",
    "strict": false
3) 启动监视任务
	终端 -> 运行任务 -> 监视 tsconfig.json
```



```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                         /* Enable incremental compilation */
    "target": "es5",                                /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                           /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                                   /* Specify library files to be included in the compilation. */
    // "allowJs": true,                             /* Allow javascript files to be compiled. */
    // "checkJs": true,                             /* Report errors in .js files. */
    // "jsx": "preserve",                           /* Specify JSX code generation: 'preserve', 'react-native', 'react', 'react-jsx' or 'react-jsxdev'. */
    // "declaration": true,                         /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                      /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                           /* Generates corresponding '.map' file. */
    // "outFile": "./",                             /* Concatenate and emit output to single file. */
    // "outDir": "./",                              /* Redirect output structure to the directory. */
    
    "outDir": "./js",                              /* 把 ts 文件最终编译后放在js的目录中 */

    // "rootDir": "./",                             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                           /* Enable project compilation */
    // "tsBuildInfoFile": "./",                     /* Specify file to store incremental compilation information */
    // "removeComments": true,                      /* Do not emit comments to output. */
    // "noEmit": true,                              /* Do not emit outputs. */
    // "importHelpers": true,                       /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,                  /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,                     /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    // "strict": true,                                 /* Enable all strict type-checking options. */
    
    "strict": false,                                 /* 不使用严格模式 */

    // "noImplicitAny": true,                       /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                    /* Enable strict null checks. */
    // "strictFunctionTypes": true,                 /* Enable strict checking of function types. */
    // "strictBindCallApply": true,                 /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,        /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                      /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                        /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                      /* Report errors on unused locals. */
    // "noUnusedParameters": true,                  /* Report errors on unused parameters. */
    // "noImplicitReturns": true,                   /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,          /* Report errors for fallthrough cases in switch statement. */
    // "noUncheckedIndexedAccess": true,            /* Include 'undefined' in index signature results */
    // "noPropertyAccessFromIndexSignature": true,  /* Require undeclared properties from index signatures to use element accesses. */

    /* Module Resolution Options */
    // "moduleResolution": "node",                  /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                             /* Base directory to resolve non-absolute module names. */
    // "paths": {},                                 /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                              /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                             /* List of folders to include type definitions from. */
    // "types": [],                                 /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,        /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                        /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,                    /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,                /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                            /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                               /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                     /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                       /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,              /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,               /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "skipLibCheck": true,                           /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true        /* Disallow inconsistently-cased references to the same file. */
  }
}

```

#### 类型注解 （Type annotations）

```typescript
// 类型注解：一种轻量级的为函数或者变量添加的约束

(()=>{
    // str 是 string 类型
    function showMsg(str:string) {
        return '床前明月光' + str
    }
    let msg = '疑是地上霜'

    // msg 是一个数组
    // let msg = [10, 20, 30]

    // 如果是数组的类型，就会出错
    console.log(showMsg(msg))
})()
```

#### 接口（Interface）

```typescript
// 接口：一种能力，一种约束

(()=>{
    // 定义一个接口
    interface IPerson{
        firstName:string    // 姓氏
        lastName:string     // 名字
    }

    // 输出姓名
    function showFullName(person:IPerson) {
        return person.firstName + '_' + person.lastName
    }

    // 定义一个对象
    const person = {
        firstName: '东方',
        lastName: '不败'
    }

    console.log(showFullName(person))
})()
```

#### 类

```typescript
// ts 中书写 js 中的类

(()=>{
    // 定义一个接口
    interface IPerson{
        firstName:string    // 姓氏
        lastName:string     // 名字
    }

    // 定义一个类
    class Person {
        // 定义公共姿端（属性）
        firstName:string
        lastName:string
        fullName:string
        // 定义一个构造器函数
        constructor(firstName:string, lastName:string) {
            // 更新属性数据
            this.firstName = firstName
            this.lastName = lastName
            // 姓名
            this.fullName = this.firstName + '_' + this.lastName
        }
    }

    // 定义一个函数
    function showFullName(person:IPerson) {
        return person.firstName + '_' + person.lastName
    }

    // 实例化对象
    const person = new Person('诸葛', '孔明')

    console.log(showFullName(person))
})()
```

### 4. 使用 webpack 大包 TS

> 细节：https://24kcs.github.io/vue3_study/chapter1/04_webpack%E6%89%93%E5%8C%85.html#%E4%B8%8B%E8%BD%BD%E4%BE%9D%E8%B5%96

- 完成 \build  \src  \public 中文件
- 进行配置

```sh
npm init -y
```

```sh
tsc --init
```

- 下载依赖

> 需要注意三个包的版本问题

```sh
npm install -D webpack@4.41.5 webpack-cli@3.3.10 webpack-dev-server@3.10.2
```



- 配置打包命令

```json
package.json
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.config.js",
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  },
```

## 二、TypeScript 基本语法







# Github Problem

问题：

```sh
fatal: unable to access 'https://github.com/SimonCK666/TS_Vue3.git/': Unsupported proxy syntax in 'proxyaddress:port'
```

尝试解决：

```sh
git config --global http.sslBackend "openssl"
git config --global http.sslCAInfo "D:\Git\mingw64\ssl\cert.pem"
```

解决

```sh
git config --global http.proxy http://proxyuser:proxypwd@proxy.server.com:8080
git config --global --unset http.proxy
git config --global --get http.proxy
git push -u origin main
```



