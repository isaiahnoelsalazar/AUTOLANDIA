let darkMode = false;

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
showNote();

function showNote(){
    modal.setTitle("Note");
    modal.setContent("This is an incomplete system. Any bugs encountered will be fixed in future updates.");
    modal.resetButtons({buttonAmount: 2, buttonLabels: ["OK", "Close"]});
    modal.setButtonAction(1, () => {
        modal.setContent("Thank you for your understanding!");
        modal.resetButtons({buttonAmount: 1, buttonLabels: ["Close"]});
        modal.setButtonAction(1, () => modal.hide());
        setTimeout(() => {
            modal.hide();
            setTimeout(() => {
                modal.setContent("This is an incomplete system. Any bugs encountered will be fixed in future updates.");
            }, 200);
        }, 1000);
    });
    modal.setButtonAction(2, () => modal.hide());
    modal.show();
}

function toggleDarkMode(){
    if (darkMode){
        modal.disableDarkMode();
        document.body.classList.remove("darkMode");
        const topsidebarImg = document.querySelectorAll(".topsidebar img");
        topsidebarImg.forEach(img => {
            img.src = img.src.replace("_dark", "");
        });
        const bottomsidebarImg = document.querySelectorAll(".bottomsidebar img");
        bottomsidebarImg.forEach(img => {
            img.src = img.src.replace("_dark", "");
        });
        darkMode = false;
    } else {
        modal.enableDarkMode();
        document.body.classList.add("darkMode");
        const topsidebarImg = document.querySelectorAll(".topsidebar img");
        topsidebarImg.forEach(img => {
            img.src = img.src.replace(".png", "_dark.png");
        });
        const bottomsidebarImg = document.querySelectorAll(".bottomsidebar img");
        bottomsidebarImg.forEach(img => {
            img.src = img.src.replace(".png", "_dark.png");
        });
        darkMode = true;
    }
}

function showSettings(){
    modal.setTitle("Settings");
    modal.setContent(new ECToggle({content: "Enable dark mode", click: "toggleDarkMode()", initialState: darkMode}));
    modal.resetButtons({buttonAmount: 1, buttonLabels: ["Close"]});
    modal.setButtonAction(1, () => modal.hide());
    modal.show();
}

const topTabs = [
    {title: "Dashboard", icon: "dashboard_icon", click: "dashboard()"},
    {title: "People", icon: "people_icon", click: "people()"},
    {title: "Services and Packages", icon: "services_and_packages_icon", click: "servicesandpackages()"},
    {title: "Transactions", icon: "transactions_icon", click: "transactions()"},
    {title: "Billing", icon: "billing_icon", click: "billing()"},
    {title: "Reports", icon: "reports_icon", click: "reports()"},
    {title: "Activity Record", icon: "activity_record_icon", click: "activityrecord()"},
];
const bottomTabs = [
    {title: "Settings", icon: "settings_icon", click: "showSettings()"},
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
];

const topSidebar = document.querySelector(".topsidebar");
const bottomSidebar = document.querySelector(".bottomsidebar");

for (let a = 0; a < topTabs.length; a++){
    const div = document.createElement("div");
    div.setAttribute("style", "user-select: none; -ms-user-select: none; -webkit-user-select: none;");
    if (topTabs[a].click){
        div.setAttribute("onclick", topTabs[a].click);
    }
    div.classList.add("cursor-pointer", "ecbounceanimation-2", "alignItems-center", "gap-12px", "padding-[12px_16px]", "margin-[0_6px]", "backgroundColor-#eee", "hover:backgroundColor-#ddd", "eclisth");
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
    div.classList.add("cursor-pointer", "ecbounceanimation-2", "alignItems-center", "gap-12px", "padding-[12px_16px]", "margin-[0_6px]", "backgroundColor-#eee", "hover:backgroundColor-#ddd", "eclisth");
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

const peopleTabPages = [
    "peopletab-employees",  
    "peopletab-customers",  
    "peopletab-vehicles",  
    "peopletab-useraccounts",  
];

const servicesAndPackagesTabPages = [
    "servicesandpackagestab-services",  
    "servicesandpackagestab-packages",  
];

function switchPeopleTab(index){
    const activeTab = document.querySelector(".peopletab-active");
    activeTab.classList.remove("peopletab-active");
    activeTab.classList.add("peopletab-inactive");
    for (let a = 0; a < peopleTabPages.length; a++){
        document.querySelector("." + peopleTabPages[a]).classList.add("display-none");
    }
    const inactiveTabs = document.querySelectorAll(".peopletab-inactive");
    for (let a = 0; a < inactiveTabs.length; a++){
        if (a == index){
            inactiveTabs[a].classList.remove("peopletab-inactive");
            inactiveTabs[a].classList.add("peopletab-active");
            document.querySelector("." + peopleTabPages[a]).classList.remove("display-none");
            break;
        }
    }
}

function switchServicesAndPackagesTab(index){
    const activeTab = document.querySelector(".servicesandpackagestab-active");
    activeTab.classList.remove("servicesandpackagestab-active");
    activeTab.classList.add("servicesandpackagestab-inactive");
    for (let a = 0; a < servicesAndPackagesTabPages.length; a++){
        document.querySelector("." + servicesAndPackagesTabPages[a]).classList.add("display-none");
    }
    const inactiveTabs = document.querySelectorAll(".servicesandpackagestab-inactive");
    for (let a = 0; a < inactiveTabs.length; a++){
        if (a == index){
            inactiveTabs[a].classList.remove("servicesandpackagestab-inactive");
            inactiveTabs[a].classList.add("servicesandpackagestab-active");
            document.querySelector("." + servicesAndPackagesTabPages[a]).classList.remove("display-none");
            break;
        }
    }
}

const sample_employee_data = [
    "1<SEP>TOKAI TEIO<SEP>2026-02-28 08:00:00 AM<SEP>2026-02-28 05:00:00 PM",
    "2<SEP>SYMBOLI RUDOLF<SEP>2026-02-28 11:00:00 AM<SEP>",
    "3<SEP>ASTON MACHAN<SEP><SEP>",
];

const sample_customer_data = [
    "1<SEP>DAIWA SCARLET<SEP>",
    "2<SEP>VODKA<SEP>DAZ 6216",
];

const sample_vehicle_data = [
    "1<SEP>MITSUBISHI<SEP>XPANDER<SEP>L<SEP>DAZ 6216<SEP>Vodka",
    "2<SEP>TOYOTA<SEP>ALPHARD<SEP>XL<SEP>DAZ 6217<SEP>",
];

const sample_services_data = [
    "S_BWV<SEP>BODY WASH AND VACUUM<SEP>₱140.00<SEP>₱160.00<SEP>₱180.00<SEP>₱200.00<SEP>₱250.00<SEP>AVAILABLE",
    "S_AA<SEP>ARMOR ALL<SEP>₱140.00<SEP>₱140.00<SEP>₱140.00<SEP>₱140.00<SEP>₱200.00<SEP>AVAILABLE",
];

const sample_packages_data = [
    "P_B<SEP>BASIC<SEP>WASH, ARMOR ALL, HAND WAX, UNDER WASH<SEP>₱1000.00<SEP>₱1100.00<SEP>₱1200.00<SEP>₱1300.00<SEP>₱1600.00<SEP>AVAILABLE",
];

const sample_transactions_data = [
    "1<SEP>SYMBOLI RUDOLF<SEP>[PACKAGE] - Superior, L<NL>[SERVICE] - S_SCCR, SCCI<SEP>DAZ 6216<SEP>1<SEP>2026-02-28 02:00:00 PM<SEP>2026-02-28 02:00:00 PM",
];

const sample_billing_data = [
    "1<SEP>₱1000.00<SEP>₱0.00<SEP>2<SEP>2026-02-28 02:00:00 PM<SEP>2026-02-28 02:00:00 PM",
];

const sample_activityrecord_data = [
    "2026-03-01 08:00:00 AM<SEP>Employee [TOKAI, TEIO] timed in.",
];

function renderEmployeePage(){
    const page = document.querySelector(".peopletab-employees");
    const table = document.createElement("table");
    table.classList.add("ectable");
    const thead = document.createElement("thead");
    thead.innerHTML = `
    <tr>
        <th>Name</th>
        <th>Time In</th>
        <th>Time Out</th>
    </tr>`;
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    for (let a = 0; a < sample_employee_data.length; a++){
        const data = sample_employee_data[a].split("<SEP>");
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${data[1]}</td>
        <td>${data[2] ? data[2] : `<button class="border-none borderRadius-6px width-100% backgroundColor-green hover:backgroundColor-darkGreen color-white padding-[12px_16px] ecbounceanimation-2 cursor-pointer">Time In</button>`}</td>
        <td>${data[3] ? data[3] : !data[2] ? `<button class="border-none borderRadius-6px width-100% backgroundColor-#eee padding-[12px_16px] cursor-pointer">Time Out</button>` : `<button class="border-none borderRadius-6px width-100% backgroundColor-#CC0000 hover:backgroundColor-darkRed color-white padding-[12px_16px] ecbounceanimation-2 cursor-pointer">Time Out</button>`}</td>`;
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    page.appendChild(table);
}

function renderCustomerPage(){
    const page = document.querySelector(".peopletab-customers");
    const table = document.createElement("table");
    table.classList.add("ectable");
    const thead = document.createElement("thead");
    thead.innerHTML = `
    <tr>
        <th>Name</th>
        <th>Owned Vehicle Plate Numbers</th>
    </tr>`;
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    for (let a = 0; a < sample_customer_data.length; a++){
        const data = sample_customer_data[a].split("<SEP>");
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${data[1]}</td>
        <td>${data[2] ? data[2] : "None"}</td>`;
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    page.appendChild(table);
}

function renderVehiclePage(){
    const page = document.querySelector(".peopletab-vehicles");
    const table = document.createElement("table");
    table.classList.add("ectable");
    const thead = document.createElement("thead");
    thead.innerHTML = `
    <tr>
        <th>Brand</th>
        <th>Model</th>
        <th>Size</th>
        <th>Plate Number</th>
        <th>Owner Name</th>
    </tr>`;
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    for (let a = 0; a < sample_vehicle_data.length; a++){
        const data = sample_vehicle_data[a].split("<SEP>");
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${data[1]}</td>
        <td>${data[2]}</td>
        <td>${data[3]}</td>
        <td>${data[4]}</td>
        <td>${data[5] ? data[5] : "None"}</td>`;
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    page.appendChild(table);
}

function renderServicesPage(){
    const page = document.querySelector(".servicesandpackagestab-services");
    const table = document.createElement("table");
    table.classList.add("ectable");
    const thead = document.createElement("thead");
    thead.innerHTML = `
    <tr>
        <th>Name</th>
        <th>S</th>
        <th>M</th>
        <th>L</th>
        <th>XL</th>
        <th>XXL</th>
        <th>Status</th>
    </tr>`;
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    for (let a = 0; a < sample_services_data.length; a++){
        const data = sample_services_data[a].split("<SEP>");
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${data[1]}</td>
        <td>${data[2]}</td>
        <td>${data[3]}</td>
        <td>${data[4]}</td>
        <td>${data[5]}</td>
        <td>${data[6]}</td>
        <td>${data[7]}</td>`;
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    page.appendChild(table);
}

function renderPackagesPage(){
    const page = document.querySelector(".servicesandpackagestab-packages");
    const table = document.createElement("table");
    table.classList.add("ectable");
    const thead = document.createElement("thead");
    thead.innerHTML = `
    <tr>
        <th>Name</th>
        <th>Services Included</th>
        <th>S</th>
        <th>M</th>
        <th>L</th>
        <th>XL</th>
        <th>XXL</th>
        <th>Status</th>
    </tr>`;
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    for (let a = 0; a < sample_packages_data.length; a++){
        const data = sample_packages_data[a].split("<SEP>");
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${data[1]}</td>
        <td>${data[2]}</td>
        <td>${data[3]}</td>
        <td>${data[4]}</td>
        <td>${data[5]}</td>
        <td>${data[6]}</td>
        <td>${data[7]}</td>
        <td>${data[8]}</td>`;
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    page.appendChild(table);
}

function renderTransactionsPage(){
    const page = document.querySelector(".transactions");
    const table = document.createElement("table");
    table.classList.add("ectable");
    const thead = document.createElement("thead");
    thead.innerHTML = `
    <tr>
        <th>Employee(s)</th>
        <th>Service/Package</th>
        <th>Plate Number</th>
        <th>Status</th>
        <th>Last Updated</th>
        <th>Date Created</th>
    </tr>`;
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    for (let a = 0; a < sample_transactions_data.length; a++){
        const data = sample_transactions_data[a].split("<SEP>");
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${data[1]}</td>
        <td>${data[2].includes("<NL>") ? data[2].split("<NL>")[0] + "<br>" + data[2].split("<NL>")[1] : data[2]}</td>
        <td>${data[3]}</td>
        <td>${data[4] == "1" ? "In Progress" : data[4] == "2" ? "Completed" : "Cancelled"}</td>
        <td>${data[5]}</td>
        <td>${data[6]}</td>`;
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    page.appendChild(table);
}

function renderBillingPage(){
    const page = document.querySelector(".billing");
    const table = document.createElement("table");
    table.classList.add("ectable");
    const thead = document.createElement("thead");
    thead.innerHTML = `
    <tr>
        <th>Balance</th>
        <th>Remaining Balance</th>
        <th>Status</th>
        <th>Last Updated</th>
        <th>Date Created</th>
    </tr>`;
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    for (let a = 0; a < sample_billing_data.length; a++){
        const data = sample_billing_data[a].split("<SEP>");
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${data[1]}</td>
        <td>${data[2]}</td>
        <td>${data[3] == "1" ? "Unpaid" : data[3] == "2" ? "Paid" : "Cancelled"}</td>
        <td>${data[4]}</td>
        <td>${data[5]}</td>`;
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    page.appendChild(table);
}

function renderActivityRecordPage(){
    const page = document.querySelector(".activityrecord");
    const table = document.createElement("table");
    table.classList.add("ectable");
    const thead = document.createElement("thead");
    thead.innerHTML = `
    <tr>
        <th>Date Created</th>
        <th>Activity Message</th>
    </tr>`;
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    for (let a = 0; a < sample_activityrecord_data.length; a++){
        const data = sample_activityrecord_data[a].split("<SEP>");
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${data[0]}</td>
        <td>${data[1]}</td>`;
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    page.appendChild(table);
}

people();
renderEmployeePage();
renderCustomerPage();
renderVehiclePage();
renderServicesPage();
renderPackagesPage();
renderTransactionsPage();
renderBillingPage();
renderActivityRecordPage();

const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];
const barColors = ["red", "green","blue","orange","brown"];

new Chart("sales_chart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "World Wide Wine Production"
        }
    }
});