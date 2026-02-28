const modal = new ECModal({title:"Note", content:"This is an incomplete system. Any bugs encountered will be fixed in future updates.", buttonAmount:2, buttonLabels:["OK", "Close"]});
modal.setButtonAction(1, () => {
    modal.setContent("Thank you for your understanding!");
    setTimeout(() => {
        modal.hide();
        setTimeout(() => {
            modal.setContent("This is an incomplete system. Any bugs encountered will be fixed in future updates.");
        }, 200);
    }, 1000);
});
modal.setButtonAction(2, () => modal.hide());
modal.show();

function showNote(){
    modal.show();
}

const topTabs = [
    {title: "Dashboard", icon: "dashboard_icon", click: "dashboard()"},
    {title: "People", icon: "people_icon", click: "people()"},
    {title: "Services and Packages", icon: "package_icon", click: "servicesandpackages()"},
    {title: "Transactions", icon: "transactions_icon", click: "transactions()"},
    {title: "Billing", icon: "billing_icon", click: "billing()"},
    {title: "Reports", icon: "reports_icon", click: "reports()"},
    {title: "Activity Record", icon: "activity_record_icon", click: "activityrecord()"},
];
const bottomTabs = [
    {title: "Settings", icon: "settings_icon", click: "settings()"},
    {title: "Logout", icon: "logout_icon", click: "showNote()"},
];
const pages = [
    "dashboard",
    "people",
    "servicesandpackages",
    "transactions",
    "billing",
    "reports",
    "activityrecord",
    "settings"
];

const topSidebar = document.querySelector(".topsidebar");
const bottomSidebar = document.querySelector(".bottomsidebar");

for (let a = 0; a < topTabs.length; a++){
    const div = document.createElement("div");
    div.setAttribute("style", "user-select: none; -ms-user-select: none; -webkit-user-select: none;");
    if (topTabs[a].click){
        div.setAttribute("onclick", topTabs[a].click);
    }
    div.classList.add("ecbounceanimation-2", "alignItems-center", "gap-12px", "padding-[12px_16px]", "margin-[0_6px]", "backgroundColor-#eee", "hover:backgroundColor-#ddd", "eclisth");
    div.innerHTML = `
    <img src="${topTabs[a].icon}.png" alt="${topTabs[a].icon}" class="width-24px height-24px">
    <p class="margin-0">${topTabs[a].title}</p>`;
    topSidebar.appendChild(div);
}
for (let a = 0; a < bottomTabs.length; a++){
    const div = document.createElement("div");
    div.setAttribute("style", "user-select: none; -ms-user-select: none; -webkit-user-select: none;");
    if (bottomTabs[a].click){
        div.setAttribute("onclick", bottomTabs[a].click);
    }
    div.classList.add("ecbounceanimation-2", "alignItems-center", "gap-12px", "padding-[12px_16px]", "margin-[0_6px]", "backgroundColor-#eee", "hover:backgroundColor-#ddd", "eclisth");
    div.innerHTML = `
    <img src="${bottomTabs[a].icon}.png" alt="${bottomTabs[a].icon}" class="width-24px height-24px">
    <p class="margin-0">${bottomTabs[a].title}</p>`;
    bottomSidebar.appendChild(div);
}

function dashboard(){
    for (let a = 0; a < pages.length; a++){
        document.querySelector("." + pages[a]).classList.add("display-none");
    }
    document.querySelector(".dashboard").classList.remove("display-none");
}

function people(){
    for (let a = 0; a < pages.length; a++){
        document.querySelector("." + pages[a]).classList.add("display-none");
    }
    document.querySelector(".people").classList.remove("display-none");
}

function servicesandpackages(){
    for (let a = 0; a < pages.length; a++){
        document.querySelector("." + pages[a]).classList.add("display-none");
    }
    document.querySelector(".servicesandpackages").classList.remove("display-none");
}

function transactions(){
    for (let a = 0; a < pages.length; a++){
        document.querySelector("." + pages[a]).classList.add("display-none");
    }
    document.querySelector(".transactions").classList.remove("display-none");
}

function billing(){
    for (let a = 0; a < pages.length; a++){
        document.querySelector("." + pages[a]).classList.add("display-none");
    }
    document.querySelector(".billing").classList.remove("display-none");
}

function reports(){
    for (let a = 0; a < pages.length; a++){
        document.querySelector("." + pages[a]).classList.add("display-none");
    }
    document.querySelector(".reports").classList.remove("display-none");
}

function activityrecord(){
    for (let a = 0; a < pages.length; a++){
        document.querySelector("." + pages[a]).classList.add("display-none");
    }
    document.querySelector(".activityrecord").classList.remove("display-none");
}

function settings(){
    for (let a = 0; a < pages.length; a++){
        document.querySelector("." + pages[a]).classList.add("display-none");
    }
    document.querySelector(".settings").classList.remove("display-none");
}