# Fichamento "HTML & CSS: Fifth edition" (2010, Thomas A. Powell)
[Download](https://www.dcpehvpm.org/E-Content/BCA/BCA-II/Web%20Technology/the-complete-reference-html-css-fifth-edition.pdf)

## HTML e XHTML tradicional

Linguagens de marcação (Markup languages) são onipresentes no dia a dia computacional. Apesar de não percebermos, o processamento de texto em documentos é repleto de marcações com diretivas indicando a estrutura e muitas vezes, apresentando o documento. Isso pode não parecer óbvio em alguns tipos de documento WYSIWYG ("What You See Is What You Get" - O que você vê é o que você obtém) mas no caso de documentos Web, isso é mais evidente, sobretudo em se tratando da linguagem de marcação em hipertexto ("Hypertext Markup Language" - HTML) e seu variável extensível ("Extensible Markup Language" - XML), chamada também de XHTML. Essas estruturas são mais óbvias, pois precisam informar aos navegadores web sobre a estrutura da página, tal como sua apresentação.

### Primeiro olhar

No caso do HTML, as instruções encontradas dentro de uma página Web se apoiam sob uma estrutura que os navegadores entendem. Por exemplo, ao enfatizar uma porção de um texto, você deve envolve-lo em um bloco de marcação ("tag") que indique que aquela porção de caracteres obedece a uma determinada regra de formação, como no caso:

```html
<p>Isso é um parágrafo</p>
<p><em>Isso é um parágrafo com um texto importante!</em></p>
<p>Isso é um parágrafo com um texto menos importante.</p>
<p>Isso é um parágrafo com um texto menos importante.<em>E outro, importante!</em></p>
```

> Grifo meu: Isso fica mais próximo do conceito de WYSIWYM ("What You See Is What You Mean" - O que você vê é aquilo o que você _quer dizer_), e pode ser visto no Latex ou no Markdown, por exemplo. Poderia até forçar a barra aqui e dizer que, em uma linguagem de programação frontend (por exemplo), essa mesma ideia **poderia** ser interpretada como "O que você vê é aquilo que você **propõe/espera que aconteça**". E é por isso que **linguagens de marcação não podem ser consideradas linguagens de programação**, justamente por sua natureza ser explícita.

Quando um navegador web lê um documento HTML com essas marcações, isso determina como o documento será renderizado (traduzido visualmente para o plano 2D) na tela. Ou seja, o documento HTML, tal como um documento de Folha de Estilos em Cascata (CSS - que funciona como um complemento ao primeiro) **querem dizer** que uma determinada página deve ser representada **de uma determinada forma** para o navegador.

Elementos de _marcação_ são iniciados por uma tag, exemplo `<strong>` (Fonte com destaque) e tipicamente, se encerram com uma tag acrescida de uma barra simples (`/`), como em `</strong>` (Onde se encerra a marcação).

>Grifo do autor do livro: Há distinção quanto a nomenclatura. "Elemento" (ex: `strong`) e "Tag" (ex: `<strong>`) são coisas diferentes embora sejam usadas para marcação, propriamente dita. No entanto é comum ver o uso das palavras "Tag" e "Elemento" para indicar a mesma coisa.

Algumas tags tem seu encerramento inferidos pelo navegador. O caso da tag `<p>` (parágrafo). Apesar disso (ser tecnicamente correto), o autor não encoraja seu não-fechamento.

>Grifo meu: Isso é particularmente importante quando da utilização de bibliotecas que constrõem essas tags dinamicamente via programação, como é o caso do ReactJS.

Existem também, elementos vazios, que servem para indicar coisas específicas naquela parte do documento, como **quebras de linha** por exemplo: caso do `<br>` (line break), que pode ser escrito simplesmente como `<br />` (sem a necessidade de envolver um bloco vazio).

Ou ainda, elementos que possuem **atributos adicionais** para customizar aquele elemento, como no exemplo da linha/régua horizontal (`<hr>`), que pode ter algum atributo particular para customizar sua aparência: `<hr noshade>` ou, no XHTML: `<hr noshade="noshade" />` (onde todo atributo deve possuir um valor).

Um bom exemplo disso é a tag `<img>` que recebe diversos atributos e pode ser escrito dessa forma:

```html
<img src="dog.gif" alt="Angus-Black Scottish Terrier" height="100" width="100">
```

> Novamente, o autor menciona que embora alguns atributos que recebam somente caracteres alfanuméricos, por exemplo: `<p class=fancy>` possam ser escritos sem aspas, o autor recomenda seu uso em todos os contextos, por uma questão de consistência.