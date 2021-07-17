## Disclaimer
This repository is for learning purposes only.

Based on Capstone project Contact Book from https://www.learn-clojurescript.com

___

https://gitlab.hive.thyth.com/thyth/cursive-shadow-cljs/-/blob/master/README.md

I found this to be very useful to understand Cursive config with IntelliJ

# Setting up shadow-cljs with Cursive Clojure (IntelliJ)

* Based on https://ghufran.posthaven.com/setting-up-a-reagent-clojurescript-project-with-shadow-cljs-and-cursive
    * With some corrections, and not loading the reagent dependency

## Steps

### Install Pre-requisites (macOS)

- Verify offical ClojureScript Quick Start works: https://clojurescript.org/guides/quick-start
    - Run `brew install clojure/tools/clojure`
- Install NPM
    - Run `brew install npm`
- Install Cursive Clojure plugin into IntelliJ

### Create project
- Create project directory
    - `mkdir <project>`
    - `cd <project>`
- Create an empty `package.json` (NPM)
    - `echo {} > package.json`
- Install shadow-cljs
    - `npm install shadow-cljs`
- Create directories for build output
    - `mkdir -p public/scripts`
- Create `public/index.html` with the specified contents:
```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Cursive Shadow CLJS Hello World</title>
		<meta charset="utf-8" />
	</head>
	<body>
		<script src="scripts/core.js"></script>
	</body>
</html>
```
- Create directories for source code:
    - `mkdir -p src/<app name>`
- Create core ClojureScript namespace with `-main` entry-point in `src/<app name>/core.cljs` with specified contents:
```clojure
(ns <app-name>.core)

(defn -main []
  (println "Hello world!"))
```
- Configure `shadow-cljs` with build instructions
```clojure
;; shadow-cljs configuration
{:source-paths ["src"]
 :dev-http {8081 "public"}
 :nrepl {:port 55555}

 :dependencies []

 :builds {:app {:target     :browser
                :output-dir "public/scripts/"
                :asset-path "/scripts/"
                :modules    {:core {:init-fn <app-name>.core/-main}}}}}

```

### Import project into IntelliJ/Cursive

- Use `shadow-cljs` to emit Maven pom file
    - `npx shadow-cljs pom`
- In IntelliJ, use `Open / Import` to select the pom file; select `Open as project`

### Configure and run Cursive REPL

- Add new Clojure REPL of "Remote" type to IntelliJ Run Configurations (named `shadow-cljs REPL`)
    - Connection type: nREPL
    - Use port from nREPL file
        - Project: `<project>`
        - Use standard port file (includes `.shadow-cljs/nrepl.port` by default)
- Run shadow-cljs in the background
    - `npx shadow-cljs watch :app`
- Launch `shadow-cljs REPL`
    - Verify `shadow-cljs` is watching the app: `(shadow/watch :app)` => `:already-watching`
    - Switch from Clojure to shadow ClojureScript REPL: `(shadow/repl :app)`
- Connect web browser to `shadow-cljs` server:
    - http://localhost:8081/
- Verify functionality of browser REPL:
    - `(js/alert "Hi from shadow-cljs")`
