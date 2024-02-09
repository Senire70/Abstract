let body = document.querySelector("body");
let helpBtn = document.querySelector("button#help");


helpBtn.addEventListener("click", () => {
    setTimeout(() => {
        helpBtn.classList.add("descend");
    }, 100);

    setTimeout(createHelpWindow, 1000);
});


function createHelpWindow() {
    //1*elemento padre va en el body
    let helpWindow = document.createElement("div");
    helpWindow.classList.add("help-window");


    //   2*elemento hijo de helpWindow
    let helpWindowHeader = document.createElement("div");
    helpWindowHeader.classList.add("help-window-header")
    //       3*elementos hijos de helpWindowHeader
    let myH4 = document.createElement("h4");
    myH4.textContent = "Abstract"

    let closeWindow = document.createElement("div");
    closeWindow.id = "close-window";
    closeWindow.textContent = "|";
    //           4*unimos
    helpWindowHeader.appendChild(myH4);
    helpWindowHeader.appendChild(closeWindow);

    helpWindow.appendChild(helpWindowHeader);



    //  2*elemento hijo de helpWindow
    let helpWindowMain = document.createElement("div");
    helpWindowMain.classList.add("help-window-main");
    //      3*elemento hijo de helpWindowMain
    let container1 = document.createElement("div");
    container1.classList.add("container");
    //          4*elemento hijo de  de container1
    let content1 = document.createElement("div");
    content1.classList.add("content");
    //              5*elemento hijo de content1
    let eyes1 = document.createElement("div");
    eyes1.classList.add("eyes");

    let eyes2 = document.createElement("div");
    eyes2.classList.add("eyes");
    //                  6*unimos
    content1.appendChild(eyes1);
    content1.appendChild(eyes2);

    container1.appendChild(content1);

    helpWindowMain.appendChild(container1);
    //      3*elemento hijo de helpWindowMain
    let messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");
    //          4*elemento hijo de messageContainer
    let botMessageContainer = document.createElement("div");
    botMessageContainer.classList.add("bot-message-container");

    //          4*
    let userMessage = document.createElement("div");
    userMessage.classList.add("user-message");

    let btnOption = document.createElement("div");
    btnOption.classList.add("btn-option");

    //              5*elemento hijo de botMessageContainer
    let botName = document.createElement("div");
    botName.classList.add("bot-name");
    botName.textContent = "Abstract · Bot";

    //              5*elemento hijo de btnOption
    let span3 = document.createElement("span");
    span3.textContent = "Get in touch";

    let botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    //                  6*elemento hijo de botMessage
    let span1 = document.createElement("span");
    span1.textContent = "Hi! Welcome to Abstract.";

    let span2 = document.createElement("span");
    span2.textContent = "Ask me a question and I'll find the answer for you.";

    //                          7*unimos

    botMessageContainer.appendChild(botName);

    botMessage.appendChild(span1);
    botMessage.appendChild(span2);
    botMessageContainer.appendChild(botMessage);
    messageContainer.appendChild(botMessageContainer);

    messageContainer.appendChild(userMessage);

    btnOption.appendChild(span3);
    messageContainer.appendChild(btnOption);

    helpWindowMain.appendChild(messageContainer)

    helpWindow.appendChild(helpWindowMain)

    //   2*elemento hijo de helpWindow
    let helpWindowFooder = document.createElement("div");
    helpWindowFooder.classList.add("help-window-footer");
    //          3*elemento hijo de helpWindowFooder
    let myInput = document.createElement("input");
    myInput.type = "text";
    myInput.name = "text";
    myInput.id = "text-of-help";
    myInput.placeholder = "Type your question here.."
    //              4*unimos
    helpWindowFooder.appendChild(myInput);

    helpWindow.appendChild(helpWindowFooder);

    body.appendChild(helpWindow);


    closeWindow.addEventListener("click", () => {
        helpWindow.classList.add("descend");
        setTimeout(() => {
            helpWindow.remove();
            helpBtn.classList.remove("descend");
        }, 100);
    });





}

