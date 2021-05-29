function procurar(){
    let heroi = document.getElementById('txtheroi')
    var flash = 'Flash'
    var barry = 'Barry Allen'
    var bat = 'Batman'
    var bruce = 'Bruce Wayne'
    var superm = 'Superman'
    var clark = 'Clark Kent'
    var gato = 'Mulher Gato'
    var kyle = 'Selina Kyle'
    var aranha = 'Homem Aranha'
    var peter = 'Peter Parker'
    var mm = 'Mulher Maravilha'
    var diana = 'Diana'
    var pantera = 'Pantera Negra'
    var t = 'TChalla'
    var wol = 'Wolverine'
    var log = 'Logan'
    
    if(heroi.value.length == 0 ){
        window.alert('ERRO! Por favor, digite o nome do herói.')
    }else{
        if(heroi.value == flash || heroi.value == barry ){
            window.location.href = 'flash.html'
        }else if (heroi.value == bat || heroi.value == bruce){
            window.location.href = 'batman.html'
        }else if (heroi.value == superm || heroi.value == clark){
            window.location.href = 'super.html'
        }else if (heroi.value == gato  || heroi.value == kyle){
            window.location.href = 'mulhergato.html'
        }else if (heroi.value == aranha  || heroi.value == peter){
            window.location.href = 'aranha.html'
        }else if(heroi.value == mm  || heroi.value == diana){
            window.location.href = 'mm.html'
        }else if (heroi.value == pantera || heroi.value == t ){
            window.location.href = 'pantera.html'
        }else if (heroi.value == wol || heroi.value == log ){
            window.location.href = 'wolverine.html'
        }
    }
}