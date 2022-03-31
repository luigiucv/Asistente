const prefix = '.'

const menual = 
`
||- *_-GRUPOS-_*
||- *_-ADMINISTRADORES-_*
||- *_-Menciones-_*

[📧] ${prefix}tagall
[📧] ${prefix}alltag

||- *_-Bienvenida / Despedida-_*
[💭] ${prefix}welcome on
[💭] ${prefix}bv on 
[💭] ${prefix}bienvenida on 
[💭] ${prefix}welcome off
[💭] ${prefix}bv off
[💭] ${prefix}bienvenida off 

||- *_-Proteccion de Grupos-_*
[🛡️] ${prefix}antilink on / off
[🛡️] ${prefix}antifake on / off

||- *_-Cambiar Configuracion del Grupo-_*
[🛡️] ${prefix}nombre
[🛡️] ${prefix}changename
[🛡️] ${prefix}dewdesc
[🛡️] ${prefix}changedescripcion
[🛡️] ${prefix}grupo abrir
[🛡️] ${prefix}grupo cerrar

||- *_-Lista de Usuarios Enlinea-_*
[🍬] ${prefix}listonline
[🍬] ${prefix}listaenlinea
[🍬] ${prefix}enlinea
[🍬] ${prefix}online

||- *_-Lista de Administradores-_*
[🍬] ${prefix}adminlist
[🍬] ${prefix}listadmin
[🍬] ${prefix}administradores

||- *_-USUARIO-_*
_Tu link de WhatsApp_
[🍬] ${prefix}milink

_Tu Perfil e Informaciones_
[🍬] ${prefix}itsme
[🍬] ${prefix}yo

||- *_-MENU DE STICKER-_*
[🧩] ${prefix}s
[🧩] ${prefix}sticker
[🧩] ${prefix}attp (+ texto)
[🧩] ${prefix}attp1 (+ texto)
[🧩] ${prefix}emoji (+ un emoji)
[🧩] ${prefix}toimg
[🧩] ${prefix}aimg

||- *_🎮-JUEGOS-🎮_*

[💈] ${prefix}vor
[💈] ${prefix}verdadoreto
||- *_-El bot te cuenta un chiste-_*
[💈] ${prefix}chiste

||- *_-MULTIMEDIA/DESCARGAS-_*
||- *_-Busqueda de Imagen-_*

[📟]${prefix}imagen (+nombre img)
[📟]${prefix}wp

||- *_-Descargar Videos-_*
[📹] ${prefix}ytmp4 (+link)


||- *_-Efectos Para Videos-_*
[📹] ${prefix}sinsonido
[📹] ${prefix}vefecto
[📹] ${prefix}mirror 
[📹] ${prefix}vlento
[📹] ${prefix}vrapido
[📹] ${prefix}reversa 

||- *_-Descargar Musica-_*
[🎧] ${prefix}ytmp3
[🎧] ${prefix}play

||- *_-Efectos Para Audio-_*
[🎙️] ${prefix}bass
[🎙️] ${prefix}trigger
[🎙️] ${prefix}lento 
[🎙️] ${prefix}rapido
[🎙️] ${prefix}ardilla
[🎙️] ${prefix}imut
[🎙️] ${prefix}hode
[🎙️] ${prefix}grave 
[🎙️] ${prefix}fantasma

||- *_-OWNER/BOT/DUEÑO DEL BOT-_*
||- *_-Banear Usuario del Bot-_*
[💈] ${prefix}ban

||- *_-Desbanear Usuario del Bot-_*
[💈] ${prefix}unban
[💈] ${prefix}desban

||- *_-Cambiar a Modo Self/Privado-_*
[💈] ${prefix}privado
[💈] ${prefix}self

||- *_-Cambiar a Modo Publico-_*
[🛡️] ${prefix}publico

||- *_-Salir de un grupo-_*
[🛡️] ${prefix}salir

||- *_-Apagar el bot-_*
[🛡️] ${prefix}apagar

||- *_-EXTRA-_*
[💈] ${prefix}spam palabra|cantidad
`
const grupos =  
`||- *_-INFORMACIONES-_*

_Estado del bot_
[📟]${prefix}infobot

_Velocidad del Bot_
[📟]${prefix}ping

||- *_-GRUPOS-_*
[🍬] ${prefix}autokick

||- *_-Lista de Usuarios Enlinea-_*
[🍬] ${prefix}listonline
[🍬] ${prefix}listaenlinea
[🍬] ${prefix}enlinea
[🍬] ${prefix}online

||- *_-Lista de Administradores-_*
[🍬] ${prefix}adminlist
[🍬] ${prefix}listadmin


||- *_-EXTRA-_*
[🍬] ${prefix}infogp
[🍬] ${prefix}infogrupo

||- *_-USUARIO-_*
_Tu link de WhatsApp_
[🍬] ${prefix}milink

_Tu Perfil e Informaciones_
[🍬] ${prefix}miperfil
[🍬] ${prefix}itsme
[🍬] ${prefix}yo

_Link de otro usuario_
[🍬] ${prefix}wa.me numero
[🍬] ${prefix}wame numero
`
const admin =  `||- *_-GRUPOS-_*

๑۩۞۩๑ 𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚...๑۩۞۩๑

||- *_-Menciones-_*

[📧] ${prefix}hidetag
[📧] ${prefix}miembros
[📧] ${prefix}tagall
[📧] ${prefix}alltag

||- *_-Bienvenida / Despedida-_*
[💭] ${prefix}welcome on
[💭] ${prefix}bv on 
[💭] ${prefix}bienvenida on 
[💭] ${prefix}welcome off
[💭] ${prefix}bv off
[💭] ${prefix}bienvenida off 

||- *_-Proteccion de Grupos-_*
[🛡️] ${prefix}antilink on / off
[🛡️] ${prefix}antifake on / off

||- *_-Cambiar Configuracion del Grupo-_*
[🛡️] ${prefix}nombre
[🛡️] ${prefix}newnombre
[🛡️] ${prefix}descripcion
[🛡️] ${prefix}newdesc
[🛡️] ${prefix}grupo abrir
[🛡️] ${prefix}grupo cerrar`

const multimedia = `๑۩۞۩๑ 𝐌𝐮𝐥𝐭𝐢𝐦𝐞𝐝𝐢𝐚..๑۩۞۩๑

||- *_-Busqueda de Imagen-_*

[📟]${prefix}imagen (+ imagen)
[📟]${prefix}wp

||- *_-Descargar Videos-_*

[📹] ${prefix}ytmp4 (+link)


||- *_-Efectos Para Videos-_*
[📹] ${prefix}sinsonido
[📹] ${prefix}vefecto
[📹] ${prefix}mirror 
[📹] ${prefix}vlento
[📹] ${prefix}vrapido
[📹] ${prefix}reversa 

||- *_-Descargar Musica-_*

[🎧] ${prefix}ytmp3
[🎧] ${prefix}play

||- *_-Efectos Para Audio-_*
[🎙️] ${prefix}bass
[🎙️] ${prefix}trigger
[🎙️] ${prefix}lento 
[🎙️] ${prefix}rapido
[🎙️] ${prefix}ardilla
[🎙️] ${prefix}imut
[🎙️] ${prefix}hode
[🎙️] ${prefix}grave 
[🎙️] ${prefix}fantasma
`
const owener = `๑۩۞۩๑ 𝐎𝐰𝐧𝐞𝐫 𝐨 𝐁𝐨𝐭..๑۩۞۩๑

||- *_-Banear Usuario del Bot-_*

[💈] ${prefix}ban

||- *_-Desbanear Usuario del Bot-_*

[💈] ${prefix}unban
[💈] ${prefix}desban

||- *_-Cambiar a Modo Self/Privado-_*
[💈] ${prefix}privado
[💈] ${prefix}self

||- *_-Cambiar a Modo Publico-_*
[🛡️] ${prefix}publico

||- *_-Salir de un grupo-_*
[🛡️] ${prefix}salir

||- *_-Apagar el bot-_*
[🛡️] ${prefix}apagar

||- *_-/ / / / -_*
[💈] ${prefix}spam palabra|cantidad`

const entrete = `๑۩۞۩๑ 𝐉𝐮𝐞𝐠𝐨𝐬/𝐄𝐧𝐭𝐫𝐞𝐭𝐞𝐧𝐢𝐦𝐢𝐞𝐧𝐭𝐨.๑۩۞۩๑

||- *_🎮-JUEGOS-🎮_*

[💈] ${prefix}vor

||- *_-TOP-_*

[💈] ${prefix}top5 (Texto)
[💈] ${prefix}rangay

||- *_-El bot te cuenta un chiste-_*
[💈] ${prefix}chiste

||- *_-Top y Rank-_*
[💈] ${prefix}topgay
[💈] ${prefix}rankgay
[💈] ${prefix}topguapos
[💈] ${prefix}topfeos
[💈] ${prefix}tophot
`

const menusticker = 
`||- *_-MENU DE STICKER-_*
[🧩] ${prefix}s
[🧩] ${prefix}sticker
[🧩] ${prefix}attp (+ texto)
[🧩] ${prefix}attp1 (+ texto)
[🧩] ${prefix}emoji (+ un emoji)
[🧩] ${prefix}toimg
[🧩] ${prefix}aimg
`

const extro =  
`
[💈]contacto 
`
module.exports = 
{grupos, admin, multimedia, owener, entrete, menusticker, menual} 