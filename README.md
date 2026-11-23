# Bom dia, meu amor ❤️

Experiência romântica criada especialmente para Andressa. Site estático, responsivo e publicado pelo GitHub Pages.

## Site
https://lzdeveloperbr.github.io/bom-dia-meu-amor/

## O que tem
- Abertura cinematográfica com céu estrelado e brilho ambiente.
- Rosa SVG com animação interativa e pétalas.
- Carta romântica personalizada.
- Contador de relacionamento desde **17/11/2024** (anos, meses, dias, horas e minutos).
- Linha do tempo sem inventar acontecimentos pessoais.
- Espaço para fotos do casal.
- Mensagem diária, abraço virtual e mensagem final.
- Player opcional de música, que só toca após interação.
- Layout adaptado para celular e desktop, com respeito a redução de movimento.

## Personalização rápida
O conteúdo principal está em `index.html`. No início do script há um objeto `CONFIG`:

- `startDate`: data de início do relacionamento.
- `photos`: lista de caminhos/URLs das fotografias que deseja exibir.
- `musicPath`: caminho da música opcional.

Para adicionar música, coloque um arquivo autorizado chamado `nossa-musica.mp3` dentro de `assets/`. O player não inicia sozinho; a pessoa precisa tocar no botão Música.

Para fotos, coloque as imagens no repositório e informe seus caminhos no array `photos`, por exemplo: `["assets/foto-1.jpg","assets/foto-2.jpg"]`.

## Publicação
As alterações na branch `main` são publicadas pelo GitHub Pages/GitHub Actions conforme a configuração do repositório. Após o commit, aguarde a conclusão do workflow para ver a versão atualizada.
