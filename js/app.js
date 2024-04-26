new Vue({
    el: '#app',
    data: {
      form: {
        id: '',
        titulo: '',
        data: '',
        imagem: '',
        descricao: '',
        conteudo: ''
      },
      comportamento: {
        descricaoCount: 0,
        descricaoPalavrasCount: 0,
        conteudoCount: 0,
        conteudoPalavrasCount: 0,
        saidaJson: ''
        },
    },
    methods: {
      carregaArquivo(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.criarImagem(files[0]);
      },
      criarImagem(file) {
        let reader = new FileReader();
        let vm = this;
        reader.onload = (e) => {
          vm.form.imagem = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      atualizaDescricaoCount() {
        this.comportamento.descricaoCount = this.form.descricao.length;
        this.comportamento.descricaoPalavrasCount = this.form.descricao.split(' ').length;
      },
      atualizaConteudoCount() {
        this.comportamento.conteudoCount = this.form.conteudo.length;
        this.comportamento.conteudoPalavrasCount = this.form.conteudo.split(' ').length;
      },
      gerarJson() {
        this.comportamento.saidaJson = JSON.stringify(this.form, null, 2);
      }
    }
  });
  