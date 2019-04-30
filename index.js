
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const links = require("./links.json");
const moment = require('moment');
const ms = require('ms');

moment.locale("pt-BR");



client.on("guildMemberAdd", member => { 
  const embed = {
    "title": "~~(BEM VINDO)~~",
    "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/571707722400268310/571764098715615252/5a5e2966-e282-4b6e-85be-829a00ed3578.png"
    },
    "image": {
      "url": "https://cdn.discordapp.com/attachments/571707722400268310/571764098715615252/5a5e2966-e282-4b6e-85be-829a00ed3578.png"
    },
    "author": {
      "name": "member.user.username",
      "icon_url": "member.user.avatarURL"
    },
    "fields": [
      {
        "name": "🐦",
        "value": "me siga no [twitter](https://twitter.com/mingotaku) "
      },
      {
        "name": "📺",
        "value": "inscreva-se no [canal](https://www.youtube.com/channel/UCh-1M-5urjYBd8NLCvJqanQ)"
      },
      {
        "name": "📢",
        "value": "fique atento nas notificaçoes do canal nao perca videos novo"
      },
      {
        "name": "👮",
        "value": "leia as regras ou e ban",
        "inline": true
      },
      {
        "name": "🙃",
        "value": "nao seja kid e se divirta",
        "inline": true
      }
    ]
  };
  member.guild.channels.find("name","🏨│bem-vindos│🏨").send({embed});
});

      


client.on("ready", async () =>{
  console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
let status = [
    {name: 'Free Fire🔥', type: 'PLAYING'},
    {name: 'Assistindo tua mãe pelada😎', type: 'WHATCHING'},
    {name: 'gemidao do zap', type: 'LISTENING'},
    {name: 'Ajuda, veja meu comando digitando !ajuda', type: 'STREAMING', url: 'https://www.twitch.tv/mingsug'}
];

function setStatus() {
  let altstatus = status[Math.floor(Math.random()*status.length)]
  client.user.setPresence({game: altstatus})
};

setStatus();
setInterval(() => setStatus(), 5000)

});

client.on("message", async message => {

    responseObject = links;
  if(responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }  

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


//comando para kick
if(message.content.startsWith(config.prefix + 'kick')){
  if(!message.member.roles.some(r=>["The Subsíndicos🔨🔧", "The Síndico🛡️", "Program🌟"].includes(r.name)) )
  return message.reply("Você não tem permissão para usar este comando!");
  let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!member)
  return message.reply("Você não mencionou ninguém válido.");
  if (!member.kickable)
  return message.reply("Não posso kickar o usuário mencionado!");
  let reason = args.slice(1).join(' ');
  if (!reason) reason = "Nenhuma razão mencionada.";
  await member.kick(reason)
  .catch(error => message.reply(`Ei, ${message.author} Não consegui kickar o usuário Mencionado por: ${error} :8552_no:`));
  let channelKick;
  if (message.guild === "554505011015712770") channelKick = client.channels.get(channelBanKick)
  else channelKick = message.channel;

   const embedKick = new Discord.RichEmbed()
  .setAuthor("Iniciando Log...")
  .setColor("")
  .addField("<:KannaSip:572503516501770260> | Staff:", `${message.author.username}#${message.author.discriminator}`, true)
  .addField("💢 | Kickado", `${member.user.tag}`,)
  .addField("<:AwOo:572503515533017120> | Motivo", `**${reason}**`)
  .setFooter(`Log terminado!`)
  .setTimestamp()

  channelKick.send(embedKick);
}
//comando para ban      
if(message.content.startsWith(config.prefix + 'ban')){
  if(!message.member.roles.some(r=>["The Subsíndicos🔨🔧", "The Síndico🛡️", "Program🌟"].includes(r.name)) )
  return message.reply("Você não tem permissão para usar este comando!");
  let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!member)
  return message.reply("Você não mencionou ninguém válido.");
  if (!member.bannable)
  return message.reply("Não posso kickar o usuário mencionado!");
  let reason = args.slice(1).join(' ');
  if (!reason) reason = "Nenhuma razão mencionada.";
  await member.ban(reason)
  .catch(error => message.reply(`Ei, ${message.author} Não consegui kickar o usuário Mencionado por: ${error} :8552_no:`));
  let channelban;
  if (message.guild === "554505011015712770") channelban = client.channels.get(channelBan)
  else channelban = message.channel;

   const embedban = new Discord.RichEmbed()
  .setAuthor("Iniciando Log...")
  .setColor("")
  .addField("<:KannaSip:572503516501770260> | Staff:", `${message.author.username}#${message.author.discriminator}`, true)
  .addField("💢 | banido", `${member.user.tag}`,)
  .addField("<:AwOo:572503515533017120> | Motivo", `**${reason}**`)
  .setFooter(`Log terminado!`)
  .setTimestamp()

  channelKick.send(embedban);
}

//Limpar mensagens      
      if(command === "cleann") {
        //define a quantidade como numeros
        const deleteCount = parseInt(args[0], 10);

        if(!deleteCount || deleteCount < 2 || deleteCount > 100)
          return message.reply("Plz insira um número entre 2 e 100 para deletar");
        
        //deleta
        const fetched = await message.channel.fetchMessages({count: deleteCount});
        message.channel.bulkDelete(fetched)
          .catch(error => message.reply(`Erro ao deletar as mensagens: ${error}`));
      } 
      
      const msgs = message.content.slice(config.prefix.length).trim().split(/ +/g);
      if(message.content.startsWith(config.prefix + 'mudarnick')){
        message.member.setNickname(msgs[1]);
        message.channel.send(message.author + " agora se chama " + msgs[1]);
        
      }
if(command === "ajuda") {
  const embed = {
    "title": "~~(AJUDA)~~",
    "color": 13644244,
    "footer": {},
    "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/571707722400268310/571764098715615252/5a5e2966-e282-4b6e-85be-829a00ed3578.png"
    },
    "image": {
      "url": "https://cdn.discordapp.com/attachments/571707722400268310/571764098715615252/5a5e2966-e282-4b6e-85be-829a00ed3578.png"
    },
    "author": {
      "name": "m1nb",
      "icon_url": "https://cdn.discordapp.com/attachments/571707722400268310/571764098715615252/5a5e2966-e282-4b6e-85be-829a00ed3578.png"
    },
    "fields": [
      {
        "name": "🍃",
        "value": "comandos: !ming, !live, !versao, !jooj, !freefire, !seucu, !kkk, !farofa, !mingo, !yunglixo, !roblox, !kermit, !jojo, !charutouzucrack, !loli, !rola, !cleann, !kickk, !bann & !tigree, !aleatorio, !svinfo, !meupapai, !ping, !report & !addrole."
      },
      {
        "name": "🍃",
        "value": "leia as regras"
      },
      {
        "name": "🍃",
        "value": "o m1nb vai come seu cu se voçe nao respeitar as regras"
      },
      {
        "name": "🍃",
        "value": "ming é",
        "inline": true
      },
      {
        "name": "🍃",
        "value": "foda",
        "inline": true
      }
    ]
  };
  message.member.send({ embed });  
}

if (command === 'aleatorio') {
  let aleatorio = [
      "toma no cu",
      "HENTAI",
      "comi o cu de quem ta lendo",
      "Seu retardado!",
      "hehe boy",
      "cu",
      "jooj",
      "ming cabelo de mulher",
      "tigre é viado",
      "JAAJ",
      "KERMIT",
      "minha rola",
      "chupa meu pão",
      "ha",
      "loli",
      "dragon ball sus",
      "jooj ball z",
      "bla",
      "banana",
      "pao",
      "batata",
      "roblox",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
  ]

  let rAleatorio = Math.floor((Math.random() * aleatorio.length));

  const embed    = new Discord.RichEmbed()
      .setTitle(`${message.author.username}`)
      .setDescription(aleatorio[rAleatorio])
      .setFooter('a')
      .setTimestamp()

  message.channel.send(embed);
} 
if(message.content.startsWith(config.prefix + 'svinfo')){
  let guildA = message.guild.iconURL;
  var guild = message.guild;
  let embed = new Discord.RichEmbed()
  
  
  .setTimestamp()
  .setTitle(`${guild.name}`)
  .setThumbnail(guildA)
  .setColor("RANDOM")
  .setDescription(`Aqui estão as informações do Server: ${guild.name}.`)
  .addField(`[<:3803_Thonking:572502343556268033>] Sua ID:`, message.guild.id, true)
  .addField(`[<:hitormix:565985958768541697>]Dono do Servidor:`, message.guild.owner, true)
  .addField(`[<:2370_EmoOof:572503167728615434>] Região:`, message.guild.region, true)
  .addField(`[<:7974_rimuru_lewd_hearteyes:572503515814166528>] Canais ativos:`, message.guild.channels.size, true)
  .addField(`[<:KannaSip:572503516501770260>] Fundada Em:`, moment(message.guild.createdAt).format('LLLLLL'))
  .addField(`[<:remVV:572503516271214811>] Você Entrou em:`, moment(message.member.joinedAt).format('LLLLLL'))
  .addField(`[<:LewdMegumin:572503515621097484>] Eu Entrei em:`, moment(client.user.joinedAt).format('LLLLLL'))
  .addField(`[📢] Contador de Membros:`, message.guild.memberCount)
  .setFooter(`Comando enviado por ${message.author.username}#${message.author.discriminator}`, client.user.displayAvatarURL)

  message.channel.send(embed);
}
if(command === 'ping'){
  const ms = await message.channel.send("Ping?");
  const botms = ms.createdTimestamp - message.createdTimestamp
    ms.edit('🏓 | **Pong!** \n ⚡ | **Bot Ping:** ' + botms + 'ms \n 🏠 | **Bot + Servidor!** ' + Math.round(client.ping) + 'ms');
}


if(message.content.startsWith(config.prefix + "addrole")){
  if(!message.member.roles.some(r=>["The Subsíndicos🔨🔧", "The Síndico🛡️", "Program🌟"].includes(r.name)) )
  return message.reply("Você não tem permissão para usar este comando!");
    let member = message.mentions.members.first();
    if(!member) return message.reply("**ERRO!**: Usuário Não Especificado.");

    let role = msgs[2];
    if(!role) return message.reply("**ERRO**: Você não especificou a role ou você escreveu de uma forma que eu não entendi, :blobconfounded:");

    let rrole = message.guild.roles.find("name", role);
    if(!rrole) return message.reply("**ERRO**: Desculpe, mas não encontrei a role.. ");
    if(member.roles.has(rrole.id)) return message.reply("**ERRO**: O Usuário mencionado já tem esta role.");

    member.addRole(rrole.id);
    message.channel.send(member + " Ganhou a role " + rrole);}

    if (command === 'report'){
      //+report @NotCoolUser not cool
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if (!rUser) return message.channel.send("**ERRO:** Usuário Não Especificado.");
      let reason = args.join(" ").slice(22);
  
      let embed = new Discord.RichEmbed()
      .setDescription("Log do Report")
      .setColor("#cc0000")
      .addField('👤 | Usuário Reportado:', `${rUser} \n Sua ID: ${rUser.id}`)
      .addField('👮 | Reportado Por:', `${message.author} \n Sua ID: ${message.author.id}`)
      .addField('📄 | Canal do Report:', message.channel)
      .addField('⏰ | Tempo do Report:', message.createdAt)
      .addField('🤔 | Razão do Report:', reason)
  
      let rChannel = message.guild.channels.find('name', "🗣│denunciar-moradores│🗣");
      if(!rChannel) return message.channel.send('**ERRO:** Não consegui Encontrar o Canal report.')
  
  
      message.delete().catch(O_o=>{});
      rChannel.send(embed);
  
      return;
    }

//end module

});

client.login(config.token);