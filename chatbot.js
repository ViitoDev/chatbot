//Inicia
client.initialize();

//Delay das ações
const delay = ms => new Promise(res => setTimeout(res, ms));

//Nome da empresa
const enterprise = //fazer no site/app uma aba pra falar o nome da empresa

//Funil
client.on("message", async msg => {
    if(msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith("@c.us")) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping();
        await delay(3000);
        const contact = await msg.Contact();
        const name = contact.pushname;
        await client.sendMessage(msg.from, "Olá! "+ name.split(" ")[0] + "Sou o assistente virtual do " + enterprise + ". Como posso ajudar? Por favor, digite uma das opções abaixo: \n\n1 - Quais são os serviços?\n2 - Quero fazer um orçamento \n3 Outras perguntas");
        await delay (3000);
        await chat.sendStateTyping();
        await delay (3000);
    }

    if (msg.body !== null && msg.body === "1" && msg.from.endsWith("@c.us")) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, ""); //Mensagem falando os serviços
    }

    if (msg.body !== null && msg.body === "2" && msg.from.endsWith("@c.us")) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, ""); //Mensagem para fazer orçamento
    }

    if (msg.body !== null && msg.body === "3" && msg.from.endsWith("@c.us")) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, ""); //Outros tipos de pergunta
    }
})
