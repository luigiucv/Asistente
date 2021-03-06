const prefix = '.'

const menual = 
`
||- *_-GRUPOS-_*
||- *_-ADMINISTRADORES-_*
||- *_-Menciones-_*

[๐ง] ${prefix}tagall
[๐ง] ${prefix}alltag

||- *_-Bienvenida / Despedida-_*
[๐ญ] ${prefix}welcome on / off 
[๐ญ] ${prefix}bv on / off  
[๐ญ] ${prefix}bienvenida on / off 

||- *_-Proteccion de Grupos-_*
[๐ก๏ธ] ${prefix}antilink on / off
[๐ก๏ธ] ${prefix}antifake on / off

||- *_-Cambiar Configuracion del Grupo-_*
[๐ก๏ธ] ${prefix}nombre (+ nuevo nombre)
[๐ก๏ธ] ${prefix}changename (+ nuevo nombre)
[๐ก๏ธ] ${prefix}dewdesc (+ nueva descripciรณn)
[๐ก๏ธ] ${prefix}changedescripcion (+ nueva descripciรณn)
[๐ก๏ธ] ${prefix}grupo abrir / cerrar

||- *_-Lista de Usuarios Enlinea-_*
[๐ฌ] ${prefix}listonline
[๐ฌ] ${prefix}listaenlinea
[๐ฌ] ${prefix}enlinea
[๐ฌ] ${prefix}online

||- *_-Lista de Administradores-_*
[๐ฌ] ${prefix}adminlist
[๐ฌ] ${prefix}listadmin
[๐ฌ] ${prefix}administradores

||- *_-USUARIO-_*
_Tu link de WhatsApp_
[๐ฌ] ${prefix}milink

_Tu Perfil e Informaciones_
[๐ฌ] ${prefix}itsme
[๐ฌ] ${prefix}yo

||- *_-MENU DE STICKER-_*
[๐งฉ] ${prefix}s
[๐งฉ] ${prefix}sticker
[๐งฉ] ${prefix}attp (+ texto)
[๐งฉ] ${prefix}attp1 (+ texto)
[๐งฉ] ${prefix}emoji (+ un emoji)
[๐งฉ] ${prefix}toimg
[๐งฉ] ${prefix}aimg

||- *_๐ฎ-JUEGOS-๐ฎ_*

[๐] ${prefix}vor
[๐] ${prefix}verdadoreto
||- *_-El bot te cuenta un chiste-_*
[๐] ${prefix}chiste

||- *_-MULTIMEDIA/DESCARGAS-_*
||- *_-Busqueda de Imagen-_*

[๐]${prefix}imagen (+nombre img)
[๐]${prefix}wp

||- *_-Descargar Videos-_*
[๐น] ${prefix}ytmp4 (+link)


||- *_-Efectos Para Videos-_*
[๐น] ${prefix}sinsonido
[๐น] ${prefix}vefecto
[๐น] ${prefix}mirror 
[๐น] ${prefix}vlento
[๐น] ${prefix}vrapido
[๐น] ${prefix}reversa 

||- *_-Descargar Musica-_*
[๐ง] ${prefix}ytmp3
[๐ง] ${prefix}play

||- *_-Efectos Para Audio-_*
[๐๏ธ] ${prefix}bass
[๐๏ธ] ${prefix}trigger
[๐๏ธ] ${prefix}lento 
[๐๏ธ] ${prefix}rapido
[๐๏ธ] ${prefix}ardilla
[๐๏ธ] ${prefix}imut
[๐๏ธ] ${prefix}hode
[๐๏ธ] ${prefix}grave 
[๐๏ธ] ${prefix}fantasma

||- *_-OWNER/BOT/DUEรO DEL BOT-_*
||- *_-Banear Usuario del Bot-_*
[๐] ${prefix}ban

||- *_-Desbanear Usuario del Bot-_*
[๐] ${prefix}unban
[๐] ${prefix}desban

||- *_-Cambiar a Modo Self/Privado-_*
[๐] ${prefix}privado
[๐] ${prefix}self

||- *_-Cambiar a Modo Publico-_*
[๐ก๏ธ] ${prefix}publico

||- *_-Salir de un grupo-_*
[๐ก๏ธ] ${prefix}salir

||- *_-Apagar el bot-_*
[๐ก๏ธ] ${prefix}apagar

||- *_-EXTRA-_*
[๐] ${prefix}spam palabra|cantidad
`
const grupos =  
`||- *_-INFORMACIONES-_*

_Estado del bot_
[๐]${prefix}infobot

_Velocidad del Bot_
[๐]${prefix}ping

||- *_-GRUPOS-_*
[๐ฌ] ${prefix}autokick

||- *_-Lista de Usuarios Enlinea-_*
[๐ฌ] ${prefix}listonline
[๐ฌ] ${prefix}listaenlinea
[๐ฌ] ${prefix}enlinea
[๐ฌ] ${prefix}online

||- *_-Lista de Administradores-_*
[๐ฌ] ${prefix}adminlist
[๐ฌ] ${prefix}listadmin

||- *_-EXTRA-_*
[๐ฌ] ${prefix}infogp
[๐ฌ] ${prefix}infogrupo

||- *_-USUARIO-_*
_Tu link de WhatsApp_
[๐ฌ] ${prefix}milink

_Tu Perfil e Informaciones_
[๐ฌ] ${prefix}miperfil
[๐ฌ] ${prefix}itsme
[๐ฌ] ${prefix}yo

_Link de otro usuario_
[๐ฌ] ${prefix}wa.me numero
[๐ฌ] ${prefix}wame numero
`
const admin =  `||- *_-GRUPOS-_*

เน?ฉ??ฉเน ๐๐๐ฆ๐ข๐ง๐ข๐ฌ๐ญ๐ซ๐...เน?ฉ??ฉเน

||- *_-Menciones-_*

[๐ง] ${prefix}hidetag
[๐ง] ${prefix}miembros
[๐ง] ${prefix}tagall
[๐ง] ${prefix}alltag

||- *_-Bienvenida / Despedida-_*
[๐ญ] ${prefix}welcome on / off
[๐ญ] ${prefix}bv on / off 
[๐ญ] ${prefix}bienvenida on / off 

||- *_-Proteccion de Grupos-_*
[๐ก๏ธ] ${prefix}antilink on / off
[๐ก๏ธ] ${prefix}antifake on / off

||- *_-Cambiar Configuracion del Grupo-_*
[๐ก๏ธ] ${prefix}nombre (+ nuevo nombre)
[๐ก๏ธ] ${prefix}newnombre (+ nuevo nombre)
[๐ก๏ธ] ${prefix}descripcion (+ nueva descripciรณn)
[๐ก๏ธ] ${prefix}newdesc (+ nueva descripciรณn)
[๐ก๏ธ] ${prefix}grupo abrir / cerrar`

const multimedia = `เน?ฉ??ฉเน ๐๐ฎ๐ฅ๐ญ๐ข๐ฆ๐๐๐ข๐..เน?ฉ??ฉเน

||- *_-Busqueda de Imagen-_*

[๐]${prefix}imagen (+ imagen)
[๐]${prefix}wp

||- *_-Descargar Videos-_*

[๐น] ${prefix}ytmp4 (+link)


||- *_-Efectos Para Videos-_*
[๐น] ${prefix}sinsonido
[๐น] ${prefix}vefecto
[๐น] ${prefix}mirror 
[๐น] ${prefix}vlento
[๐น] ${prefix}vrapido
[๐น] ${prefix}reversa 

||- *_-Descargar Musica-_*

[๐ง] ${prefix}ytmp3
[๐ง] ${prefix}play

||- *_-Efectos Para Audio-_*
[๐๏ธ] ${prefix}bass
[๐๏ธ] ${prefix}trigger
[๐๏ธ] ${prefix}lento 
[๐๏ธ] ${prefix}rapido
[๐๏ธ] ${prefix}ardilla
[๐๏ธ] ${prefix}imut
[๐๏ธ] ${prefix}hode
[๐๏ธ] ${prefix}grave 
[๐๏ธ] ${prefix}fantasma
`
const owener = `เน?ฉ??ฉเน ๐๐ฐ๐ง๐๐ซ ๐จ ๐๐จ๐ญ..เน?ฉ??ฉเน

||- *_-Banear Usuario del Bot-_*

[๐] ${prefix}ban

||- *_-Desbanear Usuario del Bot-_*

[๐] ${prefix}unban
[๐] ${prefix}desban

||- *_-Cambiar a Modo Self/Privado-_*
[๐] ${prefix}privado
[๐] ${prefix}self

||- *_-Cambiar a Modo Publico-_*
[๐ก๏ธ] ${prefix}publico

||- *_-Salir de un grupo-_*
[๐ก๏ธ] ${prefix}salir

||- *_-Apagar el bot-_*
[๐ก๏ธ] ${prefix}apagar

||- *_-/ / / / -_*
[๐] ${prefix}spam palabra|cantidad`

const entrete = `เน?ฉ??ฉเน ๐๐ฎ๐๐?๐จ๐ฌ/๐๐ง๐ญ๐ซ๐๐ญ๐๐ง๐ข๐ฆ๐ข๐๐ง๐ญ๐จ.เน?ฉ??ฉเน

||- *_๐ฎ-JUEGOS-๐ฎ_*

[๐] ${prefix}vor

||- *_-TOP-_*

[๐] ${prefix}top5 (Texto)
[๐] ${prefix}rangay

||- *_-El bot te cuenta un chiste-_*
[๐] ${prefix}chiste

||- *_-Top y Rank-_*
[๐] ${prefix}topgay
[๐] ${prefix}rankgay
[๐] ${prefix}topguapos
[๐] ${prefix}topfeos
[๐] ${prefix}tophot
`

const menusticker = 
`||- *_-MENU DE STICKER-_*
[๐งฉ] ${prefix}s
[๐งฉ] ${prefix}sticker
[๐งฉ] ${prefix}attp (+ texto)
[๐งฉ] ${prefix}attp1 (+ texto)
[๐งฉ] ${prefix}emoji (+ un emoji)
[๐งฉ] ${prefix}toimg
[๐งฉ] ${prefix}aimg
`

const extro =  
`
[๐]contacto 
`
module.exports = 
{grupos, admin, multimedia, owener, entrete, menusticker, menual} 