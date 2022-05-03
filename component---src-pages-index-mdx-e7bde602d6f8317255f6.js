(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{pfKO:function(e,a,A){"use strict";A.r(a),A.d(a,"_frontmatter",(function(){return c})),A.d(a,"default",(function(){return m}));var t=A("wx14"),n=A("zLVn"),i=(A("q1tI"),A("7ljp")),r=A("013z"),c=(A("qKvR"),{}),o=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",a)}},s=o("Row"),b=o("Column"),l=o("ArticleCard"),g={_frontmatter:c},p=r.a;function m(e){var a=e.components,A=Object(n.a)(e,["components"]);return Object(i.b)(p,Object(t.a)({},g,A,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Introduction"),Object(i.b)("p",null,"This lab will focus on leveraging the Automation component of the Cloud Pak for Watson AIOPs to improve your efficiency by automating some of the tasks\nthat your organization may be executing manually."),Object(i.b)("p",null,"The lab consists of a few different exercises that will allow you to understand the capabilities to automate key tasks.  Each section of the lab is intended to be independent and\ncan be executed in any order.  The lab exercises include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Provision a virtual machine into the IBM public cloud using the service library.",Object(i.b)("br",{parentName:"li"}),"In this section, you’ll learn how to provision a VM, publish a service to the service library, and modify a service to add additional capabilties.\nOne of the key capabilities is how the “manage services” allow you to combine tools like Terraform and Ansible Tower to achieve more complex automations.\nComplex workflows can be achieved via the Composition page and you’ll learn how to use the drag and drop capabilities."),Object(i.b)("li",{parentName:"ul"},"Provision a virtual machine into a VMware environment using the service library.\nIn this section, you’ll learn how Terraform is leveraged to provision the virtual machine to the public cloud and how parameters are defined and\nexposed in the service. You’ll also see how tags can be defined in the virtual machines and used for other activities such as chargeback reports."),Object(i.b)("li",{parentName:"ul"},"Use Infrastructure Management view detailed information about your containerized environments and setup chargeback reports")),Object(i.b)("h2",null,"Logging into the Environment"),Object(i.b)("p",null,"  Before beginning the exercises, take the following steps to login to the soleil environment and access the lab environment."),Object(i.b)("p",null,"  After opening your browser and logging into the lab, you’ll see an image of a computer.  You will login to this virtual machine and launch a browser to access the lab environment."),Object(i.b)("p",null,"  If the background is green, it means the virtual machine is running.  If it is not running, click the start arrow to start the VM"),Object(i.b)("p",null,"  Once the Virtual Machine is running, click on the picture of the computer to open the desktop."),Object(i.b)("p",null,"  ",Object(i.b)("span",Object(t.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"678px"}}),"\n      ",Object(i.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.93055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/ElEQVQ4y5WT32vTUBTH89+6OXXuB05wT4Phgy8Kgm+CiKgIe9DhsFhQ56Y4p2NtNwvOLbqkTZrmd3KTptnHezNWBvrQXTicXznf870592huGGG6IUr3XI9uz8Huu7hBiOX0K1/F+34wynXtXpVXtuP5lSjbj2K0X5bHxoHFnuliyQKj08G0rArE6Focm8q3q4LfhlnF9GOj8pWtmnRkA6PbrZpqfpzihYL0zyGhbROInDDNCOOYQHZMUkGWDyqdD4pTKQoZy6U9qHJKVFxkOVqUltheyfCojaPrGH6CG2ckUYRjW4RhQFmWCCE4OTkZCefs8zGtHbQxo0MyeYVSJJQDyS4R9CSoLwrKswL4B+B/oh14HbZ0+V+cBD0osJMhWQlhDlEykOwU1CnYOEeL5b0PfZv2j6+027vs/9zD1PflJI9wh55kOBwBjsWwk3XZoc7691c8e9PkxdsGT1e/sdlaYYt1RCkuxrAjLLaKGrXPqzys2Tx+1+PRa4MPjZd84f3FAe3CYY8NtvU6K592ebL2kef1TXaMNVpsk5OhJnI6ljEAmwctFu8vsHznCnfvzbG8dFnqGZZuT7D44JbciP7FGDYaTW7MLzAzPcfs9VkmLk2yMH+TqcmrXJuaxpGboI56i2MBJmlKUQykFMRyO5IkYVgORx+cMRuX4V9tJ9J2v0qXOQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"skytap",title:"skytap",src:"/InfrastructureManagementLab/static/fba067a515bc76bbe7e38b291e6f3431/413af/skytap.png",srcSet:["/InfrastructureManagementLab/static/fba067a515bc76bbe7e38b291e6f3431/7fc1e/skytap.png 288w","/InfrastructureManagementLab/static/fba067a515bc76bbe7e38b291e6f3431/a5df1/skytap.png 576w","/InfrastructureManagementLab/static/fba067a515bc76bbe7e38b291e6f3431/413af/skytap.png 678w"],sizes:"(max-width: 678px) 100vw, 678px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",null,"  If prompted, the login password for the virtual machine is ",Object(i.b)("strong",{parentName:"p"},"“Passw0rd”")),Object(i.b)("p",null,"  For more information on using the soleil environment, scroll towards the bottom of the page."),Object(i.b)("p",null,"  After logging into the virtual machine, launch the Chrome browser.  When Chrome opens, 3 tabs will automatically open.  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The first tab is the lab guide.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The 2nd tab is the Automation component of the Cloud Pak for Watson AIOPs.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The 3rd tab contains a list of student usernames and passwords.  "),Object(i.b)("p",{parentName:"li"},"Then, go to the 3rd tab and lookup your username and password.  "),Object(i.b)("p",{parentName:"li"},"Use that username and password to log into the Automation tools within CP4AIOps.  "),Object(i.b)("p",{parentName:"li"},"When logging in, you will see multiple types of authentication.  Select ",Object(i.b)("strong",{parentName:"p"},"Enterprise LDAP")," as your authentication mechanism.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("span",Object(t.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"815px"}}),"\n      ",Object(i.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"14.583333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvUlEQVQI1yWOy07CQABF+/8fgAb9CDYuwNIAlcCgMRAeNZpIbWemhbZjcRq2xyldnJx77+p6WaZRSqK1QrdWquvO7SZdllKTxAky6XKcar7jlOOPdKSUpqb+a7DW4vVGhn5geHDc+9XN/XHHnW94fD4xGS1YBS+IYI4YTtkcEtZfGcO3nIGoeHq/4G8tVd3gzQ6WMOqY7i1tv7klapjtflkvX4nE0iHYhyHHj0+KvCDLS8r6SmEazsZycS//AR521I5jCpaOAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"newTab",title:"newTab",src:"/InfrastructureManagementLab/static/ebe965a8a72499ed303c39baefd64b80/0c03f/newTab.png",srcSet:["/InfrastructureManagementLab/static/ebe965a8a72499ed303c39baefd64b80/7fc1e/newTab.png 288w","/InfrastructureManagementLab/static/ebe965a8a72499ed303c39baefd64b80/a5df1/newTab.png 576w","/InfrastructureManagementLab/static/ebe965a8a72499ed303c39baefd64b80/0c03f/newTab.png 815w"],sizes:"(max-width: 815px) 100vw, 815px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",{parentName:"li"},"After selecting ",Object(i.b)("strong",{parentName:"p"},"Enterprise LDAP"),", you may see a warning that your connection is not private. This is due to the fact that we are using self-signed certificates.  When you receive this warning, scroll to the bottom of the page and click on the ",Object(i.b)("strong",{parentName:"p"},"Advanced")," button.\n",Object(i.b)("span",Object(t.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"642px"}}),"\n      ",Object(i.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.08333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB4UlEQVQ4y6VUy47UMBDMX3JBQlz4Ji7wDSukPXJG4oAQBy6zk1nITCYPx0lsJ87LKcqONCA0MKC11Oq2Y1dV292JwGE+fsBSSx9iXVc8ZUQeKH71HPL+bgNclgB6zf6FMFqtxZylVFjdZP8T0a9k0TCOkEpDdT2qSqIsSwhRoes6lEKgaVrkWQbD+S2yoHAioChKqFahrmtIKQnSQGsdYqUUBEm8n+cZlhkZ00FThN/T1A3Gcfqp0G9IkgR5XlBJjoxqChKc0zNSmlcc5ucMGS1JjojjA+J9HDLx5CNFXQB9ant+9Pawewibd/T7/QGPh28BwJOcjqcA7oFLEnjwtm0xDENQ6+PVEXAch0ua/zuuPU40T1O4P39H/k4U2Qx9Z8yVA7+BXC0bfnCU6m4dDgtuM7hLvNIWt1lQOFGhlDVTVsFLvpo3wRLa4jasi1ohrwdk0uIkLM6VRUorags7jOjtwCpY2Ckk7vns3TBBc9GwHjXLQmkTyiOUCGNlekjta5Zl1m6+Upu3PN/z/Mwui6BbBDOKng/j3BN7+XGHrhLQRY4pOwGNDJf9tzbzd+7HUS548Ubi5dsaz15LvP86IHLpd/T8QRhRYhZFULtuNXGzzZR1ePfZ4v6Lxd0ni7ic8QN95ooEC2L+pQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"secure",title:"secure",src:"/InfrastructureManagementLab/static/2103eb8c95e2f878659e2c5e5d7bdfc6/20333/secure.png",srcSet:["/InfrastructureManagementLab/static/2103eb8c95e2f878659e2c5e5d7bdfc6/7fc1e/secure.png 288w","/InfrastructureManagementLab/static/2103eb8c95e2f878659e2c5e5d7bdfc6/a5df1/secure.png 576w","/InfrastructureManagementLab/static/2103eb8c95e2f878659e2c5e5d7bdfc6/20333/secure.png 642w"],sizes:"(max-width: 642px) 100vw, 642px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," "),Object(i.b)("p",{parentName:"li"},"Then, at the very bottom of the page, click on the link.\n",Object(i.b)("span",Object(t.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"694px"}}),"\n      ",Object(i.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWklEQVQoz42Qy27bMBBF/btd9Qf6N1l0W6SrfEW6KFDUlmzraYuSLFkSRb1Ph3SQ7IISOJg7Q+Lykrtt2xjHEWMMwzCwLAt29hmwMcwrL78NP38Znl8NabVg184esGZt26G1dob/s/oJvv3o+Pr9zpenitdg+jC0CSfHxCgpbW+rTdx1HU3TyoUPdKep67ubL6aFdXi/xHrtlnkmjiLCMCKJE9IkkT522nL0j/gHz+2fT2fCIMSXmSez/d4jCCLKsmKZ3568imte3lBFyTXLXS2rmqv60CovXLXnMtE3m7CXb9K9o7o3TOv29uReM5WKscwZ8oyxUMy3QnrltJ3p7IKROkhv1JVJ9mnvbE3toH2wraskTEOyv3/Ijj7q6HE57Ll6B9G+07cwoEkTqigUAuo4eteWMjhRX1K25AxDLwmrAh2e6OIQLXRx4KpOHv0qSZEzn1OCEtN54h/cC2B28hlH5QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"secure2",title:"secure2",src:"/InfrastructureManagementLab/static/76444f69324e9cd5746fbf35ac56af60/69e99/secure2.png",srcSet:["/InfrastructureManagementLab/static/76444f69324e9cd5746fbf35ac56af60/7fc1e/secure2.png 288w","/InfrastructureManagementLab/static/76444f69324e9cd5746fbf35ac56af60/a5df1/secure2.png 576w","/InfrastructureManagementLab/static/76444f69324e9cd5746fbf35ac56af60/69e99/secure2.png 694w"],sizes:"(max-width: 694px) 100vw, 694px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",{parentName:"li"},"Then you will see the login prompt asking for your ",Object(i.b)("strong",{parentName:"p"},"username")," and ",Object(i.b)("strong",{parentName:"p"},"password"),"."),Object(i.b)("p",{parentName:"li"},"Using the information from the 3rd tab in your browser, specify your ",Object(i.b)("strong",{parentName:"p"},"username")," and ",Object(i.b)("strong",{parentName:"p"},"password"),"."),Object(i.b)("p",{parentName:"li"},"The first time that you login, you will see a ",Object(i.b)("strong",{parentName:"p"},"welcome")," screen that allows you to take a guided tour.  You can either follow the guided tour or you can cancel by clicking the ",Object(i.b)("strong",{parentName:"p"},"X")," in the upper right corner.\n",Object(i.b)("span",Object(t.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"643px"}}),"\n      ",Object(i.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"72.22222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACR0lEQVQ4y51Sz2sTQRSeJAgBs9lN9sfMzu7sZjfNQgzmoCaW4iGlehN6MEiPFbzqSfDkrSi0ehBEhHoTLIiCIqJF6B/gVcST4H/y+d6E9lRp9fAxb9/O+977vjdCSgkZRQiCAOfHlzC9PINMM8RaI6Jc6HlQaYq4X0JlGVSSQDI4pjzXRsQx0SGupSEEJ+ylooe19bvYuPUYeVFBywj5cIh8ugzV60EqhSgMEfhdSGqksh41qSDDgAgVCrpfyYAIaRKZ95DnBpt3nuLe1j6qaohQSeTLK+ivrCKJY0TUOKOpZqtrSMsBTWlg1VmFIUIZw1eGCGk6VZa2IE0UTEYNaKKYYCV3PMREmKYJRqMR5jc3MJlMoYiIayIik3ECbZagdAbBP6xHZQFpDMkrEHMTtoKIFqAmOl0QzucYj8c0Gf0nG2JTQmcDG7Mlotvtwm276HQ64LhLp0eL4JhzFhR7fki25JY0CHyyhBaS9Emqtr6GpIYXK1zXs+weSWMip+3A9324rntEzt9O6yyEEBa1mkDjTBP1et3Gi7OGRqMBwSvnrgVtmU03JqUzx5A2XBYFCrJiaVBZ4w8J/wYmFSwpSQ0Mgb3TibYTcy4m7xLK2TdJT0PrBAE/HV4Wecy2cGyJDgmbzeaRX22S22q1rFzH4dixkhmcP9WEJ106vvB41Ov/SXgCTneRN8nnjc37eHvwC7vvvuHVp+/Y2/+J159/4M3Bb1y8cv3fCa+u38bO7hc8eLKHrWfv8ejFRzx8/gHbL7/i3IUZ/gBRc2tYmgtsCQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cancelTour",title:"cancelTour",src:"/InfrastructureManagementLab/static/44e1b26198b1e904aa14e828a9b9ad62/9d1cd/cancelTour.png",srcSet:["/InfrastructureManagementLab/static/44e1b26198b1e904aa14e828a9b9ad62/7fc1e/cancelTour.png 288w","/InfrastructureManagementLab/static/44e1b26198b1e904aa14e828a9b9ad62/a5df1/cancelTour.png 576w","/InfrastructureManagementLab/static/44e1b26198b1e904aa14e828a9b9ad62/9d1cd/cancelTour.png 643w"],sizes:"(max-width: 643px) 100vw, 643px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," "))),Object(i.b)("h2",null,"Begin the Exercises"),Object(i.b)("p",null,"After completing the Login section, use the other links to go directly to one of the lab exercises.  The exercises can be run in any order."),Object(i.b)("p",null,"Select one of the lab exercises in the upper left corner or select one of the images below."),Object(i.b)(s,{mdxType:"Row"},Object(i.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(l,{color:"dark",subTitle:"Automation with VMware",title:"Want to learn how to automate infrastructure management in VMWare vSphere?",href:"/tutorials/vmware",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAHi1kpOTYr/xAAZEAADAAMAAAAAAAAAAAAAAAAAAQIDETH/2gAIAQEAAQUChIudIVOR5Loff//EABYRAQEBAAAAAAAAAAAAAAAAABEQIf/aAAgBAwEBPwE1n//EABYRAQEBAAAAAAAAAAAAAAAAABEBEP/aAAgBAgEBPwFIZ//EABkQAAIDAQAAAAAAAAAAAAAAAAAhAQIQEf/aAAgBAQAGPwJjzsDtOf/EABkQAQEBAAMAAAAAAAAAAAAAAAEhABAxUf/aAAgBAQABPyFRnkJJkuIOw0RgxvF//9oADAMBAAIAAwAAABDHH//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQMBAT8Q29IXL//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQIBAT8QzwSF/8QAGRABAAMBAQAAAAAAAAAAAAAAAQARIUFR/9oACAEBAAE/ENkrTDsKoK0mHKRl6axiOfAVSeRan//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"multi cloud",title:"multi cloud",src:"/InfrastructureManagementLab/static/c9b7861020998cb44c77fb3492a3e5ec/2e753/multi-cloud.jpg",srcSet:["/InfrastructureManagementLab/static/c9b7861020998cb44c77fb3492a3e5ec/69549/multi-cloud.jpg 288w","/InfrastructureManagementLab/static/c9b7861020998cb44c77fb3492a3e5ec/473e3/multi-cloud.jpg 576w","/InfrastructureManagementLab/static/c9b7861020998cb44c77fb3492a3e5ec/2e753/multi-cloud.jpg 1152w","/InfrastructureManagementLab/static/c9b7861020998cb44c77fb3492a3e5ec/040c5/multi-cloud.jpg 1200w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(l,{color:"dark",subTitle:"Automation with the Public Cloud",title:"Want to learn how to automate infrastructure management in Public clouds?",href:"/tutorials/ibmcloud",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAQL/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQT/2gAMAwEAAhADEAAAAeU3seeAWBX/xAAbEAACAQUAAAAAAAAAAAAAAAABAgMABBAiMf/aAAgBAQABBQLU1JbY4oJDyQKzf//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhNh/9oACAEDAQE/AVhfE//EABgRAAIDAAAAAAAAAAAAAAAAAAABERNR/9oACAECAQE/AZ0qZ//EABsQAAICAwEAAAAAAAAAAAAAAAABETECAxAS/9oACAEBAAY/AoeKZOviLPVSf//EABoQAAIDAQEAAAAAAAAAAAAAAAABESExQVH/2gAIAQEAAT8haTaNoqbpXhhURWyRLREj6Qj/2gAMAwEAAgADAAAAEAcf/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARIVH/2gAIAQMBAT8QSN4nV2f/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAECAQE/EFeCuo//xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhMUGBkdH/2gAIAQEAAT8QuH+ACdkW2Hlez7EUiUkL20rtceRJhLSTSRWDFz//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"public cloud",title:"public cloud",src:"/InfrastructureManagementLab/static/24b0863c3ee7a3421e3c87a052448094/2e753/public-cloud.jpg",srcSet:["/InfrastructureManagementLab/static/24b0863c3ee7a3421e3c87a052448094/69549/public-cloud.jpg 288w","/InfrastructureManagementLab/static/24b0863c3ee7a3421e3c87a052448094/473e3/public-cloud.jpg 576w","/InfrastructureManagementLab/static/24b0863c3ee7a3421e3c87a052448094/2e753/public-cloud.jpg 1152w","/InfrastructureManagementLab/static/24b0863c3ee7a3421e3c87a052448094/040c5/public-cloud.jpg 1200w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(l,{color:"dark",subTitle:"Managing chargeback",title:"Do you want to create and execute a chargeback report on the VM and container workloads?",href:"/tutorials/Chargeback",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAYdnu1xYVA//xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIREhMhMf/aAAgBAQABBQKDVvzGyLsfTYf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwGH/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAEhUXEREv/aAAgBAQAGPwJK6OwYPDy7klH/xAAcEAEAAwACAwAAAAAAAAAAAAABABEhQWExcZH/2gAIAQEAAT8h4qcavI6T4YjdkU/jxFIQDRRVR3sUp7Tor1k//9oADAMBAAIAAwAAABAUH//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/EKr/xAAXEQADAQAAAAAAAAAAAAAAAAAAARFB/9oACAECAQE/EHsjP//EAB0QAQACAgMBAQAAAAAAAAAAAAERIQAxUWFxQaH/2gAIAQEAAT8QfMHQvfX7hpxF6UgXfZD7WXSJg2UMGzc7wRERFKWQl4tINoarLAcd5NvnyaeGf//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"prereqs",title:"prereqs",src:"/InfrastructureManagementLab/static/0efc2e819bc8b55fa24b4d70cd67db29/2e753/prereqs.jpg",srcSet:["/InfrastructureManagementLab/static/0efc2e819bc8b55fa24b4d70cd67db29/69549/prereqs.jpg 288w","/InfrastructureManagementLab/static/0efc2e819bc8b55fa24b4d70cd67db29/473e3/prereqs.jpg 576w","/InfrastructureManagementLab/static/0efc2e819bc8b55fa24b4d70cd67db29/2e753/prereqs.jpg 1152w","/InfrastructureManagementLab/static/0efc2e819bc8b55fa24b4d70cd67db29/040c5/prereqs.jpg 1200w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(i.b)("hr",null))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-e7bde602d6f8317255f6.js.map