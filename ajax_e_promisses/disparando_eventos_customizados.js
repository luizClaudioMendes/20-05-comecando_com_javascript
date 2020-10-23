var Estado = (function () {
	function Estado() {
		this.comboEstado = $('#combo-estado');

		this.emmiter = $({});
		this.on = this.emmiter.on.bind(this.emmiter);
		//o on quando alguem der um trigger em emmioter quem tiver on nele recebe o evento

	}

	Estado.prototype.iniciar = function() {
		$.ajax({
			url: 'http://localhost:8080/estados',
			method: 'GET',
			dataType: 'jsonp',
			success: onEstadosRetornados.bind(this),//trocando o objeto. neste momento o this representa o obj do jquery e queremos que o this represente o obj estado
			error: onError
		});

		//quando for alterado o estado sera disparado o trigger 'alterado'
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
		}.bind(this));//trocar o obj this. neste momento o obj this representa a window e queremos que o obj this seja o obj estado
	}

	function onError() {
		alert('erro carregando os estados do servidor');
	}

	return Estado;


})();

var Cidade = (function () {
	function Cidade(estado) {
		this.comboCidade = $('#combo-cidade');
		this.estado = estado;

	}

	Cidade.prototype.iniciar = function () {
		//handle quando o estado for alterado
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
	var estado = new Estado();
	estado.iniciar();

	var cidade = new Cidade(estado);
	cidade.iniciar();

});

