//quando esta assim, esta variavel esta no contexto global.
//colocar coisas no escopo global nao é bom pois outros arquivos
//podem alterar os valores e ocasionar erros dificeis de serem encontrados

//entao uma declaracao como esta?
//var Estado = (function () {
//nao deve ocorrer

//no javascript nao existe uma forma de fazer arquivos
//isolados, impedindo outros arquivos acessarem os dados

//entao podemos utilizar uma tecnica, criando namespaces
//ao inves de termos variaveis soltas no sistema, podemos
//criar uma variavel que ficara no escopo global
//e ela armazenara as variaveis

var Algaworks = {};//nome do projeto por exemplo
Algaworks.Estado = (function () {//colocado a variavel como propriedade do objeto
	function Estado() {
		this.comboEstado = $('#combo-estado');
		this.emmiter = $({});
		this.on = this.emmiter.on.bind(this.emmiter);
	}

	Estado.prototype.iniciar = function() {
		$.ajax({
			url: 'http://localhost:8080/estados',
			method: 'GET',
			dataType: 'jsonp',
			success: onEstadosRetornados.bind(this),
			error: onError
		});

		this.comboEstado.on('change', onEstadoAlterado.bind(this));
	}

	function onEstadoAlterado() {
		this.emmiter.trigger('alterado', this.comboEstado.val());
	}

	function onEstadosRetornados(estados) {
		this.comboEstado.html('<option value="">Selecione o estado</option>');

		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);

			this.comboEstado.append(optionEstado);
		}.bind(this));
	}

	function onError() {
		alert('erro carregando os estados do servidor');
	}

	return Estado;


})();

Algaworks.Cidade = (function () {
	function Cidade(estado) {
		this.comboCidade = $('#combo-cidade');
		this.estado = estado;

	}

	Cidade.prototype.iniciar = function () {
		this.estado.on('alterado', onEstadoSelecionado.bind(this));
	}

	function onEstadoSelecionado(evento, uf) {
		if(uf) {
			$.ajax({
				url: 'http://localhost:8080/cidades',
				method: 'GET',
				dataType: 'jsonp',
				data: {
					uf: uf
				},
				success: onCidadesRetornadas.bind(this),
				error: onError
			});
		}else {
			this.comboCidade.html('');
			this.comboCidade.attr('disabled', 'disabled');
		}
	}

	function onCidadesRetornadas(cidades) {
		this.comboCidade.removeAttr('disabled');
		this.comboCidade.html('<option>Selecione a cidade</option>');
		cidades.forEach(function (cidade) {
			var optionCidade = $('<option>').val(cidade.codigo).text(cidade.nome);
			this.comboCidade.append(optionCidade);
		}.bind(this));
	}

	function onError() {
		alert('erro carregando cidades');
	}

	return Cidade;

})();

$(function() {
	var estado = new Algaworks.Estado();//usando o namespace
	estado.iniciar();

	var cidade = new Algaworks.Cidade(estado);//usando o namespace
	cidade.iniciar();

});

