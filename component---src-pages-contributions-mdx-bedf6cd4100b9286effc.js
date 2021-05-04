(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{zeqw:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return h}));var a=n("wx14"),o=n("zLVn"),s=(n("q1tI"),n("7ljp")),r=n("013z"),l=(n("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",t)}},i=c("PageDescription"),b=c("AnchorLinks"),p=c("AnchorLink"),m={_frontmatter:l},u=r.a;function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)(u,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)(i,{mdxType:"PageDescription"},Object(s.b)("p",null,"Use this guide to contribute to the theme. We’ll show you how to get the\ndevelopment environment set up as quickly as possible so you can start\ncontributing.")),Object(s.b)(b,{mdxType:"AnchorLinks"},Object(s.b)(p,{mdxType:"AnchorLink"},"Project setup"),Object(s.b)(p,{mdxType:"AnchorLink"},"Development"),Object(s.b)(p,{mdxType:"AnchorLink"},"Work in a branch"),Object(s.b)(p,{mdxType:"AnchorLink"},"Sass and CSS Modules"),Object(s.b)(p,{mdxType:"AnchorLink"},"VS Code"),Object(s.b)(p,{mdxType:"AnchorLink"},"Test pages"),Object(s.b)(p,{mdxType:"AnchorLink"},"Publishing")),Object(s.b)("h2",null,"Project setup"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Go to\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/carbon-design-system/gatsby-theme-carbon"}),"gatsby-theme-carbon"),"\nand click the ",Object(s.b)("inlineCode",{parentName:"p"},"Fork")," button in the top-right corner.")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"After it’s finished, click on the ",Object(s.b)("inlineCode",{parentName:"p"},"Clone or Download")," button and copy the\ncontents.")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"In your terminal, clone the repo into your directory of choice"))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"git clone [PASTE_URL_HERE]\ncd gatsby-theme-carbon\n")),Object(s.b)("ol",{start:4},Object(s.b)("li",{parentName:"ol"},"When you clone your forked repo the ",Object(s.b)("inlineCode",{parentName:"li"},"origin")," is set to your fork by default.\nYou’ll want to add a remote that points to the upstream repo.")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"git remote add upstream git@github.com:carbon-design-system/gatsby-theme-carbon.git\n")),Object(s.b)("ol",{start:5},Object(s.b)("li",{parentName:"ol"},"In your terminal, verify that the remotes have been set")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"git remote -v\n")),Object(s.b)("h2",null,"Development"),Object(s.b)("p",null,"We use ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://yarnpkg.com/lang/en/docs/install/"}),"yarn")," and yarn workspaces to\ndevelop the Carbon Gatsby theme. This allows us to have a development\nenvironment that’s closely linked to the theme with minimal setup. Run\n",Object(s.b)("inlineCode",{parentName:"p"},"yarn install")," to install all of the projects dependencies."),Object(s.b)("p",null,"This project has two packages: the actual theme package (",Object(s.b)("inlineCode",{parentName:"p"},"gatsby-theme-carbon"),")\nand the ",Object(s.b)("inlineCode",{parentName:"p"},"example")," package. The example package emulates a project which uses the\ntheme. Its only dependencies are Gatsby, React, and the adjacent theme package.\nThe ",Object(s.b)("inlineCode",{parentName:"p"},"example")," package also serves as the theme’s documentation and\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://gatsby-theme-carbon.now.sh"}),"website"),"; it’s deployed on every merge to\nmain."),Object(s.b)("p",null,"New theme development will happen in the theme package while documentation and\ntesting of that change will occur through changes in the example directory."),Object(s.b)("h3",null,"Development scripts"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"yarn dev")," – start the development environment"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"yarn dev:clean")," – clear cache and restart dev"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"yarn format")," – format your code with prettier"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"yarn lint")," - check for errors in your javascript"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"yarn test:prefix")," – build and serve with a path prefix")),Object(s.b)("h2",null,"Work in a branch"),Object(s.b)("p",null,"You should always start a new project by pulling upstream changes into main and\nthen creating a new branch. This workflow ensures you don’t accidentally commit\nanything to your main branch and get stuck when trying to open a pull request."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"git checkout main\ngit pull upstream main\ngit checkout -b my-branch-name\n")),Object(s.b)("h3",null,"Commit messages"),Object(s.b)("p",null,"For commit messages we use\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153#allowed-type"}),"Angular commit conventions"),"\nto dictate whether a commit is for a feature, fix, docs, etc. You need to prefix\nyour commits with one of the following:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"feat (feature)"),Object(s.b)("li",{parentName:"ul"},"fix (bug fix)"),Object(s.b)("li",{parentName:"ul"},"docs (documentation)"),Object(s.b)("li",{parentName:"ul"},"style (formatting, missing semi colons, …)"),Object(s.b)("li",{parentName:"ul"},"refactor"),Object(s.b)("li",{parentName:"ul"},"test (when adding missing tests)"),Object(s.b)("li",{parentName:"ul"},"chore (maintain)")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'git commit -m "chore: this is a test commit message"\n')),Object(s.b)("h3",null,"Opening a Pull request"),Object(s.b)("p",null,"When you’re ready to open a pull request, push to your origin remote."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"git push origin my-branch-name\n")),Object(s.b)("p",null,"You’ll get a message in your terminal with a URL to open up a pull request in\nthe upstream repository. Navigate to that URL and be sure to give a detailed\nsummary of your pull request in the title and body section of the form."),Object(s.b)("h2",null,"Sass and CSS Modules"),Object(s.b)("p",null,"For internal theme components we use\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://sass-lang.com/documentation/syntax"}),"Sass")," and\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/css-modules/css-modules#css-modules"}),"CSS Modules"),". This\nallows us to take advantage of the Carbon Design System resources while not\nworrying about className collisions. By default, each ",Object(s.b)("inlineCode",{parentName:"p"},".scss")," file will be\nsupplied with all of the Carbon Sass\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon/blob/main/packages/components/src/globals/scss/_vars.scss"}),"variables"),":\ncolor, spacing, theme, and motion, as well as type and layout mixins, are\nimported automatically."),Object(s.b)("p",null,"You should colocate your stylesheet with the component(s) that import it. If the\ncomponent is ",Object(s.b)("inlineCode",{parentName:"p"},"TreeView")," then the stylesheet should be ",Object(s.b)("inlineCode",{parentName:"p"},"TreeView.module.scss"),".\nAll contained within the ",Object(s.b)("inlineCode",{parentName:"p"},"TreeView")," directory."),Object(s.b)("h3",null,"CSS Modules"),Object(s.b)("p",null,"You don’t need to prefix your classes as CSS Modules will generate unique class\nnames for you. Import the class from the ",Object(s.b)("inlineCode",{parentName:"p"},".scss")," file."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss",metastring:"path=TreeView.module.scss",path:"TreeView.module.scss"}),".treeView {\n  color: $text-01;\n}\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=TreeView.js",path:"TreeView.js"}),"import { treeView } from './style.css';\n\nconst TreeView = (props) => <div className={treeView} />;\n")),Object(s.b)("p",null,"For conditionally applying class names, use the ",Object(s.b)("inlineCode",{parentName:"p"},"classname")," library. Note how\nwe’re using a\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://tylermcginnis.com/computed-property-names/"}),"computed property name")," for\nthe property being based to ",Object(s.b)("inlineCode",{parentName:"p"},"cx"),". That’s because the className isn’t literally\n",Object(s.b)("inlineCode",{parentName:"p"},'"long"')," it’s a value generated by CSS Modules and placed in the ",Object(s.b)("inlineCode",{parentName:"p"},"long"),"\nvariable."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=TreeView.js",path:"TreeView.js"}),"import cx from 'classname';\nimport { treeView, long } from './style.css';\n\nconst TreeView = (props) => {\n  const className = cx(treeView, {\n    [long]: props.long,\n  });\n  const TreeView = (props) => <div className={className} />;\n};\n")),Object(s.b)("p",null,"If you need to target a global class not processed by CSS Modules, you can do so\nwith the\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/css-modules/css-modules#exceptions"}),"global selector"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),":global(.bx--grid) .codeBlock {\n  @include carbon--type-style('code-01');\n}\n")),Object(s.b)("h2",null,"VS Code"),Object(s.b)("p",null,"To get linting error feedback while writing javascript and SCSS in VS Code,\ninstall the\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint"}),"stylelint"),"\nand\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"}),"ESlint"),"\nextensions. We use ESLint’s Prettier rules to format and lint all of our\nJavaScript in one pass. To get your code to format properly on save, add the\nfollowing to a ",Object(s.b)("inlineCode",{parentName:"p"},".vscode/settings.json")," in the root of your project"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:"path=.vscode/settings.json",path:".vscode/settings.json"}),'{\n  "editor.formatOnSave": true,\n  "[javascript]": {\n    "editor.formatOnSave": false\n  },\n  "[javascriptreact]": {\n    "editor.formatOnSave": false\n  },\n  "eslint.autoFixOnSave": true,\n  "prettier.disableLanguages": ["javascript", "javascriptreact"]\n}\n')),Object(s.b)("p",null,"To lint the entire project and get errors in your ",Object(s.b)("inlineCode",{parentName:"p"},"Problems")," tray, you can add\nthe following to a ",Object(s.b)("inlineCode",{parentName:"p"},".vscode/tasks.json")," file in the root of your project. You\ncan run these tasks with ",Object(s.b)("inlineCode",{parentName:"p"},"cmd+shift+d")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:"path=.vscode/tasks.json",path:".vscode/tasks.json"}),'{\n  "version": "2.0.0",\n  "tasks": [\n    {\n      "type": "npm",\n      "script": "lint:js",\n      "problemMatcher": "$eslint-stylish"\n    },\n    {\n      "type": "npm",\n      "script": "lint:scss",\n      "problemMatcher": {\n        "owner": "stylelint",\n        "fileLocation": ["relative", "${workspaceFolder}"],\n        "pattern": [\n          {\n            "regexp": "^([^\\\\s].*)$",\n            "file": 1\n          },\n          {\n            "regexp": "^\\\\s+(\\\\d+):(\\\\d+)\\\\s+(✖|warning)\\\\s+(.*)\\\\s\\\\s+(.*)$",\n            "line": 1,\n            "column": 2,\n            "severity": 3,\n            "message": 4,\n            "code": 5,\n            "loop": true\n          }\n        ]\n      }\n    }\n  ]\n}\n')),Object(s.b)("h2",null,"Test pages"),Object(s.b)("p",null,"If you want to add examples of what you are working on or see changes you’ve\nmade, you can add an MDX file to ",Object(s.b)("inlineCode",{parentName:"p"},"packages/src/pages/test")," that will be visible\nat ",Object(s.b)("inlineCode",{parentName:"p"},"(your-server-name)/test/(added-file)")," during development. If you do add a\npage to the ",Object(s.b)("inlineCode",{parentName:"p"},"/test")," directory, update the below list with the file you added and\nits purpose to be included with your pull request."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/Think21-Lab-2176/test/spacing-audit"}),Object(s.b)("inlineCode",{parentName:"a"},"Spacing audit")),": use this page to test spacing around\ncomponents when combined in common patterns.")),Object(s.b)("h2",null,"Publishing"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Pull the latest from the main branch, usually by running\n",Object(s.b)("inlineCode",{parentName:"li"},"git pull upstream main")," on your local machine."),Object(s.b)("li",{parentName:"ol"},"From the root of the package run ",Object(s.b)("inlineCode",{parentName:"li"},"yarn release"),"."),Object(s.b)("li",{parentName:"ol"},"Follow the prompts accordingly."),Object(s.b)("li",{parentName:"ol"},"In the project’s\n",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/carbon-design-system/gatsby-theme-carbon/releases"}),"release tab"),",\nedit the new release to include a summary of new changes.")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-contributions-mdx-bedf6cd4100b9286effc.js.map